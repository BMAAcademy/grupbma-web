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

      {/* ── Feature 2: Proaktif Takip ── */}
      <section className={styles.featureSectionAlt}>
        <div className="container">
          <div className={styles.featureFlexReverse}>
            <div className={styles.featureContent}>
              <h2>Takip Etmeyi Unutmaz, Her Fırsatın Peşini Bırakmaz</h2>
              <p>
                Gönderdiğiniz teklif 3 gündür yanıtsız mı? Bema bunu fark eder ve size Telegram'dan 
                kişiselleştirilmiş bir takip e-postası taslağı sunar. Siz "Gönder" dersiniz, o gönderir. 
                İnisiyatif almaz, her adımda onayınızı bekler.
              </p>
              <ul>
                <li>CRM'deki açık teklifleri günlük otomatik tarama</li>
                <li>Müşteriye özel, doğal dilde takip e-postası taslağı</li>
                <li>Satışçının tek dokunuşla onaylayıp göndermesi</li>
                <li>İnisiyatif almaz — her zaman onay bekler</li>
              </ul>
            </div>
            <div className={styles.featureImage}>
              <img src="/images/bema_followup.jpg" alt="BEMA AI Proaktif Takip" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature 3: Sözleşme & Rakip & Ciro ── */}
      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.featureFlex}>
            <div className={styles.featureImage}>
              <img src="/images/bema_pro_features.jpg" alt="BEMA Pro - Sözleşme, Rakip, Ciro" />
            </div>
            <div className={styles.featureContent}>
              <h2>Sözleşme Okur, Rakip Takip Eder, Ciro Tahmin Eder</h2>
              <p>
                Bema Pro ile satış ekibiniz sadece bir asistana değil, aynı zamanda bir operasyon yöneticisine 
                sahip olur. Müşteriden gelen 20 sayfalık sözleşmeyi saniyeler içinde tarar ve şirket 
                politikalarınıza aykırı maddeleri kırmızı bayraklarla raporlar. Rakiplerinizin web sitelerini 
                düzenli takip eder, fiyat değişikliklerini algılar ve karşı argümanlar üretir. Üstelik tüm 
                bunları yaparken asla veri uydurmaz.
              </p>
              <ul>
                <li>Sözleşme uygunluk kontrolü (Kırmızı / Sarı / Yeşil bayrak sistemi)</li>
                <li>Dinamik rakip istihbaratı ve karşı argüman üretimi</li>
                <li>%100 Halüsinasyon koruması — bilmiyorsa "bilmiyorum" der</li>
                <li>Tahmine dayalı ciro analizi ve haftalık yönetim raporları</li>
                <li>Performans anormallik uyarıları</li>
              </ul>
              <button className="btn btn-outline" onClick={openDemo}>Pro Paket Hakkında Bilgi Al</button>
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
              <h3 className={styles.tierName}>Bema Lite</h3>
              <div className={styles.tierSlogan}>Dijital Satış Asistanınız</div>
              <p className={styles.tierDesc}>Ürün bilgisine hakim, teklif hazırlayan ve toplantı planlayan yapay zeka destekli satış asistanınız.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: $399</div>
                <div className={styles.monthlyFee}>$89 <span>/ Kullanıcı / Ay</span></div>
                <div className={styles.discountBadge}>
                  (İlk ay %20 indirimle $71.20 / Kullanıcı)
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
              <h3 className={styles.tierName}>Bema Pro</h3>
              <div className={styles.tierSlogan}>Proaktif Operasyon Yöneticisi</div>
              <p className={styles.tierDesc}>Takip yapar, sözleşme okur, rakipleri izler ve ciro tahmini üretir. Satışçıdan çok daha fazlası.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: $699</div>
                <div className={styles.monthlyFee}>$199 <span>/ Kullanıcı / Ay</span></div>
                <div className={styles.discountBadge}>
                  (İlk ay %20 indirimle $159.20 / Kullanıcı)
                </div>
                <div className={styles.annualBadge}>
                  🎁 Yıllık ödemede 10 ay öde, 12 ay kullan
                </div>
              </div>
              <ul className={styles.featuresList}>
                <li>Lite paketindeki her şey</li>
                <li className={styles.highlightFeature}>Onaylı Otomatik Takip (Follow-up E-posta)</li>
                <li className={styles.highlightFeature}>Sözleşme Uygunluk Kontrolü (Kırmızı/Sarı/Yeşil Bayrak)</li>
                <li className={styles.highlightFeature}>Dinamik Rakip İstihbaratı ve Karşı Argüman</li>
                <li className={styles.highlightFeature}>Tahmine Dayalı Ciro Analizi ve Yönetim Raporları</li>
                <li>Performans anormallik uyarıları</li>
                <li>%100 Halüsinasyon koruması (Strict RAG)</li>
              </ul>
              <button className="btn btn-primary" onClick={openDemo}>Hemen Başla</button>
            </div>

            {/* ── Enterprise ── */}
            <div className={styles.pricingCard}>
              <h3 className={styles.tierName}>Bema Enterprise</h3>
              <div className={styles.tierSlogan}>Kurumsal Sınırsız Altyapı</div>
              <p className={styles.tierDesc}>Kendi API anahtarınızla sınırsız kullanıcı ve mesaj hakkı. Büyük ekipler için ölçeklenebilir çözüm.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: $699</div>
                <div className={styles.monthlyFee}>$2,599 <span>/ Ay</span></div>
              </div>
              <ul className={styles.featuresList}>
                <li>Pro paketindeki her şey</li>
                <li className={styles.highlightFeature}>BYOK — Kendi API Anahtarınızı Kullanın</li>
                <li className={styles.highlightFeature}>Sınırsız Kullanıcı (Koltuk Limiti Yok)</li>
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
              <strong>Lite ve Pro</strong> paketlerinde yapay zeka işlem maliyetleri (OpenAI API) fiyata dahildir; 
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
