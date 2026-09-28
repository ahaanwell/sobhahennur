import BlogSection from "@/components/BlogsSection";
import BangalorePage, { bangaloreFaqs } from "./BangalorePage";

export const metadata = {
  title: {
    absolute: "Top 5 Sobha Projects in Bangalore | Sobha Hennur",
  },

  description:
    "Compare the top 5 Sobha projects in Bangalore, including Sobha Liora, One World and Neopolis, and see where Sobha Hennur on Hennur Road fits in.",

  keywords: [
    "Sobha Hennur Bangalore",
    "Sobha projects in Bangalore",
    "top 5 Sobha projects Bangalore",
    "best Sobha projects in Bangalore",
    "Sobha new launch Bangalore",
    "Sobha North Bangalore projects",
    "Sobha apartments Bangalore",
    "SOBHA Limited Bangalore",
    "Hennur Road apartments Bangalore",
    "North East Bangalore real estate",
    "Sobha Liora Whitefield",
    "Sobha One World Hoskote",
    "Sobha Neopolis Panathur Road",
    "Sobha Queens Towers Attibele",
    "Sobha Madison Heights Electronic City"
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/bangalore",
  },

  openGraph: {
    title:
      "Sobha Hennur Bangalore | Top 5 Sobha Projects in Bangalore",
    description:
      "A zone-by-zone guide to Bangalore real estate and a comparison of five SOBHA developments across the city, with Sobha Hennur on Hennur Road.",
    url: "https://www.sobhahennur.co/bangalore",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/bangalore.webp",
        width: 1200,
        height: 630,
        alt: "Sobha Hennur Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Hennur Bangalore | Top 5 Sobha Projects",
    description:
      "Where Hennur fits in Bangalore and how Sobha Hennur compares with other SOBHA projects across the city.",
    images: ["https://www.sobhahennur.co/images/bangalore.webp"],
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

export default function page() {

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
            name: "Bangalore",
            item: "https://www.sobhahennur.co/bangalore"
          }
        ]
      },

      {
        "@type": "ItemList",
        name: "Top 5 Sobha Projects in Bangalore",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Sobha Liora – Whitefield, Immadihalli" },
          { "@type": "ListItem", position: 2, name: "Sobha One World – Off Hoskote, East Bangalore" },
          { "@type": "ListItem", position: 3, name: "Sobha Neopolis – Panathur Road, Off Marathahalli-ORR" },
          { "@type": "ListItem", position: 4, name: "Sobha Queens Towers – Attibele Industrial Area" },
          { "@type": "ListItem", position: 5, name: "Sobha Madison Heights – Electronic City, Main Hosur Road" }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: bangaloreFaqs.map((faq) => ({
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
      <BangalorePage />
      <BlogSection/>
    </>
  );
}
