"use client";

import React, { useState, FormEvent } from "react";
import { createNovel } from "@/lib/actions"; // Import backend action

interface Author {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface CreateNovelFormProps {
  categories: Category[]; // Categories are passed as a prop
}

const CreateNovelForm: React.FC<CreateNovelFormProps> = ({ categories }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", tags);
    formData.append("categoryId", categoryId);

    try {
      const response = await createNovel({}, formData);
      if (response.success) {
        setMessage("Novel created successfully!");
        setTitle("");
        setContent("");
        setTags("");
        setCategoryId("");
      } else {
        setMessage(response.message || "Failed to create novel.");
      }
    } catch (error) {
      setMessage("An error occurred while creating the novel.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      {message && <p className="text-sm text-green-600">{message}</p>}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          rows={5}
        ></textarea>
      </div>

      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="categoryId"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Create Novel
      </button>
    </form>
  );
};

export default CreateNovelForm;
