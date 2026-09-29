import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import BrochureWrapper from "@/components/BrochureWrapper";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default:
      "Sobha Hennur | Mega Township Bangalore | Pre Launch Offer- Updated 2026",
    template: "%s | Sobha Hennur Bangalore",
  },

  description:
    "Discover Sobha Hennur, a pre-launch residential township on Hennur Road, Bangalore, offering premium apartments, modern amenities, and convenient connectivity.",

  keywords: [
    "Sobha Hennur",
    "Sobha Hennur Bangalore",
    "Sobha Hennur Road",
    "Sobha Hennur price",
    "Sobha Hennur brochure",
    "Sobha Hennur floor plan",
    "Sobha Hennur master plan",
    "Sobha Hennur pre launch",
    "Sobha new launch Hennur Road",
    "apartments on Hennur Road",
    "luxury apartments North Bangalore",
    "Sobha Limited projects Bangalore",
    "3 BHK apartments Hennur Road",
    "4 BHK apartments Hennur Road",
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/",
  },

  openGraph: {
    title:
      "Sobha Hennur | Premium Apartments on Hennur Road, Bangalore",
    description:
      "Pre-launch SOBHA project on Hennur Road: 45 acres, 2, 3, 3.5 & 4 BHK apartments from 1,500 to 2,230 sq.ft., starting ₹2.40 Cr onwards. Possession expected by 2030.",
    url: "https://www.sobhahennur.co/",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/banners/sobha-hennur.webp",
        alt: "Sobha Hennur premium apartments on Hennur Road, Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Hennur | Premium Apartments on Hennur Road, Bangalore",
    description:
      "2, 3, 3.5 & 4 BHK apartments by SOBHA Limited on Hennur Road, Bangalore. Pre-launch, from ₹2.40 Cr onwards.",
    images: [
      "https://www.sobhahennur.co/images/banners/sobha-hennur.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  authors: [
    {
      name: "Sobha Hennur",
      url: "https://www.sobhahennur.co/",
    },
  ],

  creator: "Sobha Hennur",
  publisher: "Sobha Hennur",

  category: "Real Estate",

  verification: {
    google: "wGOe7eM9S3sTcvkAIgKYcnLLqYWikwMUPS7Ws_SPeFs",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Sobha Hennur",
        url: "https://www.sobhahennur.co/",
        logo: "https://www.sobhahennur.co/images/logo.webp",
      },
      {
        "@type": "WebSite",
        name: "Sobha Hennur",
        url: "https://www.sobhahennur.co/",
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        <BrochureWrapper/>
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}