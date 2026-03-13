import { cookies } from "next/headers";

export let lang = "de";

export async function setLang(selectedLang: string) {
  lang = selectedLang;
   document.cookie = `language=${selectedLang}; path=/; max-age=31536000`;
}

export async function getCookieLang() {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value;
  if(cookieLang){
    lang = cookieLang;
    return lang;
  }
}
