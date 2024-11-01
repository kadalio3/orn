import { MenuHome } from "@/components/menu";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-4">
      <div className="flex items-center justify-center">
        <MenuHome session={session} />
      </div>

      <div className="w-full h-full">
        <div className="flex justify-between items-center py-4">
          <h2 className="text-2xl font-bold">New Comer</h2>
          <button className="px-4 py-2 text-sm text-white bg-blue-400 hover:bg-blue-700 rounded-md">
            Lihat Semua
          </button>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center overflow-hidden rounded w-36 mx-auto"
            >
              <div className="relative w-full h-64 overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              </div>
              <div className="w-full text-left">
                <h3 className="text-lg font-bold">Paris</h3>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="w-full h-full">
        <div className="flex justify-between items-center py-4">
          <h2 className="text-2xl font-bold">Popular</h2>
          <button className="px-4 py-2 text-sm text-white bg-blue-400 hover:bg-blue-700 rounded-md">
            Lihat Semua
          </button>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center overflow-hidden rounded w-36 mx-auto"
            >
              <div className="relative w-full h-64 overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              </div>
              <div className="w-full text-left">
                <h3 className="text-lg font-bold">Paris</h3>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
