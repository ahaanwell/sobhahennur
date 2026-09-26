import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";

export const metadata = {
  title: {
    default:
      "Sobha Hennur Price | Old Madras Main Road | Pre Launch Offer",
    template: "%s | Sobha Hennur Price",
  },

  description:
    "Discover the latest Sobha Hennur price on Old Madras Main Road with exclusive pre-launch offers. Explore premium homes, floor plans, and early-bird deals in East Bangalore.",

  keywords: [
    "Sobha Hennur price",
    "Sobha Hennur Bangalore price",
    "Sobha Hennur apartment price",
    "Sobha Hennur Budigere Cross price",
    "Sobha Hennur price list",
    "Sobha Hennur 2 BHK price",
    "Sobha Hennur 3 BHK price",
    "Sobha Hennur 4 BHK price",
    "Sobha Hennur cost",
    "Sobha Hennur payment plan",
    "apartments price Budigere Cross",
    "luxury apartment price Bangalore"
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/price",
  },

  openGraph: {
    title:
      "Sobha Hennur Price | 2, 3 & 4 BHK Apartment Price List Bangalore",
    description:
      "Explore the latest price list of Sobha Hennur apartments in Budigere Cross Bangalore including configuration wise pricing and payment plans.",
    url: "https://www.sobhahennur.co/price",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/sattvaaangane.webp",
        width: 1200,
        height: 630,
        alt: "Sobha Hennur Apartment Price List",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Hennur Price | Apartment Price List Budigere Cross",
    description:
      "View the latest price list of Sobha Hennur Bangalore including 2, 3 and 4 BHK apartment pricing and payment plans.",
    images: ["https://www.sobhahennur.co/images/sattvaaangane.webp"],
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
        "@type": "ApartmentComplex",
        name: "Sobha Hennur",
        description:
          "Sobha Hennur is a premium residential apartment project located at Budigere Cross, Old Madras Main Road Bangalore offering luxury 2, 3 and 4 BHK apartments with modern amenities.",
        url: "https://www.sobhahennur.co/price",
        image: "https://www.sobhahennur.co/images/sattvaaangane.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Hennur Main Road, North Bangalore",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        },

        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "On Request",
          availability: "https://schema.org/PreOrder",
          url: "https://www.sobhahennur.co/price"
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the starting price of Sobha Hennur apartments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The starting price of Sobha Hennur apartments depends on the configuration such as 2 BHK, 3 BHK and 4 BHK units. For the latest price list and offers you can request the updated pricing details."
            }
          },
          {
            "@type": "Question",
            name: "Where is Sobha Hennur located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sobha Hennur is located at Budigere Cross on Old Madras Main Road in East Bangalore."
            }
          },
          {
            "@type": "Question",
            name: "Does Sobha Hennur offer payment plans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Sobha Hennur offers flexible payment plans for home buyers including construction linked plans and bank loan options."
            }
          }
        ]
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