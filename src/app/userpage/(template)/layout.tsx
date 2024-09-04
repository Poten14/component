import UserPagePrevButton from "@components/Layout/UserPagePrevButton";
export const metadata = {
  title: "Componique",
  description: "Generated by Next.js",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className="flex">
        <section className="fixed h-[calc(100%-120px)] w-[80px] bg-red-100">
          <UserPagePrevButton />
        </section>
        <div className="ml-[85px] w-[calc(100%-340px)] bg-yellow-100">
          {children}
        </div>
        <div className="fixed right-0 h-[calc(100%-120px)] w-[250px] overflow-y-auto bg-green-100">
          <p>오른쪽 시작</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽</p>
          <p>오른쪽 마지막</p>
        </div>
      </div>
    </div>
  );
}
