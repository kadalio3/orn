import MyStoryPage from "@/components/auth/mystory-page";
import Breadcrumb from "@/components/breadcrumb";
import React from "react";

const WritePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-screen-md mx-auto py-10">
        <Breadcrumb pageName="My Novel"/>
        <MyStoryPage />
      </div>
    </div>
  );
};

export default WritePage;
