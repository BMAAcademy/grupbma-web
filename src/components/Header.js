"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} style={{ display: "flex", alignItems: "center" }} onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Grup BMA Logo" style={{ height: "45px", objectFit: "contain", marginRight: "10px" }} />
          <span className="text-gradient" style={{ fontWeight: 800, fontSize: "1.5rem" }}>Grup BMA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Ana Sayfa</Link>
          <Link href="/urunler" className={styles.navLink}>Ürünlerimiz</Link>
          <Link href="/akademi" className={styles.navLink}>BMA Akademi</Link>
          <Link href="/portal" className={styles.navLink}>Portal Girişi</Link>
        </nav>

        <div className={styles.actions}>
          <button className={`btn btn-primary ${styles.demoBtn}`} onClick={() => {
            window.dispatchEvent(new Event('openDemoModal'));
            closeMobileMenu();
          }}>
            Demo İste
          </button>
          
          <button 
            className={styles.hamburgerBtn} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü Aç"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ""}`}>
        <nav className={styles.mobileNavContainer}>
          <Link href="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>Ana Sayfa</Link>
          <Link href="/urunler" className={styles.mobileNavLink} onClick={closeMobileMenu}>Ürünlerimiz</Link>
          <Link href="/akademi" className={styles.mobileNavLink} onClick={closeMobileMenu}>BMA Akademi</Link>
          <Link href="/portal" className={styles.mobileNavLink} onClick={closeMobileMenu}>Portal Girişi</Link>
        </nav>
      </div>
    </header>
  );
}
