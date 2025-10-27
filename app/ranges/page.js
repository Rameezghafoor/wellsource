// app/ranges/page.js
import React from "react";
import RangesHero from "../../components/ranges/Hero";
import SurgicalInstruments from "../../components/ranges/SurgicalInstruments";
import ContainerSystems from "../../components/ranges/ContainerSystems";
import RangesForm from "../../components/ranges/RangesForm";

export default function RangesPage() {
  return (
    <main>
      <RangesHero />
      <section id="surgical-instruments">
        <SurgicalInstruments />
      </section>
      <section id="container-systems">
        <ContainerSystems />
      </section>
      <section id="download-catalog">
        <RangesForm />
      </section>
    </main>
  );
}
