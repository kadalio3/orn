import CreateNovelForm from "@/components/auth/create-novelform";
import { auth } from "@/auth";


const CreateNovelPage = async () => {
  const session = await auth();
  const categories = await prisma.category.findMany({
    select: { id: true, name: true },
  });

  return (
    <div className="max-w-lg mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New Story</h1>
      <CreateNovelForm session={session} categories={categories} />
    </div>
  );
};

export default CreateNovelPage;