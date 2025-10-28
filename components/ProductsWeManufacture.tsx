import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductsWeManufacture.module.css";

export default function ProductsWeManufacture() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>PRODUCTS WE MANUFACTURE</h2>
        
        <div className={styles.cardsGrid}>
          {/* Surgical Instruments Card */}
          <Link href="/ranges#surgical-instruments" className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src="/ringed-instruments-edited.webp"
                  alt="Surgical Instruments"
                  fill
                  className={styles.cardImage}
                  priority
                />
                <div className={styles.productLabel}>Surgical Instruments</div>
                <div className={styles.actionButton}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>
                  Manufactured in our Pakistan based factory, our surgical instruments are made from high grade stainless steel in accordance to ISO 13485, suitable for the medical, healthcare, and laboratory sectors.
                </p>
              </div>
            </div>
          </Link>

          {/* Sterilisation Container Systems Card */}
          <Link href="/ranges#container-systems" className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src="/container_system.webp"
                  alt="Sterilisation Container Systems"
                  fill
                  className={styles.cardImage}
                  priority
                />
                <div className={styles.productLabel}>Sterilisation Container Systems</div>
                <div className={styles.actionButton}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>
                  As a leading supplier of high quality sterilisation containers, our range provides a safe, effective, and eco-friendly, sterilisation solution for surgical instruments.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
