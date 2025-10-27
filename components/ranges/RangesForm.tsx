"use client";

import React, { useState } from "react";
import styles from "./RangesForm.module.css";
import { FORMSPREE_CONFIG, getFormspreeEndpoint } from "../../lib/formspree";

export default function RangesForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      // Create a hidden form and submit it directly to Formspree
      const form = document.createElement('form');
      form.action = 'https://formspree.io/f/xpwoqwwj';
      form.method = 'POST';
      form.style.display = 'none';
      // Remove target='_blank' to prevent popup
      
      // Add email field
      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.name = 'email';
      emailInput.value = formData.email;
      form.appendChild(emailInput);
      
      // Add message field with all the data
      const messageInput = document.createElement('textarea');
      messageInput.name = 'message';
      messageInput.value = `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\n\nMessage: ${formData.message}`;
      form.appendChild(messageInput);
      
      // Add to page and submit
      document.body.appendChild(form);
      form.submit();
      
      // Show success message
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        interest: "",
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
      // Remove the form after a short delay
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
      }, 1000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.rangesForm}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Request Information</h2>
          <p className={styles.description}>
            Fill out the form to receive detailed information about our product ranges, 
            pricing, and how we can support your business needs.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="company" className={styles.label}>Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="interest" className={styles.label}>Product Interest</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">Select a product range</option>
                <option value="surgical-instruments">Surgical Instruments</option>
                <option value="container-systems">Container Systems</option>
                <option value="consumables">Consumables</option>
                <option value="repair-refurbishment">Repair & Refurbishment</option>
                <option value="all-ranges">All Ranges</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                rows={4}
                placeholder="Tell us about your specific requirements..."
              />
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Request Information'}
            </button>
          </form>
          
          {showSuccess && (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h3>Thank you for your request!</h3>
              <p>We'll send you detailed information within 24 hours.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
