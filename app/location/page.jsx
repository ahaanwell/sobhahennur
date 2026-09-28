import BlogSection from "@/components/BlogsSection";
import LocationPage, { locationFaqs } from "./LocationPage";

export const metadata = {
  title: {
    absolute: "Sobha Hennur Location, Hennur Road & Future Potential",
  },

  description:
    "Explore Sobha Hennur Location on Hennur Road, Bangalore, with residential context, future potential, apartment options and approval status.",

  keywords: [
    "Sobha Hennur location",
    "Sobha Hennur Road",
    "Sobha Hennur address",
    "Sobha Hennur location map",
    "Sobha Hennur connectivity",
    "Hennur Road apartments",
    "Hennur Road Bangalore",
    "Hennur future potential",
    "North East Bangalore apartments",
    "Sobha projects Hennur Road",
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/location",
  },

  openGraph: {
    title: "Sobha Hennur Location, Hennur Road & Future Potential",
    description:
      "Explore Sobha Hennur Location on Hennur Road, Bangalore, with residential context, future potential, apartment options and approval status.",
    url: "https://www.sobhahennur.co/location",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/hennur-road.webp",
        alt: "Sobha Hennur location on Hennur Road, Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha Hennur Location, Hennur Road & Future Potential",
    description:
      "Explore Sobha Hennur Location on Hennur Road, Bangalore, with residential context, future potential, apartment options and approval status.",
    images: ["https://www.sobhahennur.co/images/hennur-road.webp"],
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
        "@type": "WebPage",
        name: "Sobha Hennur Location, Hennur Road & Future Potential",
        description:
          "Explore Sobha Hennur Location on Hennur Road, Bangalore, with residential context, future potential, apartment options and approval status.",
        url: "https://www.sobhahennur.co/location",
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
          "Sobha Hennur is a pre-launch premium residential project by SOBHA Limited on Hennur Road, Bangalore, planned across 45 acres with 2, 3, 3.5 and 4 BHK apartments from 1,500 to 2,230 sq.ft.",
        url: "https://www.sobhahennur.co/location",
        image: "https://www.sobhahennur.co/images/hennur-road.webp",
        hasMap: "https://maps.app.goo.gl/mgHt22xpDC33Br8B9",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Hennur Road",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        },

        containedInPlace: {
          "@type": "City",
          name: "Bangalore",
          sameAs: "https://en.wikipedia.org/wiki/Bangalore"
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: locationFaqs.map((faq) => ({
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
      <LocationPage />
      <BlogSection/>
    </>
  );
}
