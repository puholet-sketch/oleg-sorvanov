"use client";

import { Layout } from "antd";
import { About } from "@/components/about";
import { Career } from "@/components/career";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Stats } from "@/components/stats";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh", background: "#141414" }}>
      <SiteHeader />
      <Layout.Content>
        <Hero />
        <Stats />
        <About />
        <Work />
        <Career />
        <Projects />
        <Contact />
      </Layout.Content>
      <SiteFooter />
    </Layout>
  );
}
