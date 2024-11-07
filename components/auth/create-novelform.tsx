"use client";

import React, { useState, FormEvent } from "react";

interface Author {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface CreateNovelFormProps {
  authors?: Author[];
  categories?: Category[];
}

import { createNovel } from "@/lib/actions"; // Placeholder action for creating a novel

const CreateNovelForm: React.FC<CreateNovelFormProps> = ({ authors = [], categories = [] }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [authorId, setAuthorId] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const tagsArray = tags.split(",").map(tag => tag.trim());

    const novelData = {
      title,
      content,
      tags: tagsArray,
      authorId,
      categoryId,
    };

    try {
      const response = await createNovel({}, novelData);
      if (response?.success) {
        setMessage("Novel created successfully!");
        setTitle("");
        setContent("");
        setTags("");
        setAuthorId("");
        setCategoryId("");
      } else {
        setMessage("Failed to create novel.");
      }
    } catch (error) {
      setMessage("Error creating novel.");
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
        <label htmlFor="authorId" className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <select
          id="authorId"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select an author</option>
          {authors.map((author: Author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
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
          {categories.map((category: Category) => (
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
