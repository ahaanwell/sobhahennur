import BlogSection from "@/components/BlogsSection";
import BangalorePage from "./BangalorePage";

export const metadata = {
  title: {
    default:
      "Sobha Hennur Bangalore | Top 5 Sobha Projects in Bangalore",
    template: "%s | Sobha Hennur Bangalore",
  },

  description:
    "Explore Bangalore's residential market zone by zone, see where Hennur fits on the city map, and compare the top 5 Sobha projects in Bangalore including Sobha Liora, Sobha One World, Sobha Neopolis, Sobha Queens Towers and Sobha Madison Heights.",

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
        mainEntity: [
          {
            "@type": "Question",
            name: "Which part of Bangalore is Sobha Hennur in?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sobha Hennur is on Hennur Road in North-East Bangalore, close to Kalyan Nagar, HRBR Layout and Thanisandra, with access towards Manyata Tech Park, the Outer Ring Road and the airport side of the city."
            }
          },
          {
            "@type": "Question",
            name: "What are some well-known Sobha projects in Bangalore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Notable SOBHA developments in Bangalore include Sobha Liora in Whitefield, Sobha One World off Hoskote, Sobha Neopolis on Panathur Road off Marathahalli-ORR, Sobha Queens Towers and Sobha Madison Heights in the Attibele-Hosur Road belt, and Sobha Hennur on Hennur Road."
            }
          },
          {
            "@type": "Question",
            name: "How is Sobha Hennur different from other Sobha projects in Bangalore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sobha Hennur is at the pre-launch stage with RERA approval under process. It is planned on 45 acres with about 17 acres in Phase 1, offering 2, 3, 3.5 and 4 BHK homes from 1,500 to 2,230 sq.ft., priced from ₹2.40 Cr onwards with possession expected by 2030."
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
      <BangalorePage />
      <BlogSection/>
    </>
  );
}
