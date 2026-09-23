import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "K A CAPITAL (PVT) LTD | Building Value. Creating Opportunities.",
    template: "%s | K A CAPITAL (PVT) LTD",
  },
  description: "Trusted solutions in buying and selling, property development and resale, house renovation and improvement, and microfinance in Sri Lanka.",
  applicationName: "K A CAPITAL (PVT) LTD",
  keywords: ["K A Capital", "property development Sri Lanka", "property resale", "house renovation", "buying and selling", "microfinance"],
  openGraph: {
    title: "K A CAPITAL (PVT) LTD",
    description: "Building value and creating opportunities through property, renovation, buying and selling, and microfinance-related services.",
    type: "website",
    locale: "en_LK",
    siteName: "K A CAPITAL (PVT) LTD",
    images: [{ url: "/images/hero-property.png", width: 1536, height: 1024, alt: "K A CAPITAL property services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "K A CAPITAL (PVT) LTD",
    description: "Building Value. Creating Opportunities.",
    images: ["/images/hero-property.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#031c34",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><Header />{children}<Footer /></body></html>;
}
