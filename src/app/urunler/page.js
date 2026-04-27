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
      image: "/images/bma_hibrit_analiz.png"
    },
    {
      title: "AI Coach – BEMA",
      desc: "Şirketinizin tüm ürün, süreç ve müşteri verisini öğrenerek satıştan operasyona kadar her noktada aktif rol alan yapay zeka destekli akıllı iş asistanı. Doğru ürünü önerir, teklif hazırlar, süreçleri yönetir ve tüm kararlarını hem veriye hem de çalışan karakter analizine göre optimize eder.",
      features: [
        "Ürün ve Teknik Dokümantasyon Hakimiyeti",
        "Akıllı Ürün Öneri ve Problem Çözme Yeteneği",
        "Karakter Analizine Göre Kişiselleştirilmiş Yönlendirme",
        "CRM / ERP Entegrasyonu ile Anlık Raporlama",
        "Otomatik Teklif Hazırlama ve Gönderim",
        "Toplantı Planlama ve Takip",
        "WhatsApp & Telegram Üzerinden Sesli / Yazılı Yönetim"
      ],
      image: "/images/ai_coach.png"
    },
    {
      title: "Executive AI Assistant – VERA",
      desc: "Yöneticiler için tasarlanmış yeni nesil yapay zeka destekli karar asistanı. Toplantıları organize eder, görüşme notlarını özetler, CRM / ERP verilerini analiz eder ve pazar gelişmelerini takip ederek stratejik kararlar için ihtiyaç duyulan bilgiyi saniyeler içinde yönetime sunar.",
      features: [
        "Toplantı Organizasyonu ve Görüşme Özeti",
        "CRM / ERP Verileriyle Yönetici Raporlama",
        "Pazar Trendleri ve Rekabet İçgörüleri",
        "Stratejik Karar Destek Sistemi",
        "Yüksek Güvenlikli Kurumsal Bilgi Yönetimi"
      ],
      image: "/images/ai_executive_assistant.png"
    },
    {
      title: "AI Avukat – JURA",
      desc: "Avukatlar, hukuk büroları ve şirketlerin hukuk departmanları için geliştirilen yapay zeka destekli hukuk asistanı. Sözleşmeleri analiz eder, riskli maddeleri tespit eder, mevzuat ve içtihat araştırmalarını hızlandırır; dilekçe, sözleşme ve hukuki metin taslaklarında güçlü bir ön hazırlık desteği sunar.",
      features: [
        "Sözleşme İnceleme ve Risk Tespiti",
        "Mevzuat ve İçtihat Araştırma Desteği",
        "Güncel Mevzuat Değişikliklerini Takip",
        "Dilekçe, Sözleşme ve Hukuki Metin Taslakları",
        "Dava Dosyası ve Belge Özetleme",
        "Hukuk Büroları ve Kurumsal Hukuk Departmanları İçin Kullanım",
        "7/24 Hukuki Ön Hazırlık Asistanı"
      ],
      image: "/images/ai_hukuk_danismani.png"
    },
    {
      title: "AI Müşteri Temsilcisi – NORA",
      desc: "Müşterilerinizle WhatsApp, web sitesi veya santral üzerinden doğal ve empatik şekilde iletişim kuran yapay zeka destekli müşteri temsilcisi. Sık sorulan soruları yanıtlar, talepleri sınıflandırır, CRM’e işler ve uygun durumlarda satış fırsatlarını ilgili ekibe yönlendirir.",
      features: [
        "Çoklu Kanal İletişim Desteği",
        "Duygu Analizi ve Empatik Yanıt Yeteneği",
        "SSS ve Ürün Bilgisiyle Akıllı Yanıtlama",
        "CRM Otomasyonu ve Talep Kaydı",
        "Satış Fırsatı Tespiti ve Yönlendirme",
        "WhatsApp / Web Sitesi / Santral Entegrasyonu"
      ],
      image: "/images/customer_support.png"
    },
    {
      title: "AI Satış Botu – VEXA",
      desc: "Potansiyel müşterilerle otomatik iletişime geçen, ihtiyaç analizi yapan, lead kalitesini ölçen, teklif sürecini başlatan ve randevu oluşturan satış odaklı yapay zeka sistemi.",
      features: [
        "Lead Puanlama ve Ön Eleme",
        "Otomatik Teklif ve PDF Üretimi",
        "Takvim ve Randevu Entegrasyonu",
        "WhatsApp / Web Sitesi / Sosyal Medya Üzerinden İletişim",
        "Satış Ekibine Hazır Müşteri Aktarımı"
      ],
      image: "/images/sales_bot.png"
    },
    {
      title: "AI Otomasyon Ajanları (Tailor-Made) – BMA",
      desc: "İhtiyacınıza göre sıfırdan tasarlanan yapay zeka ajanlarıyla iş süreçlerinizi otomatikleştirin. İç operasyonlardan pazarlamaya kadar her görev; veri analizi, içerik üretimi, entegrasyon ve aksiyon alma dahil olmak üzere uçtan uca sizin adınıza yönetilir.",
      features: [
        "İhtiyaca Özel AI Ajan Geliştirme",
        "İş Süreçlerinin Uçtan Uca Otomasyonu",
        "API, CRM, ERP ve 3. Parti Sistem Entegrasyonları",
        "İçerik Üretimi ve Yayınlama Otomasyonları",
        "Veri Analizi ve Aksiyon Tetikleme",
        "Private Cloud / On-Premise Kurulum Seçenekleri",
        "Yüksek Güvenlikli Kurumsal Altyapı"
      ],
      image: "/images/tailor_made.png"
    },
    {
      title: "AI Destekli Web Sitesi & Landing Page Çözümleri",
      desc: "İşinize özel tasarlanan, yüksek dönüşüm odaklı web siteleri ve landing page’ler ile dijital varlığınızı güçlendirin. Satış, lead toplama ve marka konumlandırma hedeflerinize uygun olarak hızlı, modern ve optimize edilmiş sayfalar oluşturulur.",
      features: [
        "Kurumsal Web Sitesi Tasarımı",
        "Landing Page ve Satış Sayfası Oluşturma",
        "Dönüşüm (Conversion) Odaklı UX/UI Tasarım",
        "Hızlı Kurulum ve Yayına Alma",
        "SEO ve Performans Optimizasyonu",
        "AI Destekli İçerik ve Metin Üretimi"
      ],
      image: "/images/web_tasarimi_hizmeti.png"
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
                <div className={styles.productImage} style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={product.image} alt={product.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
