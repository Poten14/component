import { useState, useRef, useCallback, useEffect } from "react";
import BasicSpinner from "../Spinner/BasicSpinner";
import Image from "next/image";

// 컴포넌트의 props 타입 정의
interface InfiniteScrollImageProps {
  images: string[]; // 이미지 URL 배열을 받음
}

const InfiniteScrollImage = ({ images }: InfiniteScrollImageProps) => {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loader = useRef(null);

  const itemsPerPage = 2;

  const loadMoreItems = useCallback(() => {
    if (isLoading || !hasMore) return; // 이미 로딩 중이거나 더 이상 로드할 항목이 없으면 함수 종료

    setIsLoading(true); // 로딩 시작

    setTimeout(() => {
      // 현재 페이지에서 가져올 이미지들의 인덱스 범위 계산
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      // 모든 이미지를 로드했다면 hasMore를 false로 설정
      if (start >= images.length) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }

      // 새로운 이미지 URL들을 선택
      const newItems = images.slice(start, end);

      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);

      setIsLoading(false); // 로딩 종료
    }, 200);
  }, [page, images, isLoading, hasMore]);

  useEffect(() => {
    const options = {
      root: null, // viewport를 root로 사용
      rootMargin: "20px", // viewport 경계로부터 20px 지점에서 교차 감지 시작
      threshold: 1.0, // 타겟 요소가 100% 보일 때 콜백 실행
    };

    // Intersection Observer 생성
    const observer = new IntersectionObserver((entries) => {
      // 관찰 대상이 viewport에 진입하고, 로딩 중이 아니며, 더 불러올 항목이 있을 때 새 항목 로드
      if (entries[0].isIntersecting && !isLoading && hasMore) {
        loadMoreItems();
      }
    }, options);

    const currentLoader = loader.current;

    // 관찰 대상 요소가 존재하면 관찰 시작
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    // 컴포넌트 언마운트 시 observer 정리
    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [loadMoreItems, isLoading, hasMore]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {items.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`image${index + 1}`}
            width={200}
            height={200}
            className="rounded-md border shadow-sm"
          />
        ))}
      </div>
      <div ref={loader} className="py-10 text-center">
        {isLoading && hasMore ? (
          <BasicSpinner />
        ) : hasMore ? (
          "Scroll down to load more"
        ) : (
          "No more items to load"
        )}
      </div>
    </div>
  );
};

export default InfiniteScrollImage;
