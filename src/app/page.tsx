import DeleteCookie from "../components/DeleteCookie";
import LanguageButton from "../components/LanguageButton";

export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center">
      <ul className="flex flex-col lg:flex-row gap-30 lg:gap-70">
        <li>
          <LanguageButton language={{ label: "Deutsch", value: "de" }} />
        </li>
        <li>
          <LanguageButton language={{ label: "Ukranisch", value: "ua" }} />
        </li>
      </ul>
    </div>
  );
}
