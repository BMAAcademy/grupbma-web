"use client";
import styles from "./bema.module.css";

export default function BemaPage() {
  const openDemo = () => {
    window.dispatchEvent(new Event('openDemoModal'));
  };

  return (
    <>
      {/* ── Hero Section ── */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-gradient">BEMA – AI Satış ve Operasyon Asistanı</h1>
          <p className={styles.intro}>
            Şirketinizin tüm ürün ve teknik dokümantasyonunu ezbere bilen, satış ekibinize anlık destek veren,
            profesyonel teklifler hazırlayıp müşterilerinize gönderen ve toplantılarınızı planlayan
            yapay zeka destekli iş ortağınız. Bema sayesinde satış ekibiniz operasyonel yükten kurtulur,
            tüm enerjisini satışa odaklar.
          </p>
        </div>
      </section>

      {/* ── Feature 1: Teknik Destek ve Teklif (Hayatı Kolaylaştıran) ── */}
      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.featureFlex}>
            <div className={styles.featureImage}>
              <img src="/images/ai_coach.png" alt="BEMA AI Teklif Hazırlama" />
            </div>
            <div className={styles.featureContent}>
              <h2>Teknik Bilgiyi Ezberler, Teklifi Saniyede Hazırlar</h2>
              <p>
                Bema, şirketinizin tüm ürün kataloğunu, teknik özelliklerini ve fiyat listelerini öğrenir.
                Satış temsilciniz müşteriyle görüşürken Telegram'dan bir sesli mesajla veya yazıyla
                "XYZ firmasına 50 adet A ürünü için teklif hazırla" der — Bema saniyeler içinde
                profesyonel bir PDF teklif oluşturur, onayınızla müşteriye e-posta ile gönderir.
              </p>
              <ul>
                <li>Tüm ürün ve teknik dokümantasyona tam hakimiyet</li>
                <li>Sesli veya yazılı komutla anında teklif oluşturma (PDF)</li>
                <li>Onaylı e-posta ile müşteriye otomatik gönderim</li>
                <li>Toplantı planlama ve takvim entegrasyonu</li>
                <li>WhatsApp ve Telegram üzerinden 7/24 erişim</li>
              </ul>
              <button className="btn btn-primary" onClick={openDemo}>BEMA ile Tanışın</button>
            </div>
          </div>
        </div>
      </section>



      {/* ── Feature 3: Sözleşme & Rakip & Ciro ── */}
      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.featureFlex}>
            <div className={styles.featureImage}>
              <img src="/images/bema_pro_features.jpg" alt="BEMA Manager - Sözleşme, Rakip, Ciro" />
            </div>
            <div className={styles.featureContent}>
              <h2>Sözleşme Okur, Rakip Takip Eder, Ciro Analizi Yapar</h2>
              <p>
                BEMA Manager ile yöneticileriniz ve direktörleriniz sadece bir asistana değil, aynı zamanda bir operasyon yöneticisine
                sahip olur. Müşteriden gelen 20 sayfalık sözleşmeyi saniyeler içinde tarar ve şirket
                politikalarınıza aykırı maddeleri kırmızı bayraklarla raporlar. Rakiplerinizin web sitelerini
                düzenli takip eder, fiyat değişikliklerini algılar ve karşı argümanlar üretir. Üstelik tüm
                bunları yaparken asla veri uydurmaz.
              </p>
              <ul>
                <li>Sözleşme uygunluk kontrolü (Kırmızı / Sarı / Yeşil bayrak sistemi)</li>
                <li>Dinamik rakip istihbaratı ve karşı argüman üretimi</li>
                <li>%100 Halüsinasyon koruması — bilmiyorsa "bilmiyorum" der</li>
                <li>Ciro Analizi ve Yönetici Raporları</li>
                <li>Performans anormallik uyarıları</li>
              </ul>
              <button className="btn btn-outline" onClick={openDemo}>BEMA Manager Hakkında Bilgi Al</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing Section ── */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "2rem", color: "var(--brand-blue)" }}>Şirketiniz İçin En Uygun BEMA Modelini Seçin</h2>
            <p style={{ color: "var(--text-muted)" }}>İhtiyaçlarınıza göre ölçeklenebilen 3 farklı premium paket.</p>
          </div>

          <div className={styles.pricingGrid}>
            {/* ── Lite ── */}
            <div className={styles.pricingCard}>
              <h3 className={styles.tierName}>BEMA</h3>
              <div className={styles.tierSlogan}>Saha Satış Asistanı</div>
              <p className={styles.tierDesc}>Ürün bilgisine hakim, teklif hazırlayan ve toplantı planlayan yapay zeka destekli satış asistanınız.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: $549</div>
                <div className={styles.monthlyFee}>$159 <span>/ Kullanıcı / Ay</span></div>
                <div className={styles.discountBadge}>
                  (İlk ay %20 indirimle $127.20 / Kullanıcı)
                </div>
                <div className={styles.annualBadge}>
                  🎁 Yıllık ödemede 10 ay öde, 12 ay kullan
                </div>
              </div>
              <ul className={styles.featuresList}>
                <li>WhatsApp ve Telegram üzerinden 7/24 erişim</li>
                <li>Tüm ürün ve teknik dokümantasyona hakimiyet</li>
                <li>Akıllı ürün öneri ve problem çözme</li>
                <li>Manuel tetiklemeli teklif hazırlama (PDF)</li>
                <li>Onaylı e-posta ile teklif gönderimi</li>
                <li>Toplantı planlama ve takvim entegrasyonu</li>
                <li>Karakter analizine göre kişiselleştirilmiş yönlendirme</li>
              </ul>
              <button className="btn btn-outline" onClick={openDemo}>Bilgi Al</button>
            </div>

            {/* ── Pro ── */}
            <div className={`${styles.pricingCard} ${styles.popularCard}`}>
              <div className={styles.popularBadge}>EN ÇOK TERCİH EDİLEN</div>
              <h3 className={styles.tierName}>BEMA Manager</h3>
              <div className={styles.tierSlogan}>Yönetici ve Analiz Asistanı</div>
              <p className={styles.tierDesc}>Sözleşme okur, rakipleri izler ve ciro raporu üretir. Stratejik kararlar almanızı sağlar.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: $699</div>
                <div className={styles.monthlyFee}>$249 <span>/ Kullanıcı / Ay</span></div>
                <div className={styles.discountBadge}>
                  (İlk ay %20 indirimle $199.20 / Kullanıcı)
                </div>
                <div className={styles.annualBadge}>
                  🎁 Yıllık ödemede 10 ay öde, 12 ay kullan
                </div>
              </div>
              <ul className={styles.featuresList}>
                <li>BEMA paketindeki her şey</li>
                <li className={styles.highlightFeature}>Sözleşme Uygunluk Kontrolü (Kırmızı/Sarı/Yeşil Bayrak)</li>
                <li className={styles.highlightFeature}>Dinamik Rakip İstihbaratı ve Karşı Argüman</li>
                <li className={styles.highlightFeature}>Ciro Analizi ve Yönetici Raporları</li>
                <li>Performans anormallik uyarıları</li>
                <li>%100 Halüsinasyon koruması (Strict RAG)</li>
              </ul>
              <button className="btn btn-primary" onClick={openDemo}>Hemen Başla</button>
            </div>

            {/* ── Enterprise ── */}
            <div className={styles.pricingCard}>
              <h3 className={styles.tierName}>BEMA Enterprise</h3>
              <div className={styles.tierSlogan}>Kurumsal Sınırsız Altyapı</div>
              <p className={styles.tierDesc}>Kendi API anahtarınızla sınırları kaldırın. Büyük ekipler için 2 adet Manager ve sınırsız BEMA içeren yapı.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: $699</div>
                <div className={styles.monthlyFee}>$2,399 <span>/ Ay</span></div>
              </div>
              <ul className={styles.featuresList}>
                <li>BEMA Manager paketindeki her şey</li>
                <li className={styles.highlightFeature}>BYOK — Kendi API Anahtarınızı Kullanın</li>
                <li className={styles.highlightFeature}>2 Adet BEMA Manager Lisansı</li>
                <li className={styles.highlightFeature}>Sınırsız BEMA (Satış Asistanı) Lisansı</li>
                <li className={styles.highlightFeature}>Ekstra BEMA Manager: +$100 / Ay</li>
                <li className={styles.highlightFeature}>Sınırsız Mesaj (Günlük Limit Yok)</li>
                <li>Özel CRM / ERP Entegrasyonları</li>
                <li>Öncelikli teknik destek ve SLA</li>
              </ul>
              <button className="btn btn-outline" onClick={openDemo}>Proje Görüşmesi</button>
            </div>
          </div>

          {/* ── API Notu ── */}
          <div className={styles.infoBox}>
            <h4>Önemli Not: API Maliyetleri</h4>
            <p>
              <strong>BEMA ve BEMA Manager</strong> paketlerinde yapay zeka işlem maliyetleri (OpenAI API) fiyata dahildir;
              kullanıcı başına günlük 50 mesaj limiti uygulanır. <strong>Enterprise</strong> paketinde ise şirket
              kendi OpenAI API anahtarını sisteme girer ve AI işlem maliyetlerini doğrudan kendi hesabına yansıtır;
              bu sayede sınırsız kullanım hakkı elde eder.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
