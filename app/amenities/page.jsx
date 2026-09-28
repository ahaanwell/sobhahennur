import BlogSection from "@/components/BlogsSection";
import AmenitiesPage, { amenitiesFaqs } from "./AmenitiesPage";

export const metadata = {
  title: {
    absolute: "Sobha Hennur Amenities & Project Facilities",
  },

  description:
    "Explore Sobha Hennur Amenities, project scale, Phase 1 details, apartment options and key checks for reviewing the official facilities plan.",

  keywords: [
    "Sobha Hennur amenities",
    "Sobha Hennur facilities",
    "Sobha Hennur project facilities",
    "Sobha Hennur amenities list",
    "Sobha Hennur Phase 1",
    "Sobha Hennur clubhouse",
    "Sobha Hennur master plan amenities",
    "Sobha Hennur Road apartments",
    "Hennur Road apartment amenities",
    "luxury apartment amenities Bangalore",
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/amenities",
  },

  openGraph: {
    title: "Sobha Hennur Amenities & Project Facilities",
    description:
      "Explore Sobha Hennur Amenities, project scale, Phase 1 details, apartment options and key checks for reviewing the official facilities plan.",
    url: "https://www.sobhahennur.co/amenities",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/amenities.webp",
        alt: "Sobha Hennur amenities and project facilities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha Hennur Amenities & Project Facilities",
    description:
      "Explore Sobha Hennur Amenities, project scale, Phase 1 details, apartment options and key checks for reviewing the official facilities plan.",
    images: ["https://www.sobhahennur.co/images/amenities.webp"],
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
            name: "Amenities",
            item: "https://www.sobhahennur.co/amenities"
          }
        ]
      },

      {
        "@type": "WebPage",
        name: "Sobha Hennur Amenities & Project Facilities",
        description:
          "Explore Sobha Hennur Amenities, project scale, Phase 1 details, apartment options and key checks for reviewing the official facilities plan.",
        url: "https://www.sobhahennur.co/amenities",
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
          "Sobha Hennur is a pre-launch premium residential project by SOBHA Limited on Hennur Road, Bangalore, planned across 45 acres with an approximately 17-acre Phase 1 and 2, 3, 3.5 and 4 BHK apartments from 1,500 to 2,230 sq.ft.",
        url: "https://www.sobhahennur.co/amenities",
        image: "https://www.sobhahennur.co/images/amenities.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Hennur Road",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: amenitiesFaqs.map((faq) => ({
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
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}
