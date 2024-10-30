import { auth } from "@/auth";

const dashboard = async () => {
  const session = await auth();
  return (
    <div className="max-w-screen-xl mx-auto py-6 p-4">
      <h1 className="text-2xl">Dashboard</h1>
      <h2 className="text-xl">
        Welcome Back: <span className="font-bold">{session?.user?.name}</span>
      </h2>
      <div className="py-6 p-4 flex flex-wrap justify-start gap-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-36 h-52"
          >
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div className="relative z-10 p-4">
              <h3 className="text-lg font-bold text-white">Paris</h3>
              <p className="text-sm leading-6 text-gray-300">City of love</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default dashboard;