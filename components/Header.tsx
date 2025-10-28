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
  const [isSafari, setIsSafari] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Detect Safari browser
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent) || 
                           /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream ||
                           (navigator.vendor && navigator.vendor.indexOf('Apple') > -1);
    setIsSafari(!!isSafariBrowser);
  }, []);

  // Lock body scroll + close on ESC; focus the close button when opened
  useEffect(() => {
    if (menuOpen) {
      // Prevent body scroll on mobile
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = "0";
      
      // Safari-specific fixes
      if (isSafari) {
        document.body.style.height = "100%";
        (document.body.style as any).webkitOverflowScrolling = "touch";
      }
    } else {
      // Restore body scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.style.height = "";
      (document.body.style as any).webkitOverflowScrolling = "";
    }

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);

    if (menuOpen) {
      // Small delay to ensure DOM is updated
      setTimeout(() => closeBtnRef.current?.focus(), 100);
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.style.height = "";
      (document.body.style as any).webkitOverflowScrolling = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, isSafari]);

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
        className={`${styles.drawer} ${menuOpen ? styles.open : ""} ${isSafari ? styles.safariDrawer : ""}`}
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
