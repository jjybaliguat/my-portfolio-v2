import HeroSection from "@/components/sections/HeroSection";
import { PortFolioSection } from "@/components/sections/PortfolioSection";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <HeroSection />
      <PortFolioSection />
    </main>
  );
}
