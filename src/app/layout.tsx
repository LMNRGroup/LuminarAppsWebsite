import type { Metadata, Viewport } from "next";
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

const title = "Luminar Apps | Digital systems for modern experiences";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0d11",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://luminarapps.com"),
  title,
  description,
  applicationName: "Luminar Apps",
  category: "technology",
  keywords: [
    "Luminar Apps",
    "interactive software",
    "event technology",
    "automation systems",
    "digital experiences",
    "visual technology",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
    shortcut: ["/icon"],
  },
  openGraph: {
    title,
    description,
    images: [
      {
        alt: "Luminar Apps preview",
        height: 630,
        url: "/opengraph-image",
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: "Luminar Apps",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
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
