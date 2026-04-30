"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setStatus("error");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.newsletterSection}>
        <div className={`container ${styles.newsletterContent}`}>
          <h3>Yapay zeka dünyasındaki gelişmelerden haberdar olmak için haftalık bültenimize üye olun</h3>
          <form className={styles.newsletterForm} onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className={styles.newsletterInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              required
            />
            <button 
              type="submit" 
              className={styles.newsletterBtn}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Kaydediliyor..." : "Üye Ol"}
            </button>
          </form>
          {status === "success" && (
            <p className={`${styles.newsletterMessage} ${styles.success}`}>
              Bültenimize başarıyla abone oldunuz.
            </p>
          )}
          {status === "error" && (
            <p className={`${styles.newsletterMessage} ${styles.error}`}>
              Bir hata oluştu. Lütfen tekrar deneyin.
            </p>
          )}
        </div>
      </div>

      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <h3 className="text-gradient">Grup BMA</h3>
          <p>Yapay zeka destekli performans, analiz ve danışmanlık çözümleriyle kurumların potansiyelini ortaya çıkarıyoruz.</p>
        </div>
        
        <div className={styles.column}>
          <h4>Hızlı Bağlantılar</h4>
          <Link href="/">Ana Sayfa</Link>
          <Link href="/urunler">Çözümlerimiz</Link>
          <Link href="/akademi">BMA Akademi</Link>
          <Link href="/portal">Portal Girişi</Link>
        </div>

        <div className={styles.column}>
          <h4>İletişim</h4>
          <p>📍 Feyzullah Mh. Dumlupınar Cd no 7/13<br/>Maltepe / İstanbul</p>
          <p>📞 +90 546 852 07 01</p>
          <p>✉️ info@grupbma.com.tr</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Grup BMA. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
