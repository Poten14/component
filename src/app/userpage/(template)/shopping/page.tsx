"use client";

import React from "react";
import ShoppingForm from "../shopping/components/ShoppingForm";
import RemoteShopping from "app/userpage/Remote/RemoteShopping";

const ShoppingPage = () => {
  return (
    <div className="flex justify-between">
      <div className="w-full p-6 pb-24">
        <h1 className="mb-10 ml-[70px] pb-4 text-2xl font-bold">
          프로필 페이지
        </h1>
        <ShoppingForm />
      </div>
      <div className="fixed right-4 top-14">
        <RemoteShopping />
      </div>
    </div>
  );
};

export default ShoppingPage;
