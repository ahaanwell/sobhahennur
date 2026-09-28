import BlogSection from "@/components/BlogsSection";
import FloorPlanPage, { floorPlanFaqs } from "./FloorPlanPage";

export const metadata = {
  title: {
    absolute: "Sobha Hennur Floor Plan, Sizes & Configurations",
  },

  description:
    "Explore the Sobha Hennur floor plan, planned 2, 3, 3.5 and 4 BHK apartments, size range, project details and key points to review before buying.",

  keywords: [
    "Sobha Hennur floor plan",
    "Sobha Hennur floor plans",
    "Sobha Hennur apartment sizes",
    "Sobha Hennur configurations",
    "Sobha Hennur 2 BHK floor plan",
    "Sobha Hennur 3 BHK floor plan",
    "Sobha Hennur 3.5 BHK floor plan",
    "Sobha Hennur 4 BHK floor plan",
    "Sobha Hennur unit plan",
    "Hennur Road apartment floor plan",
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/floor-plan",
  },

  openGraph: {
    title: "Sobha Hennur Floor Plan, Sizes & Configurations",
    description:
      "Explore the Sobha Hennur floor plan, planned 2, 3, 3.5 and 4 BHK apartments, size range, project details and key points to review before buying.",
    url: "https://www.sobhahennur.co/floor-plan",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/floor-plan.webp",
        alt: "Sobha Hennur floor plan for 2, 3, 3.5 and 4 BHK apartments",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha Hennur Floor Plan, Sizes & Configurations",
    description:
      "Explore the Sobha Hennur floor plan, planned 2, 3, 3.5 and 4 BHK apartments, size range, project details and key points to review before buying.",
    images: ["https://www.sobhahennur.co/images/floor-plan.webp"],
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
            name: "Floor Plan",
            item: "https://www.sobhahennur.co/floor-plan"
          }
        ]
      },

      {
        "@type": "WebPage",
        name: "Sobha Hennur Floor Plan, Sizes & Configurations",
        description:
          "Explore the Sobha Hennur floor plan, planned 2, 3, 3.5 and 4 BHK apartments, size range, project details and key points to review before buying.",
        url: "https://www.sobhahennur.co/floor-plan",
        inLanguage: "en-IN",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.sobhahennur.co/images/floor-plan.webp",
          caption: "Sobha Hennur floor plan"
        },
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
          "Sobha Hennur is a pre-launch premium residential project by SOBHA Limited on Hennur Road, Bangalore, offering 2, 3, 3.5 and 4 BHK apartments from 1,500 to 2,230 sq.ft.",
        url: "https://www.sobhahennur.co/floor-plan",
        image: "https://www.sobhahennur.co/images/floor-plan.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Hennur Road",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        },

        containsPlace: [
          { "@type": "Apartment", name: "2 BHK Apartment", numberOfRooms: 2, floorSize: { "@type": "QuantitativeValue", value: 1500, unitCode: "FTK" } },
          { "@type": "Apartment", name: "3 BHK Apartment", numberOfRooms: 3, floorSize: { "@type": "QuantitativeValue", minValue: 1750, maxValue: 1950, unitCode: "FTK" } },
          { "@type": "Apartment", name: "3.5 BHK Apartment", numberOfRooms: 3.5, floorSize: { "@type": "QuantitativeValue", minValue: 2000, maxValue: 2100, unitCode: "FTK" } },
          { "@type": "Apartment", name: "4 BHK Apartment", numberOfRooms: 4, floorSize: { "@type": "QuantitativeValue", value: 2230, unitCode: "FTK" } }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: floorPlanFaqs.map((faq) => ({
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
      <FloorPlanPage />
      <BlogSection/>
    </>
  );
}
