import ProfilePage from "@/components/auth/form-profile"
import Breadcrumb from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Users",
}

const UserPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
        <div className="max-w-screen-md mx-auto py-10">
            <Breadcrumb pageName="Profile" />
            <ProfilePage />
        </div>
    </div>
  )
}

export default UserPage