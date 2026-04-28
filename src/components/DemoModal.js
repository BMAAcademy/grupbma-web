"use client";
import { useState, useEffect } from "react";
import styles from "./DemoModal.module.css";

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    product: "BMA Hibrit Analiz Sistemi"
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openDemoModal", handleOpen);
    return () => window.removeEventListener("openDemoModal", handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
          setFormData({ name: "", phone: "", email: "", company: "", product: "BMA Hibrit Analiz Sistemi" });
        }, 3000);
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
    <div className={styles.overlay} onClick={() => { if (status === "idle") setIsOpen(false); }}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
        
        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
            <h2 className="text-gradient">Talebiniz Alındı!</h2>
            <p style={{ color: "var(--text-secondary)" }}>En kısa sürede size dönüş yapacağız.</p>
          </div>
        ) : (
          <>
            <h2 className="text-center text-gradient">Demo Görüşmesi Ayarla</h2>
            <p className="text-center" style={{ marginBottom: "1.5rem" }}>Bilgilerinizi bırakın, uzmanlarımız sizinle iletişime geçsin.</p>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label>Ad Soyad</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} disabled={status === "sending"} />
              </div>
              <div className={styles.formGroup}>
                <label>Telefon Numarası</label>
                <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} disabled={status === "sending"} />
              </div>
              <div className={styles.formGroup}>
                <label>E-posta Adresi</label>
                <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} disabled={status === "sending"} />
              </div>
              <div className={styles.formGroup}>
                <label>Şirket Adı</label>
                <input required type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} disabled={status === "sending"} />
              </div>
              <div className={styles.formGroup}>
                <label>İlgilendiğiniz Ürün</label>
                <select required value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value})} disabled={status === "sending"}>
                  <option value="BMA Hibrit Analiz Sistemi">BMA Hibrit Analiz Sistemi</option>
                  <option value="AI Coach">AI Coach</option>
                  <option value="Executive AI Assistant">Executive AI Assistant</option>
                  <option value="AI Avukat">AI Avukat</option>
                  <option value="AI Müşteri Temsilcisi">AI Müşteri Temsilcisi</option>
                  <option value="AI Satış Botu">AI Satış Botu</option>
                  <option value="AI Markanız">AI Markanız (Özel Çözüm)</option>
                  <option value="BMA Akademi Eğitimleri">BMA Akademi Eğitimleri</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: "100%", marginTop: "1rem" }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Gönderiliyor..." : status === "error" ? "❌ Hata — Tekrar Dene" : "Gönder"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

