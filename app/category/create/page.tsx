import CreateForm from "@/components/auth/create-form";
import { auth } from "@/auth";


const CreateContactPage = async () => {
  const session = await auth();

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New Contact</h1>
      <CreateForm session={session} />
    </div>
  );
};

export default CreateContactPage;