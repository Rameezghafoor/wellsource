import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>About Well Source Industries</h2>
          
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Combining over 100 years of experience in the sterilisation industry with over 75 years of manufacturing surgical instruments, Well Source Industries has positioned itself as leading specialists in the medical, healthcare, and laboratory sectors.
            </p>
            
            <p className={styles.paragraph}>
              In 2023, Well Source Industries acquired the surgical division of S Murray Ltd, a well established surgical instrument manufacturer based in Sheffield, UK. S Murray have been manufacturing from their facility since 1946 and bring a wealth of experience and knowledge to our ever-growing team.
            </p>
            
            <p className={styles.paragraph}>
              We work with a number of partners and distributors across the world to enhance and bring to market our extensive product portfolio, whilst continuously expanding our reach. We are always open to new opportunities within the surgical sector and welcome routes into new markets and countries.
            </p>
            
            <p className={styles.ctaText}>
              Get in touch with us today if you are interested in working alongside us as a partner or distributor.
            </p>
            
            <Link href="/contact" className={styles.contactButton}>
              <div className={styles.buttonIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className={styles.rightColumn}>
          <div className={styles.imageContainer}>
            <Image
              src="/about-building.jpg"
              alt="Well Source Industries Building"
              fill
              className={styles.buildingImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}




