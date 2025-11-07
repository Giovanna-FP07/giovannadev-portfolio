import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/skills';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { OpenSource } from '@/components/sections/open-source';
import { Interests } from '@/components/sections/interests';


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <div className="container px-4 md:px-6 mt-16 md:mt-24">
          <About />
        </div>
        <div className="container px-4 md:px-6 mt-16 md:mt-24 grid gap-8 lg:grid-cols-3 items-start">
          <Skills />
          <Education />
          <Interests />
        </div>
        <OpenSource />
      </main>
      <Footer />
    </div>
  );
}
