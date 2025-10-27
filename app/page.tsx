import Hero from "../components/Hero";
import ProductsWeManufacture from "../components/ProductsWeManufacture";
import RepairRefurbSection from "../components/RepairRefurbSection";
import CatalogCTA from "../components/CatalogCTA";

export const metadata = {
  title: "Well Source | Home",
};

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <section id="products-we-manufacture">
        <ProductsWeManufacture />
      </section>
      <section id="repair-refurbishment">
        <RepairRefurbSection />
      </section>
      <section id="download-catalog" className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CatalogCTA />
        </div>
      </section>
    </main>
  );
}
