// components/auth/create-form.tsx

"use client";

import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/button";
import { createCategory } from "@/lib/actions";

// Define types for form action parameters
type FormDataEntry = { [key: string]: FormDataEntryValue };

const ProductForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [state, formAction] = useFormState(async (prevState: any, formData: FormData) => {
    const response = await createCategory(prevState, formData);
    
    if (response.success) {
      onSuccess(); // Close modal on successful creation
    }
    
    return response; // Return response to display any messages or errors
  }, null);

  return (
    <form action={formAction} className="space-y-6">
      {state?.message && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100"
          role="alert"
        >
          <span className="font-medium">{state?.message}</span>
        </div>
      )}
      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-gray-900">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Name Category"
          required
        />
        {state?.error?.name && (
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state.error.name}</p>
          </div>
        )}
      </div>
  
      <SubmitButton />
    </form>
  );
};

export default ProductForm;
