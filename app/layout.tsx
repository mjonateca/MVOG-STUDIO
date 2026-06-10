import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "MVOG · Boutique Development Studio",
  description:
    "Una villa al año. Ninguna repetida. MVOG desarrolla villas de autor en República Dominicana: proyectos residenciales limitados, diseñados con intención.",
  keywords: [
    "MVOG",
    "villas de autor",
    "República Dominicana",
    "Vista Cana",
    "boutique development",
    "real estate",
    "Casa 174",
  ],
  metadataBase: new URL("https://mvog-studio.vercel.app"),
  openGraph: {
    title: "MVOG · Boutique Development Studio",
    description:
      "Una villa al año. Ninguna repetida. Villas de autor en el Caribe, desarrolladas con criterio.",
    type: "website",
    locale: "es_DO",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "MVOG · Boutique Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVOG · Boutique Development Studio",
    description:
      "Una villa al año. Ninguna repetida. Villas de autor en el Caribe.",
    images: ["/og.jpg"],
  },
  icons: {
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
