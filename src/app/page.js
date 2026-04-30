"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const openDemo = () => {
    window.dispatchEvent(new Event('openDemoModal'));
  };

  const faqs = [
    {
      q: "Yapay Zeka (AI) ajanlarınız bizim sistemlerimize entegre olabilir mi?",
      a: "Kesinlikle. NORA, BEMA ve diğer ajanlarımız şirketinizin kullandığı CRM, ERP veya E-ticaret altyapılarına (Logo, Mikro, Shopify, Ticimax vb.) API aracılığıyla doğrudan entegre olarak canlı stok takibi ve sipariş yönetimi yapabilir."
    },
    {
      q: "NORA'nın çapraz satış (cross-selling) özelliği nasıl çalışıyor?",
      a: "NORA, müşteriniz bir ürünü almak üzereyken ona tamamlayıcı ürünler sunar. Sizin belirlediğiniz kurallar çerçevesinde anlık indirim kodları (örneğin %10 indirim) tanımlayarak sepet ortalamanızı (AOV) artırır."
    },
    {
      q: "BMA Hibrit Analiz Sistemi ve Eğitimleriniz devam ediyor mu?",
      a: "Evet. Şirket içi eğitim ve insan kaynakları gelişim süreçleriniz için %99 isabet oranına sahip BMA Hibrit Analiz Sistemimiz ve bu sisteme dayalı kurumsal eğitimlerimiz BMA Akademi çatısı altında devam etmektedir."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroSubtitle}>Şirketinizin Yeni Nesil Çalışanları</span>
          <h1>İş Süreçlerinizi <span className="text-gradient">Yapay Zeka Ajanları</span> İle Ölçekleyin</h1>
          <p className={styles.heroText}>
            Satış, müşteri hizmetleri, hukuk ve operasyon departmanlarınız için 7/24 kesintisiz çalışan, 
            veriye dayalı kararlar alabilen ve CRM sistemlerinize entegre yapay zeka ajanları ile tanışın.
          </p>
          <div className={styles.heroButtons}>
            <button className="btn btn-primary" onClick={openDemo}>Hemen Demo İste</button>
            <Link href="/urunler" className="btn btn-outline">Çözümleri İncele</Link>
          </div>
        </div>
      </section>

      {/* AI Agents Showcase Section (YENİ %70 ODAK) */}
      <section className="section" style={{ background: "var(--bg-white, #ffffff)", padding: "4rem 0" }}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>AI Ekibimizle Tanışın</h2>
            <p>Firmanız için durmaksızın çalışan, satış yapan ve operasyon yöneten dijital asistanlarımız.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
            
            {/* NORA */}
            <div style={{ textAlign: "center", padding: "1.5rem", borderRadius: "12px", background: "var(--bg-gray, #f8fafc)", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
              <img src="/images/customer_support.png" alt="NORA" style={{ width: "100%", height: "150px", objectFit: "contain", marginBottom: "1rem" }} />
              <h3 style={{ color: "var(--brand-blue, #0b1f52)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>NORA</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted, #475569)", marginBottom: "1rem" }}>Akıllı Müşteri Temsilcisi<br/><span style={{fontSize:"0.75rem", color:"var(--brand-accent)"}}>Dinamik İskonto & Satış</span></p>
              <Link href="/urunler/nora" style={{ fontSize: "0.85rem", color: "var(--brand-accent, #3b82f6)", fontWeight: "600", textDecoration: "none" }}>Detaylı İncele ➔</Link>
            </div>

            {/* BEMA */}
            <div style={{ textAlign: "center", padding: "1.5rem", borderRadius: "12px", background: "var(--bg-gray, #f8fafc)", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
              <img src="/images/ai_coach.png" alt="BEMA" style={{ width: "100%", height: "150px", objectFit: "contain", marginBottom: "1rem" }} />
              <h3 style={{ color: "var(--brand-blue, #0b1f52)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>BEMA</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted, #475569)", marginBottom: "1rem" }}>AI Satış ve İş Koçu<br/><span style={{fontSize:"0.75rem", color:"var(--brand-accent)"}}>Teklif ve CRM Yönetimi</span></p>
              <Link href="/urunler" style={{ fontSize: "0.85rem", color: "var(--brand-accent, #3b82f6)", fontWeight: "600", textDecoration: "none" }}>Tüm Çözümler ➔</Link>
            </div>

            {/* JURA */}
            <div style={{ textAlign: "center", padding: "1.5rem", borderRadius: "12px", background: "var(--bg-gray, #f8fafc)", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
              <img src="/images/ai_hukuk_danismani.png" alt="JURA" style={{ width: "100%", height: "150px", objectFit: "contain", marginBottom: "1rem" }} />
              <h3 style={{ color: "var(--brand-blue, #0b1f52)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>JURA</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted, #475569)", marginBottom: "1rem" }}>AI Hukuk Asistanı<br/><span style={{fontSize:"0.75rem", color:"var(--brand-accent)"}}>Sözleşme & Risk Analizi</span></p>
              <Link href="/urunler" style={{ fontSize: "0.85rem", color: "var(--brand-accent, #3b82f6)", fontWeight: "600", textDecoration: "none" }}>Tüm Çözümler ➔</Link>
            </div>

            {/* VEXA */}
            <div style={{ textAlign: "center", padding: "1.5rem", borderRadius: "12px", background: "var(--bg-gray, #f8fafc)", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
              <img src="/images/sales_bot.png" alt="VEXA" style={{ width: "100%", height: "150px", objectFit: "contain", marginBottom: "1rem" }} />
              <h3 style={{ color: "var(--brand-blue, #0b1f52)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>VEXA</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted, #475569)", marginBottom: "1rem" }}>Otonom Satış Botu<br/><span style={{fontSize:"0.75rem", color:"var(--brand-accent)"}}>Lead Toplama ve Randevu</span></p>
              <Link href="/urunler" style={{ fontSize: "0.85rem", color: "var(--brand-accent, #3b82f6)", fontWeight: "600", textDecoration: "none" }}>Tüm Çözümler ➔</Link>
            </div>

            {/* VERA */}
            <div style={{ textAlign: "center", padding: "1.5rem", borderRadius: "12px", background: "var(--bg-gray, #f8fafc)", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
              <img src="/images/ai_executive_assistant.png" alt="VERA" style={{ width: "100%", height: "150px", objectFit: "contain", marginBottom: "1rem" }} />
              <h3 style={{ color: "var(--brand-blue, #0b1f52)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>VERA</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted, #475569)", marginBottom: "1rem" }}>Yönetici Asistanı<br/><span style={{fontSize:"0.75rem", color:"var(--brand-accent)"}}>Toplantı Özeti ve İçgörü</span></p>
              <Link href="/urunler" style={{ fontSize: "0.85rem", color: "var(--brand-accent, #3b82f6)", fontWeight: "600", textDecoration: "none" }}>Tüm Çözümler ➔</Link>
            </div>
            
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
             <button className="btn btn-primary" onClick={openDemo}>Yapay Zeka Demolarını İncele</button>
             <Link href="/urunler" className="btn btn-outline" style={{ marginLeft: "1rem" }}>Tüm Çözümlerimiz</Link>
          </div>
        </div>
      </section>

      {/* Web & E-Commerce & Landing Page Section (%20 ODAK) */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>Web Sitesi ve E-Ticaret Çözümleri</h2>
            <p>Yüksek dönüşüm oranlı, AI uyumlu modern web altyapıları inşa ediyoruz.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💻</div>
              <h3>Kurumsal Web Siteleri</h3>
              <p>Kurum kimliğinizi yansıtan, mobil uyumlu ve SEO dostu modern web siteleri tasarlıyor; markanızın dijital vitrinini güçlendiriyoruz.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🛒</div>
              <h3>E-Ticaret Altyapıları</h3>
              <p>Hızlı, güvenli ve satışı destekleyen e-ticaret siteleri kuruyoruz. AI ajanlarımızla tam entegre çalışarak satış hacminizi katlıyoruz.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🚀</div>
              <h3>Landing Page (Satış Sayfaları)</h3>
              <p>Reklam kampanyalarınız için özel olarak optimize edilmiş, potansiyel müşteriyi (lead) yakalamaya odaklı yüksek dönüşümlü sayfalar hazırlıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BMA Hibrit Analiz & Eğitim Section (%10 ODAK) */}
      <section className={`section ${styles.altSection}`}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>BMA Akademi & Hibrit Analiz</h2>
            <p>Ekiplerinizi veri odaklı analiz edip, şirketinize özel eğitimlerle geliştiriyoruz.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
            <div style={{ flex: "1 1 300px" }}>
               <img src="/images/bma_hibrit_analiz.png" alt="BMA Hibrit Analiz" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }} />
            </div>
            <div style={{ flex: "2 1 400px" }}>
              <h3 style={{ fontSize: "1.5rem", color: "var(--brand-blue)", marginBottom: "1rem" }}>Veriye Dayalı Kurumsal Gelişim</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                8 farklı bilimsel ölçüm modelini (DISC, Big Five, vb.) birleştiren BMA Hibrit Analiz sistemimiz ile ekibinizin güçlü ve gelişime açık yönlerini tespit ediyoruz. Bu veriler ışığında kurumunuza tamamen özel (tailor-made) satış, iletişim ve liderlik eğitimleri tasarlıyoruz.
              </p>
              <Link href="/akademi" className="btn btn-outline">Akademi'yi Keşfet</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className={styles.sectionTitle}>
            <h2>Sıkça Sorulan Sorular</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div className={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.altSection} text-center`}>
        <div className="container">
          <h2 style={{ marginBottom: "1rem" }}>Yapay Zeka Dönüşümüne Bugün Başlayın</h2>
          <p style={{ marginBottom: "2rem" }}>Yapay zeka asistanlarımız veya web/e-ticaret çözümlerimiz için uzmanlarımızla hemen görüşün.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
             <button className="btn btn-primary" onClick={openDemo}>Demo Görüşmesi Ayarla</button>
             <Link href="/urunler" className="btn btn-outline">Tüm Çözümlerimiz</Link>
          </div>
        </div>
      </section>
    </>
  );
}
