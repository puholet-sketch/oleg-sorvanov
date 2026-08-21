import { About } from "@/components/about";
import { Career } from "@/components/career";
import { Coffee } from "@/components/coffee";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Life } from "@/components/life";
import { Location } from "@/components/location";
import { Marquee } from "@/components/marquee";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Career />
        <Work />
        <Projects />
        <Coffee />
        <Life />
        <Location />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
