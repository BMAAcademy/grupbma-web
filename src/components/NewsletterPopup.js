"use client";

import { useState, useEffect } from "react";
import styles from "./NewsletterPopup.module.css";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  useEffect(() => {
    // Check if the user has already seen or closed the popup
    const hasClosedPopup = localStorage.getItem("grupbma_newsletter_closed");
    
    if (!hasClosedPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("grupbma_newsletter_closed", "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "popup" }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          closePopup();
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setStatus("error");
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={closePopup} aria-label="Kapat">
          &times;
        </button>
        
        <div className={styles.content}>
          <div className={styles.icon}>✉️</div>
          <h3>Yapay zeka dünyasındaki gelişmelerden haberdar olmak için haftalık bültenimize üye olun</h3>
          
          {status === "success" ? (
            <div className={styles.successMessage}>
              <p>Bültenimize başarıyla abone oldunuz. Teşekkürler!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
                disabled={status === "loading"}
              />
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Kaydediliyor..." : "Üye Ol"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className={styles.errorMessage}>Bir hata oluştu. Lütfen tekrar deneyin.</p>
          )}
        </div>
      </div>
    </div>
  );
}
