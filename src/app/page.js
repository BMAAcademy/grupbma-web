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
      q: "BMA Hibrit Analiz Sistemi nedir?",
      a: "BMA Hibrit Analiz Sistemi, kişilik, davranış, bilişsel kapasite ve duygusal zeka gibi 8 farklı disiplini bir araya getirerek aday veya çalışan profilini en yüksek doğrulukla analiz eden yenilikçi bir ölçümleme modelidir."
    },
    {
      q: "Yapay Zeka (AI) çözümleriniz sadece büyük kurumlara mı uygun?",
      a: "Hayır. AI Coach, AI Müşteri Temsilcisi ve AI Satış Botu gibi çözümlerimiz modülerdir. Hem KOBİ'ler hem de büyük kurumsal şirketler kendi ihtiyaç ve ölçeklerine göre bu sistemleri entegre edebilir."
    },
    {
      q: "Eğitim programlarınızı şirkete özel uyarlıyor musunuz?",
      a: "Evet. BMA Akademi altındaki tüm eğitim içeriklerimiz, şirketinizin ihtiyaç analizine göre terzi usulü (tailor-made) olarak uyarlanarak sunulmaktadır."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroSubtitle}>Geleceğin İnsan Kaynakları ve Satış Teknolojileri</span>
          <h1>Şirketinizi <span className="text-gradient">Yapay Zeka</span> ile Ölçekleyin</h1>
          <p className={styles.heroText}>
            İş süreçlerinizi AI ile daha hızlı, akıllı ve verimli hale getirin. Hibrit analiz sistemleri ve kurumunuza özel eğitilmiş yapay zeka asistanlarıyla performansı, verimliliği ve satışı maksimize edin.
          </p>
          <div className={styles.heroButtons}>
            <button className="btn btn-primary" onClick={openDemo}>Hemen Demo İste</button>
            <Link href="/urunler" className="btn btn-outline">Çözümleri İncele</Link>
          </div>
        </div>
      </section>

      {/* BMA Approach / About Section */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>BMA Yaklaşımı</h2>
            <p>Veriye dayalı analiz ve yapay zeka destekli gelişim.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🧠</div>
              <h3>Bütünsel Analiz</h3>
              <p>İnsan davranışını, yetkinliklerini ve potansiyelini 8 farklı bilimsel model (DISC, Big Five, HEXACO vb.) ile analiz ederek %99'a varan tutarlılıkta içgörüler sunarız.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🤖</div>
              <h3>AI Destekli Gelişim</h3>
              <p>Sadece raporlamakla kalmaz, sonuçları AI Coach ve Executive Assistant gibi yapay zeka modüllerimizle sürekli bir gelişim programına dönüştürürüz.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📈</div>
              <h3>Ölçülebilir Performans</h3>
              <p>Kurduğumuz sistemlerin yarattığı etkiyi anlık takip edebileceğiniz kurumsal portallar ve KPI izleme ekranlarıyla performansı şeffaflaştırırız.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={`section ${styles.altSection}`}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>Kullanım Senaryoları</h2>
            <p>Çözümlerimiz kurumunuzda nasıl fark yaratır?</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>İşe Alım ve Seçme</h3>
              <p><strong>Sorun:</strong> Yanlış işe alım kararlarının yarattığı maliyet ve zaman kaybı.</p>
              <p><strong>Çözüm:</strong> Adayları BMA Hibrit Analiz Sistemi'ne sokarak kurum kültürüne ve pozisyona en uygun, riski en düşük profili bilimsel verilerle seçin.</p>
            </div>
            <div className={styles.card}>
              <h3>Satış Ekiplerinin Yönetimi</h3>
              <p><strong>Sorun:</strong> Satış ekiplerinin sahada anlık desteğe ve koçluğa ihtiyaç duyması.</p>
              <p><strong>Çözüm:</strong> "AI Coach" ile satışçılarınıza 7/24 kişiselleştirilmiş geri bildirim, itiraz karşılama taktikleri ve motivasyon desteği sağlayın.</p>
            </div>
            <div className={styles.card}>
              <h3>Müşteri İletişimi</h3>
              <p><strong>Sorun:</strong> Mesai saatleri dışında müşteri taleplerinin cevapsız kalması.</p>
              <p><strong>Çözüm:</strong> "AI Müşteri Temsilcisi" ile web sitenizde veya WhatsApp hattınızda doğal dil işleme ile insansı iletişim kuran bir bot konumlandırın.</p>
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
          <h2 style={{ marginBottom: "1rem" }}>Hemen Başlayın</h2>
          <p style={{ marginBottom: "2rem" }}>Şirketinizin yapay zeka dönüşümünü başlatmak için uzmanlarımızla ücretsiz bir demo görüşmesi ayarlayın.</p>
          <button className="btn btn-primary" onClick={openDemo}>Demo Görüşmesi Ayarla</button>
        </div>
      </section>
    </>
  );
}
