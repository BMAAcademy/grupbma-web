import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <h3 className="text-gradient">Grup BMA</h3>
          <p>Yapay zeka destekli performans, analiz ve danışmanlık çözümleriyle kurumların potansiyelini ortaya çıkarıyoruz.</p>
        </div>
        
        <div className={styles.column}>
          <h4>Hızlı Bağlantılar</h4>
          <Link href="/">Ana Sayfa</Link>
          <Link href="/urunler">Çözümlerimiz</Link>
          <Link href="/akademi">BMA Akademi</Link>
          <Link href="/portal">Portal Girişi</Link>
        </div>

        <div className={styles.column}>
          <h4>İletişim</h4>
          <p>📍 Feyzullah Mh. Dumlupınar Cd no 7/13<br/>Maltepe / İstanbul</p>
          <p>📞 +90 546 852 07 01</p>
          <p>✉️ info@grupbma.com.tr</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Grup BMA. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
