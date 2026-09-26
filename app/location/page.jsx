import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";

export const metadata = {
  title: {
    default:
      "Sobha Hennur Location | Old Madras Road Budigere Cross Bangalore Connectivity",
    template: "%s | Sobha Hennur Location",
  },

  description:
    "Discover the prime location of Sobha Hennur at Budigere Cross on Old Madras Main Road, East Bangalore. Enjoy excellent connectivity to Whitefield, KR Puram, ITPL, Kempegowda International Airport, schools, hospitals, and shopping malls.",

  keywords: [
    "Sobha Hennur location",
    "Sobha Hennur Budigere Cross location",
    "Sobha Hennur Old Madras Road",
    "Sobha Hennur Bangalore location",
    "Sobha Hennur connectivity",
    "apartments near Budigere Cross",
    "Budigere Cross residential projects",
    "Sobha Hennur Whitefield connectivity",
    "Sobha Hennur airport connectivity",
    "Sobha Hennur nearby IT parks"
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/location",
  },

  openGraph: {
    title:
      "Sobha Hennur Location | Budigere Cross Old Madras Road Bangalore",
    description:
      "Explore the strategic location of Sobha Hennur in East Bangalore with excellent connectivity to Whitefield, KR Puram, IT hubs, schools, hospitals and Kempegowda International Airport.",
    url: "https://www.sobhahennur.co/location",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/location-banner.png",
        width: 1200,
        height: 630,
        alt: "Sobha Hennur Location Map Budigere Cross",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Hennur Location | Budigere Cross Connectivity",
    description:
      "View the location map and connectivity advantages of Sobha Hennur Bangalore near Whitefield and Old Madras Road.",
    images: ["https://www.sobhahennur.co/images/location-banner.png"],
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
            name: "Location",
            item: "https://www.sobhahennur.co/location"
          }
        ]
      },

      {
        "@type": "ApartmentComplex",
        name: "Sobha Hennur",
        description:
          "Sobha Hennur is a premium residential apartment project located on Old Madras Main Road near Budigere Cross in East Bangalore with excellent connectivity to Whitefield, KR Puram and Kempegowda International Airport.",
        url: "https://www.sobhahennur.co/location",
        image: "https://www.sobhahennur.co/images/location-banner.png",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Hennur Main Road, North Bangalore",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560049",
          addressCountry: "IN"
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: "13.0685",
          longitude: "77.7440"
        }
      },

      {
        "@type": "Place",
        name: "Whitefield IT Hub",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Whitefield",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Sobha Hennur located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sobha Hennur is located on Old Madras Main Road near Budigere Cross in East Bangalore with excellent connectivity to Whitefield, KR Puram and the airport."
            }
          },
          {
            "@type": "Question",
            name: "How far is Whitefield from Sobha Hennur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Whitefield IT hub is approximately 10–12 km from the Sobha Hennur project location at Budigere Cross."
            }
          },
          {
            "@type": "Question",
            name: "How far is Kempegowda International Airport from Sobha Hennur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kempegowda International Airport is approximately 27–30 km from Sobha Hennur and can be reached in around 40–50 minutes depending on traffic."
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
      <LocationPage />
      <BlogSection/>
    </>
  );
}