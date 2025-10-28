"use client";

import React, { useState } from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
          message: `Name: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`,
        }),
      });
      
      if (response.ok) {
        // Show success message
        setShowSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
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
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Contact Us Today</h2>
          
          <div className={styles.workingHours}>
            <div className={styles.clockIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
            <div className={styles.hoursText}>
              <div><strong>Monday to Thursday:</strong> 08:30 - 17:00</div>
              <div><strong>Friday:</strong> 08:30 - 16:30</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                rows={4}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
          
          {showSuccess && (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h3>Thank you for your message!</h3>
              <p>We&apos;ll get back to you within 24 hours.</p>
            </div>
          )}

        </div>

        <div className={styles.rightColumn}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.1234567890!2d-1.456789!3d53.412345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879827c1c8b2b2b%3A0x1234567890abcdef!2sS%20Murray%20%26%20Company%2C%20President%20Way%2C%20Sheffield%20S4%207UR!5e0!3m2!1sen!2spk!4v1234567890123!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="S Murray & Company Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
