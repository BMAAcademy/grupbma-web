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
              <h2>Maksimum Kabiliyetli Satış Direktörünüz (Gölge Yönetici)</h2>
              <p>
                BEMA Manager, sıradan bir asistanın ötesinde, arka planda 7/24 çalışan acımasız bir veri yöneticisidir. 
                Web sitelerini ve PDF'leri (örn: teknik föyleri) anında okuyarak rakip analizleri yapar, sahaya "Toplantı Öncesi Taktik" fısıldar. 
                Müşterilerin kör noktalarını (Cross-Sell fırsatları) bulur, kârınızı korumak için iskonto onaylarında finansal kontralar (Gölge Fiyatlama) üretir. 
                Ayrıca kaybedilen satışların gizli nedenlerini (Root-Cause) tespit ederek sizi uyarır.
              </p>
              <ul>
                <li>Web Sitesi & PDF Tarama (Rakip İstihbaratı ve Battlecards)</li>
                <li>Sözleşme Analizi (Kırmızı / Sarı / Yeşil Bayrak Uyarıları)</li>
                <li>Kör Nokta Radarı (Otomatik Çapraz Satış Fırsatı)</li>
                <li>Akıllı İskonto Yöneticisi (Finansal Koruma Taktikleri)</li>
                <li>Toplantı Öncesi Kişi/Kurum Röntgeni ve Kök Neden Analizleri</li>
                <li>%100 Halüsinasyon Koruması — Asla veri uydurmaz</li>
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
                <div style={{ color: '#25D366', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.5rem', textAlign: 'center', backgroundColor: 'rgba(37, 211, 102, 0.1)', padding: '5px', borderRadius: '5px', border: '1px solid #25D366' }}>
                  🟢 WhatsApp Kurumsal Entegrasyonu: +$10 / Ay
                </div>
              </div>
              <ul className={styles.featuresList}>
                <li>Telegram üzerinden 7/24 erişim (WhatsApp Opsiyonel)</li>
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
              <div className={styles.tierSlogan}>Gölge Satış Direktörü</div>
              <p className={styles.tierDesc}>Web/PDF okuyarak rakipleri ifşa eder. Çapraz satış fırsatları bulur, kârlılığınızı iskonto zekasıyla korur.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: $699</div>
                <div className={styles.monthlyFee}>$249 <span>/ Kullanıcı / Ay</span></div>
                <div className={styles.discountBadge}>
                  (İlk ay %20 indirimle $199.20 / Kullanıcı)
                </div>
                <div className={styles.annualBadge}>
                  🎁 Yıllık ödemede 10 ay öde, 12 ay kullan
                </div>
                <div style={{ color: '#25D366', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.5rem', textAlign: 'center', backgroundColor: 'rgba(37, 211, 102, 0.1)', padding: '5px', borderRadius: '5px', border: '1px solid #25D366' }}>
                  🟢 WhatsApp Kurumsal Entegrasyonu: +$10 / Ay
                </div>
              </div>
              <ul className={styles.featuresList}>
                <li>BEMA paketindeki her şey</li>
                <li className={styles.highlightFeature}>Web & PDF Tarama + Rakip Battlecardları</li>
                <li className={styles.highlightFeature}>Kör Nokta Radarı (Çapraz Satış Keşfi)</li>
                <li className={styles.highlightFeature}>Akıllı İskonto Yöneticisi & Gölge Fiyatlama</li>
                <li>Sözleşme Analizi ve Yönetici Raporları</li>
                <li>Toplantı Taktikleri ve Kaybedilen Satış Otopsisi</li>
                <li>%100 Halüsinasyon Koruması (Kesin Veriyle Konuşur)</li>
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
