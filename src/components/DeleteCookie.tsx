"use client";

export default function DeleteLanguageButton() {

  function handleDelete() {
    document.cookie = "language=; path=/; max-age=0";
  }

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 border rounded"
    >
      Reset Language
    </button>
  );
}