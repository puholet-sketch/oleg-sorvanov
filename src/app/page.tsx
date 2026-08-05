import { About } from "@/components/about";
import { Career } from "@/components/career";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Stats } from "@/components/stats";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Work />
        <Career />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
