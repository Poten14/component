"use client";

import React, { useState } from "react";
import Pagination from "@components/Pagination/Pagination";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl font-bold">Pagination</h1>
      <h3 className="font-small mb-4 text-3xl">border-filled-circle</h3>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        variant="circle"
        color="Basic"
        styleType="filled"
        onPageChange={handlePageChange}
      />

      <div className="my-8"></div>
      <h3 className="font-small mb-4 text-3xl">no-border-filled-circle</h3>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        variant="circle"
        color="Primary"
        styleType="no-border"
        onPageChange={handlePageChange}
      />

      <div className="my-8"></div>
      <h3 className="font-small mb-4 text-3xl">border-filled-square</h3>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        variant="square"
        color="Warning"
        styleType="filled"
        onPageChange={handlePageChange}
      />

      <div className="my-8"></div>

      <h3 className="font-small mb-4 text-3xl">border-outlined-square</h3>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        variant="square"
        color="Primary"
        styleType="outlined"
        onPageChange={handlePageChange}
      />

      <div className="my-8"></div>
    </div>
  );
}
