import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth } from "@/auth"

const Navbar = async() => {
    const session = await auth();
    return (
        <nav className="bg-white border-b border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link href="/dashboard" className="text-xl font-bold">
            Orn
          </Link>
          <div className="flex items-center gap-3">
            <ul className="hidden md:flex items-center gap-4 mr-4 font-semibold text-gray-600">
              <li className="hover:text-gray-800"><Link href="/">Home</Link></li>
              <li className="hover:text-gray-800"><Link href="/dashboard">Dashboard</Link></li>
              <li className="hover:text-gray-800"><Link href="/product">Product</Link></li>
              <li className="hover:text-gray-800"><Link href="/user">User</Link></li>
            </ul>
           {session && (
             <div className="flex gap-3 items-center">
             <div className="flex flex-col justify-center space-y-1">
               <span className="font-semibold text-gray-500 text-right capitalize">
                {session?.user?.name}
               </span>
               <span className="text-xs text-gray-400 text-right capitalize">{session?.user?.role}</span>
             </div>
             <button type="button" className="text-sm ring-2 ring-gray-200 bg-gray-100 rounded-full">
               <Image
                 src={session?.user?.image || "/avatar.svg"}
                 alt="avatar"
                 width={64}
                 height={64}
                 className="w-8 h-8 rounded-full"
               />
             </button>
           </div>
           )}
          </div>
        </div>
      </nav>      
  )
}

export default Navbar