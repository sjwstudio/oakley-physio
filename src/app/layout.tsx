import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oakley-physio.vercel.app"),
  title: {
    default: "Oakley Physio | North Manchester's No.1 Physiotherapy Practice",
    template: "%s | Oakley Physio",
  },
  description:
    "Welcome to Oakley Physio — North Manchester's No.1 physiotherapy practice in Prestwich, Manchester. Appointments within 24 hours, no GP referral needed.",
  keywords: [
    "physiotherapy",
    "Prestwich",
    "Manchester",
    "chartered physiotherapist",
    "musculo-skeletal",
    "pilates",
    "acupuncture",
    "womens health",
  ],
  openGraph: {
    title: "Oakley Physio | North Manchester's No.1 Physiotherapy Practice",
    description:
      "Expert chartered physiotherapy in Prestwich, Manchester. Appointments within 24 hours — no GP referral needed.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
