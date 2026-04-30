"use client";
import styles from "./akademi.module.css";

export default function Akademi() {
  const openDemo = () => {
    window.dispatchEvent(new Event('openDemoModal'));
  };

  const categories = [
    {
      title: "1. Satış Becerileri",
      icon: "🧠",
      trainings: [
        { name: "Satış Teknikleri (Modern & Danışmanlık Satışı)", desc: "Geleneksel ikna yöntemlerinden uzaklaşarak müşteriye değer katan, çözüm odaklı B2B ve B2C satış stratejileri." },
        { name: "İkna ve Müzakere Teknikleri", desc: "Psikolojik tetikleyiciler ve rasyonel argümanlarla masadan kazan-kazan (win-win) sonucuyla kalkma sanatı." },
        { name: "Müşteri İhtiyaç Analizi", desc: "Müşterinin gerçek 'acısını' (pain point) tespit etmek için güçlü soru sorma ve teşhis koyma becerileri." }
      ]
    },
    {
      title: "2. İletişim Becerileri",
      icon: "💬",
      trainings: [
        { name: "Etkili İletişim Teknikleri", desc: "Beden dili, ses tonu ve kelime seçiminin gücünü kullanarak mesajı en net ve ikna edici şekilde iletme yolları." },
        { name: "Aktif Dinleme", desc: "Karşı tarafı anlamak, empati kurmak ve iletişim kazalarını önlemek için derinlemesine dinleme pratikleri." },
        { name: "Zor İnsanlarla İletişim", desc: "Agresif, pasif-agresif veya dirençli profillerle iletişimi yönetme ve profesyonel sınırlar koyma teknikleri." }
      ]
    },
    {
      title: "3. Çatışma ve Geri Bildirim",
      icon: "⚖️",
      trainings: [
        { name: "Çatışma Yönetimi", desc: "Kriz anlarını fırsata çevirme, ofis içi veya müşteri kaynaklı uyuşmazlıkları yapıcı şekilde çözme stratejileri." },
        { name: "Etkili Geri Bildirim Verme & Alma", desc: "Performansı düşürmeden motive edici geri bildirim (feedback) verme ve eleştirileri kişiselleştirmeden kabul etme yöntemleri." },
        { name: "İş Yerinde İletişim Dili ve Tonlama", desc: "Kurum kültürüne uygun, saygılı, net ve yanlış anlaşılmalara mahal vermeyen yazılı/sözlü kurumsal dil inşası." }
      ]
    },
    {
      title: "4. Stres ve Duygu Yönetimi",
      icon: "🧘",
      trainings: [
        { name: "Stres Yönetimi", desc: "Baskı altında sakin kalabilme, stres faktörlerini (stressor) tespit etme ve sağlıklı başa çıkma mekanizmaları geliştirme." },
        { name: "Duygusal Dayanıklılık (Resilience)", desc: "Başarısızlık veya ani krizler sonrası hızlı toparlanma ve mental esneklik kazanma becerisi." },
        { name: "Duygu Kontrolü ve Regülasyon", desc: "Tepkisel (reaktif) olmak yerine proaktif davranarak, yoğun duyguları profesyonel çerçevede yönetebilme." }
      ]
    },
    {
      title: "5. Zaman ve Disiplin Yönetimi",
      icon: "⏱️",
      trainings: [
        { name: "Zaman Yönetimi", desc: "Zaman tuzaklarını fark etme, Pomodoro ve Eisenhower matrisi gibi tekniklerle günlük verimliliği artırma." },
        { name: "Önceliklendirme Teknikleri", desc: "Acil ve önemli ayrımını doğru yaparak enerjiyi en yüksek ROI (yatırım getirisi) sağlayacak görevlere odaklama." },
        { name: "Disiplin ve Takip Becerisi", desc: "Başlanan işi bitirme, takip (follow-up) kültürünü yerleştirme ve erteleme (procrastination) huyunu yenme." }
      ]
    },
    {
      title: "6. Liderlik ve Yönetim",
      icon: "👥",
      trainings: [
        { name: "Liderlik Becerileri", desc: "Sadece yönetmek değil; ilham vermek, vizyon belirlemek ve ekipleri ortak hedefe kilitleyen modern liderlik yaklaşımları." },
        { name: "Takım Yönetimi", desc: "Farklı karakter ve yetkinlikteki bireyleri (BMA Modeli profillerini) harmoni içinde yüksek performanslı bir takıma dönüştürme." },
        { name: "Delegasyon (Yetki Devri)", desc: "Mikro yönetimden (micromanagement) uzaklaşarak güven inşa etme ve doğru işi doğru kişiye delege etme sanatı." }
      ]
    },
    {
      title: "7. Performans ve Hedef Yönetimi",
      icon: "🎯",
      trainings: [
        { name: "KPI ve Performans Yönetimi", desc: "Ölçülebilir başarı kriterleri belirleme, performansı verilere dayanarak objektif değerlendirme teknikleri." },
        { name: "Hedef Belirleme ve Takip", desc: "SMART (Spesifik, Ölçülebilir, Ulaşılabilir, Gerçekçi, Zaman Sınırlı) hedefler koyma ve ilerlemeyi periyodik olarak ölçme." },
        { name: "Sonuç Odaklı Çalışma", desc: "Sürece takılmadan büyük resmi görme ve günün sonunda katma değer (value) üretmeye odaklanan zihniyet yapısı." }
      ]
    },
    {
      title: "8. Kişisel Gelişim ve Zihinsel Performans",
      icon: "🚀",
      trainings: [
        { name: "Öz Farkındalık ve Kişilik Analizi", desc: "BMA Hibrit Analiz Sistemi sonuçlarını okuma, kendi güçlü ve zayıf yönlerini bilerek kariyer yolculuğunu şekillendirme." },
        { name: "Karar Verme ve Problem Çözme", desc: "Bilişsel önyargılardan (cognitive biases) arınmış, analitik, hızlı ve doğru karar alma çerçeveleri." },
        { name: "Odaklanma ve Mental Performans", desc: "Dikkat dağıtıcılardan kurtulma, 'Deep Work' (Derin Çalışma) haline geçiş ve zihinsel berraklığı koruma pratikleri." }
      ]
    }
  ];

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-gradient">BMA Akademi</h1>
          <p className={styles.intro}>
            Kurumsal gelişimi tesadüfe bırakmayın. BMA Hibrit Analiz Sistemi ile desteklenen, 
            ihtiyaçlarınıza özel uyarlanmış (Tailor-Made) 8 grupta 24 premium eğitim programı ile 
            ekibinizin gerçek potansiyelini ortaya çıkarın.
          </p>
          <button className="btn btn-primary" style={{ marginTop: "1.5rem" }} onClick={openDemo}>
            Eğitim Talebi Oluştur
          </button>
        </div>
      </section>

      <section className={styles.akademiGrid}>
        <div className="container">
          
          {/* BMA Hibrit Analiz Metodolojisi Bölümü (Ürünlerden taşındı) */}
          <div style={{ marginBottom: "4rem", background: "var(--card-bg, #ffffff)", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid var(--border-color, #e2e8f0)" }}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 300px" }}>
                <img src="/images/bma_hibrit_analiz.png" alt="BMA Hibrit Analiz Sistemi" style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }} />
              </div>
              <div style={{ flex: "2 1 400px" }}>
                <h2 style={{ fontSize: "1.8rem", color: "var(--brand-blue, #0b1f52)", marginBottom: "1rem" }}>BMA Hibrit Analiz Sistemi (Eğitim Metodolojimiz)</h2>
                <p style={{ color: "var(--text-muted, #475569)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                  Eğitim ve gelişim süreçlerinizi varsayımlar yerine verilerle güçlendirin. 8 farklı bilimsel ölçüm modelini (DISC, Big Five, HEXACO, RIASEC, EQ, Cognitive, Dark Triad, SJT) tek bir potada eriten sistemimiz, eğitim ihtiyaç analizinde %99'a varan isabet sağlar. BMA Akademi'deki tüm eğitimler, bu bilimsel test sonuçlarına dayanarak ekibinizin eksiklerine göre kurumunuza özel (tailor-made) tasarlanır.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
                  <li style={{ fontSize: "0.9rem", color: "var(--text-dark, #0f172a)" }}>✅ 8 Farklı Bilimsel Disiplin</li>
                  <li style={{ fontSize: "0.9rem", color: "var(--text-dark, #0f172a)" }}>✅ Detaylı Kişilik Raporlaması</li>
                  <li style={{ fontSize: "0.9rem", color: "var(--text-dark, #0f172a)" }}>✅ Veri Odaklı Eğitim İhtiyaç Analizi</li>
                  <li style={{ fontSize: "0.9rem", color: "var(--text-dark, #0f172a)" }}>✅ Öncesi - Sonrası Performans Kıyaslaması</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid">
            {categories.map((cat, i) => (
              <div key={i} className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{cat.icon}</span>
                  <h2 className={styles.categoryTitle}>{cat.title}</h2>
                </div>
                <ul className={styles.trainingList}>
                  {cat.trainings.map((t, idx) => (
                    <li key={idx} className={styles.trainingItem}>
                      <div className={styles.trainingName}>
                        {t.name}
                      </div>
                      <div className={styles.trainingDesc}>{t.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
