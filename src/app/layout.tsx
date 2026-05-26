import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sora",
});

const ibmPlexMono = IBM_Plex_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
});

const description =
  "Luminar Apps builds interactive software, automation tools, and smart visual systems for brands, businesses, and public spaces.";

export const metadata: Metadata = {
  metadataBase: new URL("https://luminarapps.com"),
  title: "Luminar Apps | Digital systems for modern experiences",
  description,
  applicationName: "Luminar Apps",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luminar Apps | Digital systems for modern experiences",
    description,
    locale: "en_US",
    siteName: "Luminar Apps",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminar Apps | Digital systems for modern experiences",
    description,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${ibmPlexMono.variable}`}>
      <body className={`${sora.className} min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
