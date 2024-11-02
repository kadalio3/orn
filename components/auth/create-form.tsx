"use client";

import { useState, useEffect } from "react";
import { createCategory } from "@/lib/actions";
import { SubmitButton } from "@/components/button";
import type { Session } from "next-auth";

interface MenuProps {
  session: Session | null;
}

interface ErrorState {
  name?: string | string[];
  userId?: string | string[];
}

interface FormState {
  message: string;
  Error: ErrorState;
}

const CreateForm: React.FC<MenuProps> = ({ session }) => {
  const [state, setState] = useState<FormState>({ message: "", Error: {} });
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Set userId dari session jika session tersedia
    if (session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [session]);

  const formAction = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!userId) {
      setState({ message: "User ID not available in session", Error: {} });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);

    const response = await createCategory({}, formData, userId); // Sertakan userId sebagai argumen ketiga

    if (response?.Error) {
      setState({ Error: response.Error, message: "" });
    } else if (response?.message) {
      setState({ message: response.message, Error: {} });
    } else {
      setState({ message: "Category created successfully", Error: {} });
    }
  };

  return (
    <div>
      <form onSubmit={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Category Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Category Name..."
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {Array.isArray(state?.Error?.name)
                ? state.Error.name.join(", ")
                : state.Error.name}
            </p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitButton label="Create Category" />
      </form>
    </div>
  );
};

export default CreateForm;
