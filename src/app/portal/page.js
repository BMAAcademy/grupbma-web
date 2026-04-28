"use client";
import { useState } from "react";
import styles from "./portal.module.css";

export default function Portal() {
  const [activeTab, setActiveTab] = useState("login");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [registerData, setRegisterData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleLoginAttempt = (e) => {
    e.preventDefault();
    // Login devre dışı — hiç kimse giriş yapamaz
    alert("Kurumsal portal erişimi şu anda aktif değildir. Erişim talebi oluşturmak için 'Kayıt Talebi' sekmesini kullanınız.");
    setActiveTab("register");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/portal-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setRegisterData({ company: "", name: "", phone: "", email: "" });
        }, 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

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
          <form onSubmit={handleLoginAttempt}>
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
            <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              ⚠️ Portal erişimi yalnızca yetkili kurumsal kullanıcılara açıktır.
            </p>
          </form>
        ) : (
          <>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 className="text-gradient">Talebiniz Alındı!</h3>
                <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                  Ekibimiz en kısa sürede sizinle iletişime geçecektir.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister}>
                <div className={styles.formGroup}>
                  <label>Şirket Adı</label>
                  <input 
                    type="text" required 
                    value={registerData.company}
                    onChange={(e) => setRegisterData({...registerData, company: e.target.value})}
                    disabled={status === "sending"}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Yetkili Kişi</label>
                  <input 
                    type="text" required 
                    value={registerData.name}
                    onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                    disabled={status === "sending"}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Telefon Numarası</label>
                  <input 
                    type="tel" required 
                    placeholder="+90 5XX XXX XX XX"
                    value={registerData.phone}
                    onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                    disabled={status === "sending"}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Kurumsal E-posta</label>
                  <input 
                    type="email" required 
                    value={registerData.email}
                    onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                    disabled={status === "sending"}
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: "100%", marginTop: "1rem" }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Gönderiliyor..." : status === "error" ? "❌ Hata — Tekrar Dene" : "Kayıt Talebi Gönder"}
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
