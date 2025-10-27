// components/Hero.tsx
import Link from "next/link";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${s.hero} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Desktop-style layout on all screens */}
        <div className="grid grid-cols-12 items-center gap-8 lg:gap-16">
          {/* LEFT: Copy (kept above the background) */}
          <div className={`col-span-7 ${s.left}`}>
            <h1 className={s.headline}>
              PAKISTANI MANUFACTURER
              <br />
              OF SURGICAL INSTRUMENTS
              <br />
              FOR MODERN CARE
            </h1>

            <p className={s.subcopy}>
              Well Source designs and manufactures reliable surgical instruments
              and accessories for theatres, clinics and laboratories. Our family-run
              team focuses on precision, durability and responsive support — so your
              staff can deliver outstanding care, every day.
            </p>

            <div className={s.ctaRow}>
              <Link href="/ranges" className={`${s.cta} ${s.primary}`}>
                <span className={s.iconWrap}>
                  <svg viewBox="0 0 24 24" className={s.icon} aria-hidden="true">
                    <path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
                  </svg>
                </span>
                <span className={s.ctaLabel}>View Ranges</span>
              </Link>

              <Link href="/contact" className={`${s.cta} ${s.secondary}`}>
                <span className={s.iconWrap}>
                  <svg viewBox="0 0 24 24" className={s.icon} aria-hidden="true">
                    <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 3.1 9.8 19.8 19.8 0 0 1 .1 1.2 2 2 0 0 1 2.1 0h2a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.5 2.1L5 8a16 16 0 0 0 7 7l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 1.9 .6 2.9 .7A2 2 0 0 1 22 16.9Z" />
                  </svg>
                </span>
                <span className={s.ctaLabel}>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Spacer column to reserve visual space for the background image */}
          <div className="col-span-5"></div>
        </div>
      </div>

      {/* RIGHT background visual (not in document flow) */}
      <div className={s.right} aria-hidden="true" />
    </section>
  );
}
