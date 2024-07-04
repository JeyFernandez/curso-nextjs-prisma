"use client";

import React, { useState } from "react";
import { useNotes } from "@/context/NoteContext";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { createNote } = useNotes();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createNote({
          title,
          content,
        });
      }}>
      <input
        type="text"
        name="title"
        autoFocus
        placeholder="Title"
        className="w-full px-4 py-2 text-black bg-waith rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        placeholder="Content"
        className="w-full px-4 py-2 text-black bg-waith rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setContent(e.target.value)}></textarea>

      <button
        type="submit"
        className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
        Create Note
      </button>
    </form>
  );
}
