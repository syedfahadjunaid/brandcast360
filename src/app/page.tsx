import Image from "next/image";
import Navbar from "@/Components/Navbar/page";
import HeroSection from "@/Components/Home/HeroSection/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-[1rem] gap-[2rem]">
      <Navbar />
      <HeroSection />
    </main>
  );
}
