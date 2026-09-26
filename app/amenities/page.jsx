import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";

export const metadata = {
  title: {
    default:
      "Sobha Hennur Amenities | Clubhouse, Swimming Pool & Lifestyle Facilities",
    template: "%s | Sobha Hennur Amenities",
  },

  description:
    "Explore the premium amenities at Sobha Hennur in Budigere Cross, Old Madras Road Bangalore including clubhouse, swimming pool, gym, landscaped gardens, sports courts, kids play area and modern lifestyle facilities.",

  keywords: [
    "Sobha Hennur amenities",
    "Sobha Hennur Bangalore amenities",
    "Sobha Hennur clubhouse",
    "Sobha Hennur lifestyle amenities",
    "Sobha Hennur sports facilities",
    "Sobha Hennur swimming pool",
    "Sobha Hennur gym",
    "Sobha Hennur kids play area",
    "Budigere Cross apartment amenities",
    "luxury apartment amenities Bangalore"
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/amenities",
  },

  openGraph: {
    title:
      "Sobha Hennur Amenities | Premium Lifestyle Facilities in Bangalore",
    description:
      "Discover modern lifestyle amenities at Sobha Hennur including clubhouse, fitness center, swimming pool, landscaped gardens and sports courts.",
    url: "https://www.sobhahennur.co/amenities",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/amenities.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha Hennur Amenities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Hennur Amenities | Luxury Lifestyle Facilities",
    description:
      "Explore modern amenities at Sobha Hennur including clubhouse, gym, sports courts and landscaped gardens.",
    images: [
      "https://www.sobhahennur.co/images/amenities.jpeg"
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
        "@type": "ApartmentComplex",
        name: "Sobha Hennur",
        description:
          "Sobha Hennur offers modern lifestyle amenities including clubhouse, swimming pool, landscaped gardens, fitness center, sports courts and kids play area in East Bangalore.",
        url: "https://www.sobhahennur.co/amenities",
        image: "https://www.sobhahennur.co/images/amenities.jpeg",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Hennur Main Road, North Bangalore",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560049",
          addressCountry: "IN"
        },

        amenityFeature: [
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
            name: "Gymnasium",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Jogging Track",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Children Play Area",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Basketball Court",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Badminton Court",
            value: true
          }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What amenities are available at Sobha Hennur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sobha Hennur offers modern amenities including a clubhouse, swimming pool, gymnasium, sports courts, landscaped gardens, jogging tracks and children's play areas."
            }
          },
          {
            "@type": "Question",
            name: "Does Sobha Hennur have a clubhouse?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Sobha Hennur features a modern clubhouse with indoor games, lounge areas, multipurpose halls and community spaces."
            }
          },
          {
            "@type": "Question",
            name: "Are there sports facilities at Sobha Hennur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the project includes badminton courts, basketball courts, cricket practice areas, skating rink and other sports amenities."
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
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}