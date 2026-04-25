import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Franca. — Agenzia di Marketing",
  description: "Trasformiamo aziende in brand di cui innamorarsi. Strategia, creatività, performance. Non facciamo compitini — costruiamo Brand. Milano, Italia.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
