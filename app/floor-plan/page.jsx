import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";

export const metadata = {
  title: {
    default:
      "Sobha Hennur Floor Plan | Old Madras Main Road | Pre Launch Offer",
    template: "%s | Sobha Hennur Floor Plan",
  },

  description:
    "Explore the detailed floor plans of Sobha Hennur located at Hennur Main Road, North Bangalore. View well-designed 2 BHK, 3 BHK and 4 BHK apartment layouts with spacious rooms, modern architecture, and efficient living spaces.",

  keywords: [
    "Sobha Hennur floor plan",
    "Sobha Hennur Bangalore floor plan",
    "Sobha Hennur Budigere Cross floor plan",
    "Sobha Hennur apartment layout",
    "Sobha Hennur unit plan",
    "Sobha Hennur 2 BHK floor plan",
    "Sobha Hennur 3 BHK floor plan",
    "Sobha Hennur 4 BHK floor plan",
    "Sobha Hennur flat layout",
    "Sobha Hennur apartment design",
    "Budigere Cross apartment floor plan",
    "apartments floor plan Bangalore",
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/floor-plan",
  },

  openGraph: {
    title:
      "Sobha Hennur Floor Plan | 2, 3 & 4 BHK Apartment Layouts",
    description:
      "View the spacious floor plans and apartment layouts of Sobha Hennur Bangalore featuring modern architecture and smart living spaces.",
    url: "https://www.sobhahennur.co/floor-plan",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/floor-plan-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sobha Hennur Floor Plan Layout",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Hennur Floor Plan | 2, 3 & 4 BHK Apartment Layout",
    description:
      "Discover spacious and modern floor plans at Sobha Hennur Bangalore. View detailed apartment layouts for 2 BHK, 3 BHK and 4 BHK homes.",
    images: [
      "https://www.sobhahennur.co/images/floor-plan-banner.jpeg",
    ],
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
            item: "https://www.sobhahennur.co/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Floor Plan",
            item: "https://www.sobhahennur.co/floor-plan",
          },
        ],
      },

      {
        "@type": "Apartment",
        name: "Sobha Hennur Floor Plan",
        description:
          "Detailed floor plans of Sobha Hennur apartments located in Budigere Cross Bangalore including 2 BHK, 3 BHK and 4 BHK layouts.",
        url: "https://www.sobhahennur.co/floor-plan",
        image:
          "https://www.sobhahennur.co/images/floor-plan-banner.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Hennur Main Road, North Bangalore",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },

        numberOfRooms: "2,3,4",
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Spacious Living Rooms",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Modern Kitchen Layout",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Balcony Design",
            value: true,
          },
        ],
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What apartment types are available in Sobha Hennur floor plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sobha Hennur offers 2 BHK, 3 BHK and 4 BHK apartment floor plans designed for spacious and modern living.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Sobha Hennur located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sobha Hennur is located on Old Madras Main Road at Budigere Cross in East Bangalore.",
            },
          },
          {
            "@type": "Question",
            name: "Are the floor plans of Sobha Hennur spacious?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the floor plans are designed with spacious living areas, modern kitchens, balconies and efficient layouts for comfortable living.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FloorPlanPage />
      <BlogSection/>
    </>
  );
}