"use client";
import { useState } from "react";
import styles from "./portal.module.css";

export default function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const handleAuth = (e) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className={styles.portalContainer}>
        <div className={styles.dashboard}>
          <div className={styles.dashboardHeader}>
            <div>
              <h1 className="text-gradient">Kurumsal Portal</h1>
              <p>Hoş geldiniz, ABC Teknoloji A.Ş.</p>
            </div>
            <button className="btn btn-outline" onClick={handleLogout}>Çıkış Yap</button>
          </div>

          <div className={styles.modulesGrid}>
            {/* Hibrit Analiz Modülü */}
            <div className={styles.moduleCard}>
              <h3>🧩 BMA Hibrit Analiz</h3>
              <p>Adaylarınız veya çalışanlarınız için yeni bir analiz sınavı başlatın veya mevcut sonuçları görüntüleyin.</p>
              <button className="btn btn-primary" style={{ width: "100%", marginBottom: "0.5rem" }}>Yeni Sınav Linki Oluştur</button>
              <button className="btn btn-outline" style={{ width: "100%" }}>Geçmiş Raporlar</button>
            </div>

            {/* AI Coach Modülü */}
            <div className={styles.moduleCard}>
              <h3>🤖 AI Coach Yönetimi</h3>
              <p>Satış veya iletişim ekibiniz için AI Coach kullanıcıları tanımlayın ve performans skorlarını izleyin.</p>
              
              <div className={styles.userList}>
                <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Aktif Kullanıcılar:</div>
                <div className={styles.userItem}>
                  <span>Ahmet Yılmaz (Satış)</span>
                  <span style={{ color: "green" }}>Skor: 85/100</span>
                </div>
                <div className={styles.userItem}>
                  <span>Ayşe Demir (Müşteri Tem.)</span>
                  <span style={{ color: "green" }}>Skor: 92/100</span>
                </div>
              </div>
              <button className="btn btn-outline" style={{ width: "100%", marginTop: "1rem" }}>+ Yeni Kullanıcı Tanımla</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.portalContainer}>
      <div className={styles.authWrapper}>
        <div className={styles.authTabs}>
          <button 
            className={`${styles.authTab} ${activeTab === "login" ? styles.active : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Kurumsal Giriş
          </button>
          <button 
            className={`${styles.authTab} ${activeTab === "register" ? styles.active : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Kayıt Talebi
          </button>
        </div>

        {activeTab === "login" ? (
          <form onSubmit={handleAuth}>
            <div className={styles.formGroup}>
              <label>Kurumsal E-posta</label>
              <input type="email" required placeholder="ornek@sirket.com" />
            </div>
            <div className={styles.formGroup}>
              <label>Şifre</label>
              <input type="password" required placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
              Sisteme Giriş
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); alert("Kayıt talebiniz alındı, yetkililerimiz size ulaşacak."); setActiveTab("login"); }}>
            <div className={styles.formGroup}>
              <label>Şirket Adı</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Yetkili Kişi</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Kurumsal E-posta</label>
              <input type="email" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
              Kayıt Talebi Gönder
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
