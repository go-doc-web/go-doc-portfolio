import Image from "next/image";
import HeroSection from "./componets/HeroSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212]  px-4 ">
        <div className="container px-4 py-4">
          <HeroSection name="Oleg" />
        </div>
      </main>
    </>
  );
}
