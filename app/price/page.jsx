import BlogSection from "@/components/BlogsSection";
import PricePage, { priceFaqs } from "./PricePage";

export const metadata = {
  title: {
    absolute: "Sobha Hennur Price, Apartment Cost & Sizes",
  },

  description:
    "Check Sobha Hennur Price from ₹2.40 crore onwards, apartment configurations, size range, project status, RERA approval and expected possession details.",

  keywords: [
    "Sobha Hennur price",
    "Sobha Hennur price list",
    "Sobha Hennur apartment cost",
    "Sobha Hennur apartment sizes",
    "Sobha Hennur 2 BHK price",
    "Sobha Hennur 3 BHK price",
    "Sobha Hennur 3.5 BHK price",
    "Sobha Hennur 4 BHK price",
    "Sobha Hennur cost sheet",
    "Sobha Hennur Road price",
    "Sobha apartments price Bangalore",
    "Hennur Road apartment price",
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/price",
  },

  openGraph: {
    title: "Sobha Hennur Price, Apartment Cost & Sizes",
    description:
      "Check Sobha Hennur Price from ₹2.40 crore onwards, apartment configurations, size range, project status, RERA approval and expected possession details.",
    url: "https://www.sobhahennur.co/price",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/costing-details.webp",
        alt: "Sobha Hennur price and cost details",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha Hennur Price, Apartment Cost & Sizes",
    description:
      "Check Sobha Hennur Price from ₹2.40 crore onwards, apartment configurations, size range, project status, RERA approval and expected possession details.",
    images: ["https://www.sobhahennur.co/images/costing-details.webp"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Real Estate",
};

export default function Page() {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.sobhahennur.co/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Price",
            item: "https://www.sobhahennur.co/price"
          }
        ]
      },

      {
        "@type": "WebPage",
        name: "Sobha Hennur Price, Apartment Cost & Sizes",
        description:
          "Check Sobha Hennur Price from ₹2.40 crore onwards, apartment configurations, size range, project status, RERA approval and expected possession details.",
        url: "https://www.sobhahennur.co/price",
        inLanguage: "en-IN",
        isPartOf: {
          "@type": "WebSite",
          name: "Sobha Hennur",
          url: "https://www.sobhahennur.co/"
        }
      },

      {
        "@type": "ApartmentComplex",
        name: "Sobha Hennur",
        description:
          "Sobha Hennur is a pre-launch premium residential project by SOBHA Limited on Hennur Road, Bangalore, offering 2, 3, 3.5 and 4 BHK apartments from 1,500 to 2,230 sq.ft. with prices from ₹2.40 crore onwards.",
        url: "https://www.sobhahennur.co/price",
        image: "https://www.sobhahennur.co/images/costing-details.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Hennur Road",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        },

        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "24000000",
          highPrice: "39000000",
          offerCount: "4",
          availability: "https://schema.org/PreSale",
          url: "https://www.sobhahennur.co/price"
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: priceFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }

    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PricePage />
      <BlogSection/>
    </>
  );
}
