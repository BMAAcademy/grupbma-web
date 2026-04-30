import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import DemoModal from "@/components/DemoModal";
import NewsletterPopup from "@/components/NewsletterPopup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Grup BMA | Yapay Zeka ve Kurumsal Performans",
  description: "BMA Hibrit Analiz Sistemi ve Yapay Zeka (AI Coach, Executive Assistant) çözümleri ile kurumsal performansınızı artırın.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", paddingTop: "80px" }}>
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <StickyWhatsApp />
        <DemoModal />
        <NewsletterPopup />
      </body>
    </html>
  );
}
