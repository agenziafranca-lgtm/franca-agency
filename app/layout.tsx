import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

const BASE_URL = "https://agenziafranca.it"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Franca. — Agenzia di Marketing",
    template: "%s — Franca.",
  },
  description:
    "Trasformiamo aziende in brand di cui innamorarsi. Non facciamo compitini — costruiamo Brand. Scopri come lavoriamo.",
  keywords: [
    "agenzia marketing",
    "brand strategy",
    "social media management",
    "performance marketing",
    "identità di brand",
    "sito web",
    "content marketing",
    "ADV",
  ],
  authors: [{ name: "Franca." }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: BASE_URL,
    siteName: "Franca.",
    title: "Franca. — Agenzia di Marketing",
    description:
      "Trasformiamo aziende in brand di cui innamorarsi. Non facciamo compitini — costruiamo Brand.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Franca. — Agenzia di Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franca. — Agenzia di Marketing",
    description: "Trasformiamo aziende in brand di cui innamorarsi.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
