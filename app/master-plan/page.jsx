import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";

export const metadata = {
  title: {
    default:
      "Sobha Hennur Master Plan | Township Layout & Project Site Plan Budigere Cross",
    template: "%s | Sobha Hennur Master Plan",
  },

  description:
    "Explore the master plan of Sobha Hennur located at Hennur Main Road, North Bangalore. Discover the well-planned township layout with residential towers, landscaped gardens, modern amenities, and open green spaces.",

  keywords: [
    "Sobha Hennur master plan",
    "Sobha Hennur Bangalore master plan",
    "Sobha Hennur Budigere Cross master plan",
    "Sobha Hennur township layout",
    "Sobha Hennur site plan",
    "Sobha Hennur project layout",
    "Sobha Hennur apartment township plan",
    "Budigere Cross apartment master plan",
    "Sobha Hennur tower layout",
    "Sobha Hennur residential layout Bangalore"
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/master-plan",
  },

  openGraph: {
    title:
      "Sobha Hennur Master Plan | Township Layout & Project Site Plan",
    description:
      "View the detailed master layout of Sobha Hennur Bangalore featuring residential towers, landscaped gardens, modern amenities, and open green spaces.",
    url: "https://www.sobhahennur.co/master-plan",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/master-plan-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha Hennur Master Plan Layout",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Hennur Master Plan | Township Layout Budigere Cross",
    description:
      "Discover the master plan layout of Sobha Hennur Bangalore including tower placement, amenities, green areas and project infrastructure.",
    images: [
      "https://www.sobhahennur.co/images/master-plan-banner.jpeg",
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
            name: "Master Plan",
            item: "https://www.sobhahennur.co/master-plan",
          },
        ],
      },

      {
        "@type": "ApartmentComplex",
        name: "Sobha Hennur Master Plan",
        description:
          "Master plan of Sobha Hennur residential project in Budigere Cross Bangalore featuring 4 towers, landscaped gardens, modern amenities and planned open spaces.",
        url: "https://www.sobhahennur.co/master-plan",
        image:
          "https://www.sobhahennur.co/images/master-plan-banner.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Hennur Main Road, North Bangalore",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        },

        numberOfAccommodationUnits: "600+",

        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Landscaped Gardens",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Clubhouse",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Swimming Pool",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Children Play Area",
            value: true
          }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does the Sobha Hennur master plan include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The master plan of Sobha Hennur includes residential towers, landscaped gardens, modern amenities, open green spaces and internal roads designed for comfortable living."
            }
          },
          {
            "@type": "Question",
            name: "How many towers are included in Sobha Hennur master plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The master plan of Sobha Hennur includes 4 residential towers with G+35 floors."
            }
          },
          {
            "@type": "Question",
            name: "Where is Sobha Hennur located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sobha Hennur is located on Old Madras Main Road at Budigere Cross in East Bangalore."
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
      <MasterPlanPage />
      <BlogSection/>
    </>
  );
}