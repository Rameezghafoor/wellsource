import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SurgicalInstruments.module.css";

export default function SurgicalInstruments() {
  return (
    <section id="surgical-instruments" className={styles.surgicalInstruments}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <Image
              src="/ringed-instruments-edited.webp"
              alt="Surgical Instruments"
              fill
              className={styles.instrumentsImage}
              priority
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.content}>
            <div className={styles.header}>EQUIPMENT</div>
            <h2 className={styles.title}>Surgical Instruments</h2>
            
            <p className={styles.description}>
              Our surgical instruments are manufactured to the highest standards, meeting ISO 13485 
              and Medical Devices Directive 93/42/EEC requirements. Each instrument comes with full 
              traceability and a 10-year warranty, designed specifically for the demanding hygiene 
              requirements of modern surgical practice.
            </p>

            <div className={styles.specialties}>
              <span className={styles.specialty}>General Surgery</span>
              <span className={styles.separator}>|</span>
              <span className={styles.specialty}>Oral & Maxillofacial</span>
              <span className={styles.separator}>|</span>
              <span className={styles.specialty}>Neuro & Spine Surgery</span>
              <span className={styles.separator}>|</span>
              <span className={styles.specialty}>Cardiothoracic</span>
              <span className={styles.separator}>|</span>
              <span className={styles.specialty}>Plastic Surgery</span>
              <span className={styles.separator}>|</span>
              <span className={styles.specialty}>Otolaryngology (ENT)</span>
              <span className={styles.separator}>|</span>
              <span className={styles.specialty}>Gynaecology & Obstetrics</span>
              <span className={styles.separator}>|</span>
              <span className={styles.specialty}>Urology</span>
              <span className={styles.separator}>|</span>
              <span className={styles.specialty}>Proctology</span>
              <span className={styles.separator}>|</span>
              <span className={styles.specialty}>Chiropody</span>
              <span className={styles.separator}>|</span>
              <span className={styles.specialty}>Orthopaedic</span>
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
                Discuss Surgical Instruments
              </Link>

              <Link href="/catalogue.pdf" className={styles.secondaryButton}>
                <div className={styles.buttonIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                Download Catalogues
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
