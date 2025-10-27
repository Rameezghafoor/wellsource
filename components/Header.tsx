"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

// Distributors REMOVED per request
const NAV = [
  { href: "/", label: "Home" },
  { href: "/ranges", label: "Ranges" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Lock body scroll + close on ESC; focus the close button when opened
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : prevOverflow;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);

    if (menuOpen) closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      {/* Logo + brand (no plaque; transparent) */}
      <Link href="/" className={styles.logoWrap} onClick={() => setMenuOpen(false)}>
        <Image
          src="/logo.png"
          alt="WELL SOURCE INDUSTRIES"
          width={100}
          height={100}
          className={styles.logoImg}
          priority
        />
        <div className={styles.brandText}>
          <span className={styles.brandName}>WELL SOURCE</span>
          <span className={styles.brandSub}>INDUSTRIES</span>
        </div>
      </Link>

      {/* Hamburger only (we removed header nav + contact info) */}
      <button
        className={styles.menuIcon}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={menuOpen}
        aria-controls="site-drawer"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.show : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      {/* Slide-in drawer with links + contact CTAs */}
      <aside
        id="site-drawer"
        role="dialog"
        aria-modal="true"
        className={`${styles.drawer} ${menuOpen ? styles.open : ""}`}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.brandMini}>MENU</span>
          <button
            ref={closeBtnRef}
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Scrollable nav so CTAs can stay pinned at bottom */}
        <nav className={styles.navMenu} aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={styles.navItem}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* WhatsApp + Email CTAs (email shown on mobile too) */}
        <div className={styles.ctaWrap}>
          <a href="https://wa.me/923181466779" className={`${styles.cta} ${styles.ctaPrimary}`}>
            +92 318 1466779
          </a>
          <a href="mailto:support@wellsourceindustries.com" className={`${styles.cta} ${styles.ctaDark}`}>
            support@wellsourceindustries.com
          </a>
        </div>
      </aside>
    </header>
  );
}
