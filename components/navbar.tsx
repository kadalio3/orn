import Link from "next/link";
import React from "react";
import { auth } from "@/auth";
import Menu from "@/components/menu";


const Navbar = async () => {
  const session = await auth();
  
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/dashboard" className="text-xl font-bold">
          Orn
        </Link>
        <Menu session={session} /> {/* Pass session to ClientNavbar */}
      </div>
    </nav>
  );
};

export default Navbar;
