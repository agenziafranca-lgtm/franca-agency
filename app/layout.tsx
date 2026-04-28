import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/CustomCursor"
import Preloader from "@/components/Preloader"
import { Analytics } from "@vercel/analytics/next"

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
    "Agenzia di marketing per aziende che vogliono distinguersi. Strategia, contenuti, siti web, ADV e gestione social — pensati su misura, non in serie.",
  keywords: [
    "agenzia di marketing",
    "agenzia marketing italia",
    "marketing strategy",
    "social media management",
    "performance marketing",
    "siti web e e-commerce",
    "brand identity",
    "content marketing",
    "ADV Google Meta",
    "SEO",
    "agenzia comunicazione",
    "strategia editoriale",
  ],
  authors: [{ name: "Franca." }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: BASE_URL,
    siteName: "Franca.",
    title: "Franca. — Agenzia di Marketing",
    description:
      "Agenzia di marketing per aziende che vogliono distinguersi. Strategia, contenuti, siti web, ADV e gestione social.",
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
    description: "Agenzia di marketing per aziende che vogliono distinguersi davvero.",
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
      <body className="antialiased">
        {/* Pre-hydration: nasconde il contenuto se il preloader deve apparire,
            evita il flash della pagina prima che React monti */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(!sessionStorage.getItem('franca-preloader-seen'))document.documentElement.classList.add('preloader-active')}catch(e){}})()`,
          }}
        />
        <Preloader />
        <CustomCursor />
        <div id="page-content">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
