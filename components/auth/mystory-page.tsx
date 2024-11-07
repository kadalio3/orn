"use client";

import React, { useState } from "react";
import { FaEye, FaBookmark } from "react-icons/fa";

const MyStoryPage = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="bg-slate-50 font-sans flex h-screen items-start justify-start p-4">
      <div>
        {/* Tab container */}
        <div className="max-w-2xl">
          <div className="mb-4 flex p-2 bg-white rounded-lg shadow-md w-64">
            <button
              onClick={() => setOpenTab(1)}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                openTab === 1 ? "bg-blue-600 text-white" : ""
              }`}
              style={{ width: "80%" }}
            >
              Terbit
            </button>
            <button
              onClick={() => setOpenTab(2)}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                openTab === 2 ? "bg-blue-600 text-white" : ""
              }`}
              style={{ width: "50%" }}
            >
              Draft
            </button>
          </div>
        </div>

        {/* Content for Terbit */}
        {openTab === 1 && (
          <div className="flex flex-wrap space-x-4">
            {/* Card 1 */}
            <div className="w-full md:w-3/4 mb-4 bg-white rounded-lg shadow-md p-4">
              <div
                className="grid grid-cols-[27.5%_72.5%] gap-4"
                style={{ gridTemplateRows: "200px" }}
              >
                <div className="relative">
                  <img
                    src="https://assets.kbm-cdn.com/master/cover/cover_ketix_real5-min.png"
                    alt="cover"
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute bottom-0 left-0 right-0 text-center text-white text-xs font-semibold bg-yellow-500 py-2 rounded-b-lg">
                    Belum Selesai
                  </div>
                </div>
                <div className="flex flex-col justify-between pl-4 pr-4">
                  <h5 className="text-2xl font-semibold text-blue-600">
                    Jejak Hilang
                  </h5>
                  <p className="text-sm text-green-600">Novel Roman</p>
                  <p className="line-clamp-2 text-xs text-gray-600">
                    Dengan langkah-langkah yang semakin menjauh, Iqbal berusaha
                    keras memutuskan belenggu masa lalunya, luka-luka yang
                    seakan terukir di setiap sudut ingatan.
                  </p>
                  <p className="text-xs text-gray-400">
                    Terakhir diperbaharui 10 hari yang lalu
                  </p>
                  <div className="flex justify-end items-center space-x-4">
                    <FaEye className="w-5 h-5 text-gray-600" /> {/* Eye icon */}
                    <span className="text-sm">28</span>
                    <FaBookmark className="w-5 h-5 text-gray-600" />{" "}
                    {/* Bookmark icon */}
                    <span className="text-sm">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content for Draft */}
        {openTab === 2 && (
          <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600 w-80">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">
              Section 2 Content
            </h2>
            <p className="text-gray-700">
              Proin non velit ac purus malesuada venenatis sit amet eget lacus.
              Morbi quis purus id ipsum ultrices aliquet Morbi quis.
            </p>
            <button className="mt-4 bg-yellow-500 text-white text-sm py-1 px-3 rounded-lg">
              Belum Selesai
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyStoryPage;
