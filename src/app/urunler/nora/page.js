"use client";
import styles from "./nora.module.css";

export default function NoraPage() {
  const openDemo = () => {
    window.dispatchEvent(new Event('openDemoModal'));
  };

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-gradient">NORA - AI Müşteri Temsilcisi</h1>
          <p className={styles.intro}>
            Web siteniz, WhatsApp hattınız ve çağrı merkeziniz üzerinden 7/24 kesintisiz hizmet veren, 
            duygu analizi yapabilen ve müşteriyi doğrudan satışa (sepete) yönlendiren akıllı dijital çalışanınız.
          </p>
        </div>
      </section>

      {/* Dinamik Cross-Sell Özelliği Vurgusu */}
      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.featureFlex}>
            <div className={styles.featureImage}>
              <img src="/images/customer_support.png" alt="NORA AI Cross Selling" />
            </div>
            <div className={styles.featureContent}>
              <h2>Sadece Soru Cevaplamaz, Çapraz Satış (Cross-Sell) Yapar</h2>
              <p>
                NORA standart bir SSS (Sıkça Sorulan Sorular) botu değildir. Müşterinizin sepetindeki veya ilgilendiği 
                ana ürünü anında analiz eder. Ödeme adımına geçmeden hemen önce, tamamen organik bir dille 
                tamamlayıcı ürünü tavsiye eder.
              </p>
              <p>
                <strong>Dinamik İskonto:</strong> "Harika bir seçim! Yeni telefonunuzun yanında koruyucu kılıf da almak isterseniz 
                size özel anında %10 indirim tanımlayabilirim" diyerek sepet ortalamanızı (AOV) otomatik olarak artırır.
              </p>
              <button className="btn btn-primary" onClick={openDemo}>NORA ile Tanışın</button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "2rem", color: "var(--brand-blue)" }}>Şirketiniz İçin En Uygun NORA Modelini Seçin</h2>
            <p style={{ color: "var(--text-muted)" }}>İhtiyaçlarınıza göre ölçeklenebilen 4 farklı premium paket.</p>
          </div>

          <div className={styles.pricingGrid}>
            {/* Lite */}
            <div className={styles.pricingCard}>
              <h3 className={styles.tierName}>Nora Lite</h3>
              <div className={styles.tierSlogan}>Dijital Karşılama Asistanınız</div>
              <p className={styles.tierDesc}>Yapay zeka destekli müşteri iletişimine sade, hızlı ve profesyonel bir başlangıç yapın.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: $329</div>
                <div className={styles.monthlyFee}>$129 <span>/ Ay</span></div>
                <div style={{ fontSize: "0.85rem", color: "#10b981", marginTop: "0.25rem", fontWeight: "600" }}>
                  (İlk 3 ay %20 indirimle $103 / Ay)
                </div>
              </div>
              <ul className={styles.featuresList}>
                <li>WhatsApp üzerinden 7/24 iletişim</li>
                <li>Sık Sorulan Sorulara (SSS) anında yanıt</li>
                <li>Firma tanıtımı ve yönlendirme</li>
                <li>Temel müşteri taleplerini anlama</li>
              </ul>
              <button className="btn btn-outline" onClick={openDemo}>Bilgi Al</button>
            </div>

            {/* Connect */}
            <div className={`${styles.pricingCard} ${styles.popularCard}`}>
              <div className={styles.popularBadge}>EN ÇOK TERCİH EDİLEN</div>
              <h3 className={styles.tierName}>Nora Connect</h3>
              <div className={styles.tierSlogan}>Web Sitenizdeki Akıllı Tezgahtar</div>
              <p className={styles.tierDesc}>Ziyaretçileri anlar, ürün katalogunuzu ezberler ve doğrudan satışa çevirir.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: $779</div>
                <div className={styles.monthlyFee}>$329 <span>/ Ay</span></div>
                <div style={{ fontSize: "0.85rem", color: "#10b981", marginTop: "0.25rem", fontWeight: "600" }}>
                  (İlk 3 ay %20 indirimle $263 / Ay)
                </div>
              </div>
              <ul className={styles.featuresList}>
                <li>Lite paketindeki her şey</li>
                <li>Sitenize Entegre Akıllı Sohbet Kutusu</li>
                <li>Tüm ürün kataloğunuzu ezberleme</li>
                <li>Akıllı niyet ve ihtiyaç analizi</li>
                <li className={styles.highlightFeature}>Satışa ve sepete doğrudan yönlendirme</li>
              </ul>
              <button className="btn btn-primary" onClick={openDemo}>Hemen Başla</button>
            </div>

            {/* Pro */}
            <div className={styles.pricingCard}>
              <h3 className={styles.tierName}>Nora Pro</h3>
              <div className={styles.tierSlogan}>Satış ve Operasyon Merkeziniz</div>
              <p className={styles.tierDesc}>Canlı stok gören, CRM'e veri işleyen ve çapraz satış (cross-sell) yapan gelişmiş model.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: $1,549</div>
                <div className={styles.monthlyFee}>$699 <span>/ Ay</span></div>
                <div style={{ fontSize: "0.85rem", color: "#10b981", marginTop: "0.25rem", fontWeight: "600" }}>
                  (İlk 3 ay %20 indirimle $559 / Ay)
                </div>
              </div>
              <ul className={styles.featuresList}>
                <li>Connect paketindeki her şey</li>
                <li>Çok Kanallı (Omnichannel) İletişim</li>
                <li>Müşteriye göre duygu ve üslup adaptasyonu</li>
                <li>Canlı Stok ve Fiyat Kontrolü</li>
                <li>CRM Entegrasyonu ve Lead Kaydı</li>
                <li className={styles.highlightFeature}>AI Sesli Santral (Telefonlara Sesli Yanıt)</li>
                <li className={styles.highlightFeature}>Tüm Yabancı Dillerde Yazılı ve Sesli İletişim</li>
                <li className={styles.highlightFeature}>Dinamik Çapraz Satış ve İskonto Yönetimi</li>
              </ul>
              <button className="btn btn-outline" onClick={openDemo}>Bilgi Al</button>
            </div>

            {/* Enterprise */}
            <div className={styles.pricingCard}>
              <h3 className={styles.tierName}>Nora Enterprise</h3>
              <div className={styles.tierSlogan}>Özel Kurumsal AI Altyapısı</div>
              <p className={styles.tierDesc}>Çok markalı yapılar, B2B ağları ve karmaşık operasyonlar için sıfır gecikmeli sesli iletişim sunan terzi usulü altyapı.</p>
              <div className={styles.priceBlock}>
                <div className={styles.setupFee}>Kurulum: Bizi Arayın</div>
                <div className={styles.monthlyFee}>Özel <span>/ Ay</span></div>
              </div>
              <ul className={styles.featuresList}>
                <li>Departman bazlı karakter değişimi</li>
                <li>B2B/B2C ayrımı ve özel fiyat sunma</li>
                <li>KVKK uyumlu izole sunucu (On-Premise)</li>
                <li>Çoklu marka (Multi-brand) yönetimi</li>
                <li>Özel ERP/API entegrasyonları ve SLA</li>
              </ul>
              <button className="btn btn-outline" onClick={openDemo}>Proje Görüşmesi</button>
            </div>
          </div>

          <div style={{ marginTop: "3rem", padding: "1.5rem", background: "rgba(59, 130, 246, 0.1)", borderRadius: "8px", borderLeft: "4px solid var(--brand-accent)" }}>
            <h4 style={{ color: "var(--brand-blue)", marginBottom: "0.5rem" }}>Önemli Not: 3. Taraf Servis Ücretleri</h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.5", marginBottom: "1rem" }}>
              Yukarıdaki fiyatlara üçüncü taraf servis (WhatsApp Business API / Meta mesajlaşma ücretleri ve OpenAI vb. yapay zeka tüketim maliyetleri) dahil değildir. Müşterinin tüketimine (mesaj hacmine) bağlı olarak değişen bu operasyonel maliyetler doğrudan şirketlere yansıtılır. Aylık ortalama <strong>3.000 görüşme</strong> (günde 100 kişi) üzerinden hesaplanan tahmini aylık API tüketim maliyetleri şöyledir:
            </p>
            <ul style={{ fontSize: "0.9rem", color: "var(--text-dark)", marginBottom: "1rem", paddingLeft: "1.5rem", lineHeight: "1.6" }}>
              <li><strong>Nora Lite:</strong> ~$20 USD</li>
              <li><strong>Nora Connect:</strong> ~$45 USD</li>
              <li><strong>Nora Pro:</strong> ~$75 USD*</li>
              <li><strong>Nora Enterprise:</strong> Projeye özel hesaplanır</li>
            </ul>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic", lineHeight: "1.4" }}>
              * Nora Pro ve Enterprise paketlerinde bulunan "Sesli Santral (Telefonlara Sesli Yanıt)" özelliği aktif edildiğinde, sesi metne ve metni sese çevirme (STT/TTS) işlemlerinden dolayı telefon görüşmesi başına ek API maliyetleri (dakika bazlı) doğacaktır.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
