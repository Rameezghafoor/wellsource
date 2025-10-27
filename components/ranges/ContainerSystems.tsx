import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ContainerSystems.module.css";

export default function ContainerSystems() {
  return (
    <section id="container-systems" className={styles.containerSystems}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.content}>
            <div className={styles.header}>EQUIPMENT</div>
            <h2 className={styles.title}>Container Systems</h2>
            
            <p className={styles.description}>
              Providing the highest standards of hygiene and sterilisation for surgical instruments, 
              our sterilisation containers maximise patient safety and workplace efficiency in the 
              medical, laboratory, and healthcare sectors. Our advanced design puts safety and 
              hygiene at the forefront, uses the highest quality materials, and ensures a simple 
              but reliable cleaning process throughout.
            </p>

            <div className={styles.features}>
              <span className={styles.feature}>ISO 13485 Certified</span>
              <span className={styles.separator}>|</span>
              <span className={styles.feature}>Medical Grade Materials</span>
              <span className={styles.separator}>|</span>
              <span className={styles.feature}>Advanced Filtration</span>
              <span className={styles.separator}>|</span>
              <span className={styles.feature}>Easy Cleaning</span>
              <span className={styles.separator}>|</span>
              <span className={styles.feature}>Durable Construction</span>
              <span className={styles.separator}>|</span>
              <span className={styles.feature}>Traceability</span>
            </div>

            <div className={styles.buttons}>
              <Link href="/contact" className={styles.primaryButton}>
                <div className={styles.buttonIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <path d="M13 8H7"/>
                    <path d="M17 12H7"/>
                  </svg>
                </div>
                Discuss Container Systems
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.imageContainer}>
            <Image
              src="/container_system.webp"
              alt="Sterilisation Container Systems"
              fill
              className={styles.containerImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
