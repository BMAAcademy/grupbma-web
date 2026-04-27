"use client";
import { useState, useEffect } from "react";
import styles from "./DemoModal.module.css";

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Talebiniz alınmıştır, size en kısa sürede dönüş yapacağız.");
    setIsOpen(false);
  };

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
        <h2 className="text-center text-gradient">Demo Görüşmesi Ayarla</h2>
        <p className="text-center" style={{ marginBottom: "1.5rem" }}>Bilgilerinizi bırakın, uzmanlarımız sizinle iletişime geçsin.</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Ad Soyad</label>
            <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className={styles.formGroup}>
            <label>Telefon Numarası</label>
            <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
          <div className={styles.formGroup}>
            <label>E-posta Adresi</label>
            <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
          <div className={styles.formGroup}>
            <label>Şirket Adı</label>
            <input required type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
          </div>
          <div className={styles.formGroup}>
            <label>İlgilendiğiniz Ürün</label>
            <select required value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value})}>
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
          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>Gönder</button>
        </form>
      </div>
    </div>
  );
}
