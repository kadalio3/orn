"use client";

import React, { useState } from "react";

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
              style={{ width: "80%" }} // Tentukan lebar yang sama untuk kedua tab
            >
              Terbit
            </button>
            <button
              onClick={() => setOpenTab(2)}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                openTab === 2 ? "bg-blue-600 text-white" : ""
              }`}
              style={{ width: "50%" }} // Tentukan lebar yang sama untuk kedua tab
            >
              Draft
            </button>
          </div>
        </div>

        {/* Konten Terbit */}
        {openTab === 1 && (
          <div className="flex space-x-4">
            <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600 w-80">
              <h2 className="text-2xl font-semibold mb-2 text-blue-600">
                Section 1 Content
              </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquam justo nec justo lacinia, vel ullamcorper nibh tincidunt.
              </p>
              <button className="mt-4 bg-yellow-500 text-white text-sm py-1 px-3 rounded-lg">
                Belum Selesai
              </button>
            </div>

            <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600 w-80">
              <h2 className="text-2xl font-semibold mb-2 text-blue-600">
                Section 2 Content
              </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquam justo nec justo lacinia, vel ullamcorper nibh tincidunt.
              </p>
              <button className="mt-4 bg-yellow-500 text-white text-sm py-1 px-3 rounded-lg">
                Belum Selesai
              </button>
            </div>
          </div>
        )}

        {/* Konten Draft */}
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
