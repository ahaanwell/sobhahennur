import AmenitiesSection from "@/components/AmenitiesSection";
import BlogSection from "@/components/BlogsSection";
import BuyerDueDiligenceSection from "@/components/BuyerDueDiligenceSection";
import BuyerProfileSection from "@/components/BuyerProfileSection";
import CommuteSection from "@/components/CommuteSection";
import ConstructionAndProjectStatus from "@/components/ConstructionAndProjectStatus";
import EMICalculator from "@/components/Emicalculator";
import EOI from "@/components/EOI";
import FaqSection from "@/components/FaqSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LegalAndRegulatory from "@/components/LegalAndRegulatory";
import LocationSection from "@/components/LocationSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import PaymentPlanStructure from "@/components/PaymentPlanStructure";
import PostRERAMilestones from "@/components/PostRERAMilestones";
import PreBookingChecklistSection from "@/components/PreBookingChecklistSection";
import PriceListSection from "@/components/PriceListSection";
import ProjectComparisonSection from "@/components/ProjectComparisonSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import RateAnalysis from "@/components/RateAnalysis";
import ReraApprovalsLegalDocumentation from "@/components/reraApprovalsLegal";
import SobhaLimited from "@/components/SobhaLimited";
import SuitableForSection from "@/components/SuitableForSection";
import TaxesAndStatutory from "@/components/TaxesAndStatutory";
import TopSobhaProjects from "@/components/TopSobhaProjects";
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      name: "Sobha Hennur",
      description:
        "Sobha Hennur is a pre-launch premium luxury residential project by SOBHA Limited on Hennur Road, Bangalore, planned across 45 acres with 2, 3, 3.5 and 4 BHK apartments from 1,500 to 2,230 sq.ft.",
      url: "https://www.sobhahennur.co/",
      image: "https://www.sobhahennur.co/images/banners/sobha-hennur.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hennur Road",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      offers: {
        "@type": "Offer",
        price: "24000000",
        priceCurrency: "INR",
        availability: "https://schema.org/PreSale",
        url: "https://www.sobhahennur.co/price",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Sobha Hennur located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sobha Hennur is located on Hennur Road, Bangalore, a well-established residential corridor in the city.",
          },
        },
        {
          "@type": "Question",
          name: "What is the starting price of Sobha Hennur apartments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The current indicative starting price for Sobha Hennur is ₹2.40 Cr onwards. The final price may vary depending on the apartment configuration, size and applicable project charges.",
          },
        },
        {
          "@type": "Question",
          name: "What are the apartment configurations available at Sobha Hennur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sobha Hennur is planned to offer 2, 3, 3.5 and 4 BHK apartments, providing multiple options for buyers looking for premium residential homes.",
          },
        },
        {
          "@type": "Question",
          name: "Is Sobha Hennur RERA approved?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The RERA approval for Sobha Hennur is currently under process. The RERA registration number will be available once the project receives its applicable approval.",
          },
        },
        {
          "@type": "Question",
          name: "What is the expected possession date of Sobha Hennur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The expected possession timeline for Sobha Hennur is by 2030. Buyers should verify the RERA-declared possession date once the project receives its registration.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    <HeroSection/>
    <ProjectHighlights/>
    <PriceListSection/>
    <EMICalculator/>
    <FloorPlanSection/>
    <MasterPlanSection/>
    <LocationSection/>
    <AmenitiesSection/>
    <ReraApprovalsLegalDocumentation/>
    <ConstructionAndProjectStatus/>
    <SobhaLimited/>
    <RateAnalysis/>
    <PaymentPlanStructure/>
    <EOI/>
    <TaxesAndStatutory/>
    <LegalAndRegulatory/>
    <PostRERAMilestones/>
    <SuitableForSection/>
    <CommuteSection/>
    <BuyerProfileSection/>
    <PreBookingChecklistSection/>
    <ProjectComparisonSection/>
    <BuyerDueDiligenceSection/>
    <TopSobhaProjects/>
    <GallerySection/>
    <FaqSection/>
    <BlogSection/>
    </>
  );
}
