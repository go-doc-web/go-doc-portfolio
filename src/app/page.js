import Image from "next/image";
import HeroSection from "./componets/HeroSection";
import NavBar from "./componets/NavBar";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212]  px-4 ">
        <NavBar />
        <div className="container px-4 py-4 mt-24">
          <HeroSection name="Oleg" />
        </div>
      </main>
    </>
  );
}
