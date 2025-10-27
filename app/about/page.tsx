// app/about/page.tsx
import React from "react";
import AboutHero from "../../components/about/Hero";
import AboutSection from "../../components/about/AboutSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
    </main>
  );
}
