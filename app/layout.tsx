import { CrispChat } from "@/components/chat/crisp-chat";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SocialProofToast } from "@/components/notifications/social-proof-toast";
import { ExitIntentPopup } from "@/components/popups/exit-intent-popup";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://morpheex.com"
  ),
  title: {
    default: "Morpheex | Transform Legacy Systems into Future Advantages",
    template: "%s | Morpheex",
  },
  description:
    "Morpheex helps enterprises modernize legacy systems with high-performance software and serverless cloud solutions. Official AWS Partner specializing in cloud migration and technical debt elimination.",
  keywords: [
    "cloud migration",
    "AWS partner",
    "serverless solutions",
    "legacy system modernization",
    "technical debt",
    "cloud architecture",
    "enterprise software",
    "cloud audit",
    "AWS consulting",
    "system modernization",
  ],
  authors: [{ name: "Morpheex" }],
  creator: "Morpheex",
  publisher: "Morpheex",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Morpheex",
    title: "Morpheex | Transform Legacy Systems into Future Advantages",
    description:
      "Enterprise cloud modernization and serverless solutions. Official AWS Partner helping businesses eliminate technical debt.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Morpheex - Cloud Modernization Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morpheex | Transform Legacy Systems into Future Advantages",
    description:
      "Enterprise cloud modernization and serverless solutions. Official AWS Partner helping businesses eliminate technical debt.",
    images: ["/og-image.png"],
    creator: "@morpheex",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
          <Footer />

          {/* Engagement Features */}
          <CrispChat />
          <ExitIntentPopup />
          <SocialProofToast />

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
