// app/contact/page.js
import React from "react";
import ContactHero from "../../components/contact/Hero";
import ContactSection from "../../components/contact/ContactSection";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
    </main>
  );
}
