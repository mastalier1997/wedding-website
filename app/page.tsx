import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Image
        alt="Rome"
        src="/rome.jpg"
        fill
        style={{ objectFit: "cover" }}
        sizes="100vw"
      />
    </div>
  );
}