"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import type { Session } from "next-auth";

interface MenuProps {
  session: Session | null;
}

const Menu: React.FC<MenuProps> = ({ session }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  return (
    <div className="flex items-center gap-3">
      <ul className="hidden md:flex items-center gap-4 mr-4 font-semibold text-gray-600">
        <li className="hover:text-gray-800">
          <Link href="/">Home</Link>
        </li>
        {session && (
          <>
            <li className="hover:text-gray-800">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="hover:text-gray-800">
              <Link href="/product">Product</Link>
            </li>
            {session.user?.role === "admin" ? (
              <li className="hover:text-gray-800">
                <Link href="/user">User</Link>
              </li>
            ) : null}
          </>
        )}
      </ul>

      {session ? (
        <div className="relative flex items-center gap-3">
        <div
          className="text-sm ring-2 ring-gray-200 bg-gray-100 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        >
          <Image
            src={session.user?.image || "/avatar.svg"}
            alt="avatar"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
        </div>
      
        {dropdownVisible && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <div className="flex flex-col px-4 py-2 space-y-0 border-b border-gray-200">
              <span className="font-semibold text-gray-500 capitalize">
                {session.user?.name}
              </span>
              <span className="text-xs text-gray-400 capitalize">
                {session.user?.role || "User"}
              </span>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>      
      ) : (
        <Link
          href="/login"
          className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Menu;
