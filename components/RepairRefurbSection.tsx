// components/RepairRefurbSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactLink from "./ContactLink";
import s from "./RepairRefurbSection.module.css";

export default function RepairRefurbSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use fetch API to submit to Formspree without redirect
      const response = await fetch('https://formspree.io/f/xpwoqwwj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: `Name: ${formData.name}\n\nMessage: ${formData.message}`,
        }),
      });
      
      if (response.ok) {
        // Show success message
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className={s.section}>
      <div className={s.container}>
        {/* Heading stays above grid so on mobile we can show images under the heading */}
        <h2 className={s.title}>REPAIR &amp; REFURBISHMENT</h2>

        <div className={s.grid}>
          {/* LEFT: lead + form */}
          <div className={s.leftBlock}>
            <p className={s.lead}>
              We specialise in repair and refurbishment of surgical instruments at our
              10,000 sq&nbsp;ft facility in Pakistan.
            </p>

            <form onSubmit={handleSubmit} className={s.formShell}>
              <div className={s.row}>
                <input 
                  className={s.field} 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  className={s.field} 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Removed extra top-margin class to unify spacing on mobile */}
              <div>
                <textarea 
                  className={s.textarea} 
                  name="message" 
                  placeholder="Message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={s.buttonBlock}>
                <button className={s.button} type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
              <div className={s.phone}>
                Or Give Us A Call On{" "}
                <ContactLink type="phone" value="+92 318 1466779" />
              </div>
            </form>
            
            {showSuccess && (
              <div className={s.successMessage}>
                <div className={s.successIcon}>✓</div>
                <h3>Thank you for your inquiry!</h3>
                <p>We&apos;ll contact you within 24 hours to discuss your repair needs.</p>
              </div>
            )}
          </div>

          {/* RIGHT: before / after cards */}
          <div className={s.rightBlock}>
            <div className={s.rightGrid}>
              <div className={`${s.card} ${s.beforeCard}`}>
                <div className={s.chip}>Before</div>
                <div className={s.imgWrap}>
                  <Image
                    src="/Silver_Scissors.webp"
                    alt="Before – silver scissors"
                    width={300}
                    height={300}
                    className={s.instrument}
                    sizes="(min-width: 1024px) 280px, 40vw"
                    priority
                  />
                </div>
                <div className={s.baseShadow} />
              </div>

              <div className={`${s.card} ${s.afterCard}`}>
                <div className={s.chip}>After</div>
                <div className={s.imgWrap}>
                  <Image
                    src="/Gold_Scissors.webp"
                    alt="After – gold scissors"
                    width={300}
                    height={300}
                    className={s.instrument}
                    sizes="(min-width: 1024px) 280px, 40vw"
                  />
                </div>
                <div className={s.baseShadow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
