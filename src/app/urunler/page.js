"use client";
import styles from "./urunler.module.css";

export default function Urunler() {
  const openDemo = () => {
    window.dispatchEvent(new Event('openDemoModal'));
  };

  const products = [
    {
      title: "BMA Hibrit Analiz Sistemi",
      desc: "İnsan kaynakları ve yönetim süreçlerinizde karar alma mekanizmalarını veri ile güçlendirin. 8 farklı bilimsel ölçüm modelini (DISC, Big Five, HEXACO, RIASEC, EQ, Cognitive, Dark Triad, SJT) tek bir potada eriten sistemimiz, personel ve aday değerlendirmesinde %99'a varan başarı sağlar.",
      features: [
        "8 Farklı Bilimsel Disiplin Entegrasyonu",
        "Detaylı Kişilik ve Yetkinlik Raporlaması",
        "İşe Alım ve Terfi Kararlarında Veri Odaklı Yaklaşım",
        "Kültürel Uyum ve Risk Analizi"
      ],
      imageLabel: "Hibrit Analiz Şeması Gelecek"
    },
    {
      title: "AI Coach",
      desc: "Çalışanlarınızın performansını artırmak için 7/24 yanlarında olan yapay zeka destekli gelişim modülü. Sürekli geri bildirim verir, satış senaryoları çalıştırır ve eksik yetkinlikleri tespit ederek kişiselleştirilmiş eğitim önerileri sunar.",
      features: [
        "Sesli ve Yazılı Rol Oyunu (Role-Play) Yeteneği",
        "Anlık Performans Geri Bildirimi",
        "BMA Modeli ile Entegre Gelişim Planı"
      ],
      imageLabel: "AI Coach Robot Görseli"
    },
    {
      title: "Executive AI Assistant",
      desc: "Yöneticiler için tasarlanmış yeni nesil yapay zeka asistanı. Toplantı notları çıkarır, CRM verilerini analiz eder, pazar trendlerini özetler ve stratejik kararlarınızda size saniyeler içinde veri sunar.",
      features: [
        "Toplantı Organizasyonu ve Özetleme",
        "Veri Analizi ve Rapor Üretimi",
        "Yüksek Güvenlikli Kurumsal Bilgi Yönetimi"
      ],
      imageLabel: "Executive AI Assistant"
    },
    {
      title: "AI Avukat",
      desc: "Hukuk departmanınızın iş yükünü hafifleten, sözleşmeleri saniyeler içinde tarayan, emsal kararları bulan ve temel hukuki metinleri taslaklandıran uzman yapay zeka asistanı.",
      features: [
        "Sözleşme İnceleme ve Risk Tespiti",
        "Mevzuat ve İçtihat Taraması",
        "7/24 Hukuki Taslak Desteği"
      ],
      imageLabel: "AI Avukat (Yapay Zeka Görseli Üretilecek)"
    },
    {
      title: "AI Müşteri Temsilcisi",
      desc: "Müşterilerinizle sadece SSS üzerinden değil, insan doğallığında empati kurarak konuşabilen, satış kapama yeteneğine sahip akıllı bot. WhatsApp, Web veya Santral entegrasyonu mevcuttur.",
      features: [
        "Çoklu Kanal (Omnichannel) Desteği",
        "Duygu Analizi (Sentiment Analysis) ve Empati",
        "CRM Otomasyonu"
      ],
      imageLabel: "AI Müşteri Temsilcisi (Yapay Zeka Görseli Üretilecek)"
    },
    {
      title: "AI Satış Botu",
      desc: "Sıcak lead (potansiyel müşteri) havuzunuza otomatik ulaşıp, ön eleme yapan, teklif ileten ve randevu koparan satış odaklı otonom sistem.",
      features: [
        "Lead Puanlama (Lead Scoring)",
        "Otomatik Teklif ve PDF Üretimi",
        "Takvim ve Randevu Entegrasyonu"
      ],
      imageLabel: "AI Satış Botu (Yapay Zeka Görseli Üretilecek)"
    },
    {
      title: "AI Markanız (Tailor-Made Çözüm)",
      desc: "Kurumunuzun kendi verileriyle eğitilmiş, tamamen size özel (Private LLM) yapay zeka asistanı. Çalışanlarınız şirket politikalarını, ürün kataloglarını ve iç işleyişi doğrudan bu bottan öğrenebilir.",
      features: [
        "Kuruma Özel Veri Tabanı Eğitimi",
        "Yüksek Güvenlik (On-Premise veya Private Cloud)",
        "İç İletişim ve Oryantasyon Otomasyonu"
      ],
      imageLabel: "Size Özel Yapay Zeka (AI Markanız)"
    }
  ];

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-gradient">Çözümlerimiz & Ürünlerimiz</h1>
          <p>Yapay zeka teknolojileri ve bilimsel analiz sistemleriyle kurumunuzu geleceğe taşıyın.</p>
        </div>
      </section>

      <section className={styles.productsGrid}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {products.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <div className={styles.productImage}>
                  {/* Buraya sonradan Image componenti gelecek, şimdilik placeholder */}
                  <span className={styles.placeholderText}>{product.imageLabel}</span>
                </div>
                <div className={styles.productContent}>
                  <h2 className={styles.productTitle}>{product.title}</h2>
                  <p className={styles.productDesc}>{product.desc}</p>
                  <ul className={styles.featuresList}>
                    {product.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                  <button className="btn btn-outline" onClick={openDemo}>Demo Görüşmesi Ayarla</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
