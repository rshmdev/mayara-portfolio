import { About } from "@/components/about";
import { Banner } from "@/components/banner";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="flex container min-h-screen flex-col items-center gap-40 md:gap-52 justify-between p-4 md:p-12">
      <Banner />
      <Hero />

      <About />

      <Gallery />
    </main>
  );
}
