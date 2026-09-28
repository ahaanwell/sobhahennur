import BlogSection from "@/components/BlogsSection";
import MasterPlanPage, { masterPlanFaqs } from "./MasterPlanPage";

export const metadata = {
  title: {
    absolute: "Sobha Hennur Master Plan, Layout & Project Details",
  },

  description:
    "Explore the Sobha Hennur master plan, 45-acre development, 17-acre Phase 1, apartment mix, project status and key layout details for buyers.",

  keywords: [
    "Sobha Hennur master plan",
    "Sobha Hennur layout",
    "Sobha Hennur site plan",
    "Sobha Hennur project details",
    "Sobha Hennur Phase 1",
    "Sobha Hennur 45 acres",
    "Sobha Hennur apartment mix",
    "Sobha Hennur Road master plan",
    "Hennur Road township layout",
    "Sobha new launch Bangalore master plan",
  ],

  metadataBase: new URL("https://www.sobhahennur.co"),

  alternates: {
    canonical: "https://www.sobhahennur.co/master-plan",
  },

  openGraph: {
    title: "Sobha Hennur Master Plan, Layout & Project Details",
    description:
      "Explore the Sobha Hennur master plan, 45-acre development, 17-acre Phase 1, apartment mix, project status and key layout details for buyers.",
    url: "https://www.sobhahennur.co/master-plan",
    siteName: "Sobha Hennur",
    images: [
      {
        url: "https://www.sobhahennur.co/images/master-plan.webp",
        alt: "Sobha Hennur master plan and site layout",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha Hennur Master Plan, Layout & Project Details",
    description:
      "Explore the Sobha Hennur master plan, 45-acre development, 17-acre Phase 1, apartment mix, project status and key layout details for buyers.",
    images: ["https://www.sobhahennur.co/images/master-plan.webp"],
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
            name: "Master Plan",
            item: "https://www.sobhahennur.co/master-plan"
          }
        ]
      },

      {
        "@type": "WebPage",
        name: "Sobha Hennur Master Plan, Layout & Project Details",
        description:
          "Explore the Sobha Hennur master plan, 45-acre development, 17-acre Phase 1, apartment mix, project status and key layout details for buyers.",
        url: "https://www.sobhahennur.co/master-plan",
        inLanguage: "en-IN",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.sobhahennur.co/images/master-plan.webp",
          caption: "Sobha Hennur master plan"
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
          "Sobha Hennur is a pre-launch premium residential project by SOBHA Limited on Hennur Road, Bangalore, planned across 45 acres with an approximately 17-acre Phase 1, 4,400+ units and 2, 3, 3.5 and 4 BHK apartments from 1,500 to 2,230 sq.ft.",
        url: "https://www.sobhahennur.co/master-plan",
        image: "https://www.sobhahennur.co/images/master-plan.webp",

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
        mainEntity: masterPlanFaqs.map((faq) => ({
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
      <MasterPlanPage />
      <BlogSection/>
    </>
  );
}
