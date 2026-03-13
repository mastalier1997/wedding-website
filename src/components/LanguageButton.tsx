"use client";

import { useRouter } from "next/navigation";
import "./LanguageButton.css";

export default function LanguageButton({
  language = { label: "Deutsch", value: "de" },
}) {

  const router = useRouter();
  function handleClick(lang: string) {
    //TODO activate later
    //document.cookie = `language=${lang}; path=/; max-age=31536000`;
    router.push("/home");
  }

  return (
    <button
      onClick={() => handleClick(language.value)}
      className="lang-btn relative block max-w-max rounded-full text-[1.2rem] font-bold uppercase outline-none"
      type="button"
    >
      <span
        className="
          flex items-center justify-center gap-2
          w-40
          rounded-full
          border-4 border-[#333]
          bg-white px-6 py-3 text-[#333]
          shadow-[1px_1px_0_0_#333,2px_2px_0_0_#333,3px_3px_0_0_#333]
        "
      >
        {language.label}
      </span>
    </button>
  );
}
