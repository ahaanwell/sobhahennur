/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Project Type",
    value: "Residential Township",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-primary" />,
    label: "Starting Price",
    value: "₹ 2.40 Cr Onwards",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "2, 3, 3.5 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "1,500 to 2,230 sq.ft",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "Pre-Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "45 Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "1,300",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Total No. of Floors",
    value: "On Request",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "No Of Towers",
    value: "On Request",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "Sobha Limited",
  },
  {
    icon: <FaCertificate className="text-3xl text-primary" />,
    label: "Rera No",
    value: "Coming Soon",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "2030",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="highlights-heading"
          className="text-3xl font-semibold text-gray-900 text-center mb-5"
        >
          About Sobha Hennur
        </h2>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Sobha Hennur project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div className="space-y-6 text-gray-800 leading-relaxed">
  <div>
    <p className="mt-4">
      <strong>Sobha Hennur</strong> is a new <strong>premium luxury residential project</strong> by <strong><a href="https://en.wikipedia.org/wiki/Sobha_Developers_Ltd" target="_blank" rel="nofollow noopener noreferrer">SOBHA Limited</a></strong> located on <strong><a href="https://www.sobhahennur.co/location">Hennur Road</a>, <a href="https://en.wikipedia.org/wiki/Bangalore" target="_blank" rel="nofollow noopener noreferrer">Bangalore</a></strong>. The project is planned across <strong>45 acres</strong>, with <strong>Phase 1</strong> covering approximately <strong>17 acres</strong>. The development will offer <strong><a href="https://www.sobhahennur.co/floor-plan">2, 3, 3.5 & 4 BHK apartments</a></strong>, with apartment sizes ranging from <strong>1,500 to 2,230 sq.ft.</strong>
    </p>
  </div>

  <div>
    <p>
      The project is located on <strong>Hennur Road, Bangalore</strong>, a well-known residential corridor in the city. <strong>Sobha Hennur</strong> is planned as a premium residential development offering spacious apartments in multiple configurations, including 2, 3, 3.5 and 4 BHK homes. The project is being developed by <strong>SOBHA Limited</strong> and is currently at the <strong>pre-launch stage</strong>.
    </p>
  </div>

  <div>
    <p>
      The development is planned to offer a range of thoughtfully designed apartment configurations to suit different family requirements. Homebuyers can choose from <strong>2, 3, 3.5 and 4 BHK apartments</strong>, with sizes starting from <strong>1,500 sq.ft. and extending up to 2,230 sq.ft.</strong> The project is planned to provide premium residential options within a large-scale development on Hennur Road.
    </p>
  </div>

  <div>
    <p>
      The overall development covers <strong>45 acres</strong>, while <strong>Phase 1</strong> is planned across approximately <strong>17 acres</strong>. The project is expected to include <strong>4,400+ residential units</strong>, making it a large-scale premium apartment development. The planned configurations and spacious apartment sizes are designed to provide multiple housing options for prospective buyers.
    </p>
  </div>

  <div>
    <p>
      <strong>Sobha Hennur</strong> is currently in the <strong>pre-launch stage</strong>, and the <strong>RERA approval process is under progress</strong>. The project is planned with a total development area of <strong>45 acres</strong>, including approximately <strong>17 acres in Phase 1</strong>. The expected starting price is <strong><a href="https://www.sobhahennur.co/price">₹2.40 Cr onwards</a></strong>, while the possession is expected by <strong>2030</strong>. Buyers should verify the latest project details, approvals, pricing and timelines as the development progresses.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Sobha Hennur Apartment Types
    </h2>

    <ul className="mt-4 list-disc space-y-2 pl-6">
      <li>
        <strong>2 BHK Apartments:</strong> spacious residential homes planned as part of the project.
      </li>
      <li>
        <strong>3 BHK Apartments:</strong> premium apartments designed for families seeking additional living space.
      </li>
      <li>
        <strong>3.5 BHK Apartments:</strong> larger residences offering an additional half-bedroom configuration.
      </li>
      <li>
        <strong>4 BHK Apartments:</strong> spacious luxury residences planned for buyers looking for larger homes.
      </li>
    </ul>

    <p className="mt-4 leading-relaxed">
      The project offers <strong>2, 3, 3.5 and 4 BHK apartments</strong> with sizes ranging from <strong>1,500 to 2,230 sq.ft.</strong> The available configurations provide prospective homebuyers with multiple options based on their space requirements and budget.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Phase 1, 17 Acres
    </h2>

    <p className="mt-4 leading-relaxed">
      <strong>Phase 1</strong> of Sobha Hennur is planned across approximately <strong>17 acres</strong> within the overall <strong><a href="https://www.sobhahennur.co/master-plan">45-acre development</a></strong>. The project is expected to comprise <strong>4,400+ units</strong> across its development, with multiple apartment configurations ranging from <strong>2 BHK to 4 BHK</strong>.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Key Highlights and Unique Selling Points
    </h2>

    <ul className="mt-4 list-disc space-y-2 pl-6">
      <li>
        <strong>Premium Luxury Apartments:</strong> <strong>Sobha Hennur</strong> is planned as a premium luxury residential development offering spacious apartments on Hennur Road, Bangalore.
      </li>
      <li>
        <strong>45-Acre Master Development:</strong> the project is planned across a substantial <strong>45-acre</strong> land parcel, providing a large-scale residential setting.
      </li>
      <li>
        <strong>17-Acre Phase 1:</strong> the first phase of the development is planned across approximately <strong>17 acres</strong>.
      </li>
      <li>
        <strong>Multiple Apartment Configurations:</strong> homebuyers can choose from <strong>2, 3, 3.5 and 4 BHK apartments</strong>, offering options for different family sizes and requirements.
      </li>
      <li>
        <strong>Spacious Apartment Sizes:</strong> residences are planned in sizes ranging from <strong>1,500 to 2,230 sq.ft.</strong>, providing a variety of spacious home options.
      </li>
      <li>
        <strong>4,400+ Units:</strong> the project is planned to include <strong>more than 4,400 residential units</strong> across the overall development.
      </li>
      <li>
        <strong>Hennur Road Location:</strong> the project is situated on <strong><a href="https://www.sobhahennur.co/location">Hennur Road, Bangalore</a></strong>, making it a residential development within one of the city's established corridors.
      </li>
      <li>
        <strong>Premium Residential Development:</strong> the project is designed as a <strong>premium luxury residential</strong> development by SOBHA Limited.
      </li>
      <li>
        <strong>Pre-Launch Opportunity:</strong> <strong>Sobha Hennur</strong> is currently in the <strong>pre-launch stage</strong>, allowing prospective buyers to explore the project before the development moves further through its launch and approval stages.
      </li>
      <li>
        <strong>SOBHA Limited:</strong> the project is being developed by <strong>SOBHA Limited</strong>, one of the established names associated with residential developments in India.
      </li>
      <li>
        <strong>Starting Price:</strong> the indicative starting price for <strong>Sobha Hennur</strong> is <strong>₹2.40 Cr onwards</strong>, subject to change as the project progresses.
      </li>
    </ul>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Sobha Hennur Project Status
    </h2>

    <p className="mt-4 leading-relaxed">
      The project is currently at the <strong>pre-launch stage</strong>. <strong>Sobha Hennur</strong> is planned as a <strong>45-acre premium luxury residential development</strong> on Hennur Road, Bangalore, with <strong>Phase 1</strong> covering approximately <strong>17 acres</strong>. The project is expected to comprise <strong>4,400+ units</strong> with <strong>2, 3, 3.5 and 4 BHK apartments</strong>.
    </p>

    <ul className="mt-4 list-disc space-y-2 pl-6">
      <li>
        <strong>Project status:</strong> Pre-Launch
      </li>
      <li>
        <strong>RERA status:</strong> Approval under process
      </li>
      <li>
        <strong>Total development area:</strong> 45 Acres
      </li>
      <li>
        <strong>Phase 1:</strong> Approximately 17 Acres
      </li>
      <li>
        <strong>Total units:</strong> 4,400+
      </li>
      <li>
        <strong>Configurations:</strong> 2, 3, 3.5 & 4 BHK Apartments
      </li>
      <li>
        <strong>Apartment sizes:</strong> 1,500 - 2,230 Sq.Ft.
      </li>
      <li>
        <strong>Starting price:</strong> ₹2.40 Cr Onwards
      </li>
      <li>
        <strong>Possession:</strong> Expected by 2030
      </li>
      <li>
        <strong>Developer:</strong> SOBHA Limited
      </li>
    </ul>

    <p className="mt-4 leading-relaxed">
      The project is currently in its <strong>pre-launch phase</strong>, and the RERA approval process is under progress. Prospective buyers should verify the latest approval status, pricing, unit availability and project timelines before making a purchase decision.
    </p>

    <p className="mt-4 leading-relaxed">
      The expected possession timeline for <strong>Sobha Hennur</strong> is <strong>2030</strong>. As the project is currently at the pre-launch stage and the RERA approval is under process, the final project schedule and legally applicable timelines should be checked against the official project documentation once available.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Brochure and Enquiries
    </h2>

    <p className="mt-4 leading-relaxed">
      The <strong>Sobha Hennur brochure</strong> provides project-related information, including the overall development, apartment configurations, sizes, pricing and other available project details. As the project is currently in the <strong>pre-launch stage</strong>, information may be updated as the project progresses.
    </p>

    <p className="mt-4 leading-relaxed">
      Prospective buyers can enquire about <strong>Sobha Hennur</strong> to receive the latest available project details, including apartment configurations, pricing, availability and updates regarding the RERA approval process.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Approvals and RERA
    </h2>

    <p className="mt-4 leading-relaxed">
      The project is currently in the <strong>pre-launch stage</strong>, and <strong>RERA approval is under process</strong>. <strong>Sobha Hennur</strong> is planned across <strong>45 acres</strong>, with approximately <strong>17 acres allocated to Phase 1</strong>. The development is expected to offer <strong>4,400+ units</strong> in <strong>2, 3, 3.5 and 4 BHK apartment configurations</strong>.
    </p>

    <p className="mt-4 leading-relaxed">
      As the RERA approval is still under process, there is currently <strong>no RERA number available to quote</strong> based on the provided project details. Buyers should verify the latest RERA status on the <a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">Karnataka RERA portal</a> and official project documentation before committing to a purchase.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Expression of Interest
    </h2>

    <p className="mt-4 leading-relaxed">
      As <strong>Sobha Hennur</strong> is currently at the <strong>pre-launch stage</strong>, prospective buyers can enquire about the project and register their interest for the available apartment configurations. The development is planned to offer <strong>2, 3, 3.5 and 4 BHK apartments</strong> ranging from <strong>1,500 to 2,230 sq.ft.</strong>
    </p>

    <p className="mt-4 leading-relaxed">
      The project has a stated starting price of <strong>₹2.40 Cr onwards</strong>. Since the development is still at the pre-launch stage and <strong>RERA approval is under process</strong>, pricing, availability and other commercial details may be updated as the project progresses.
    </p>

    <p className="mt-4 leading-relaxed">
      Prospective buyers should confirm the latest pricing, apartment availability, payment terms, approvals and applicable project documentation directly before making any financial commitment.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      What the Price Covers
    </h2>

    <p className="mt-4 leading-relaxed">
      The indicative starting price for <strong>Sobha Hennur is ₹2.40 Cr onwards</strong>. The project offers <strong>2, 3, 3.5 and 4 BHK apartments</strong> with sizes ranging from <strong>1,500 to 2,230 sq.ft.</strong>
    </p>

    <p className="mt-4 leading-relaxed">
      The final price of an apartment may depend on the selected configuration, apartment size and availability. Since the project is currently in the <strong>pre-launch stage</strong>, the applicable pricing and other charges may change as the project moves forward.
    </p>

    <p className="mt-4 leading-relaxed">
      The key project pricing information currently available is:
    </p>

    <ul className="mt-4 list-disc space-y-2 pl-6">
      <li>
        <strong>Starting Price:</strong> ₹2.40 Cr Onwards
      </li>
      <li>
        <strong>Apartment Configurations:</strong> 2, 3, 3.5 & 4 BHK
      </li>
      <li>
        <strong>Apartment Sizes:</strong> 1,500 - 2,230 Sq.Ft.
      </li>
      <li>
        <strong>RERA:</strong> Approval Under Process
      </li>
      <li>
        <strong>Possession:</strong> Expected by 2030
      </li>
    </ul>

    <p className="mt-4 leading-relaxed">
      All pricing should be treated as indicative at the current pre-launch stage and verified against the latest official project documents and price sheet before making a purchase decision.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      SOBHA Limited in Brief
    </h2>

    <p className="mt-4 leading-relaxed">
      <strong><a href="https://www.sobha.com/" target="_blank" rel="nofollow noopener noreferrer">SOBHA Limited</a></strong> is the developer behind <strong>Sobha Hennur</strong>, a premium luxury residential project located on <strong>Hennur Road, Bangalore</strong>. The company is developing the project as a large-scale residential community spread across <strong>45 acres</strong>, with <strong>Phase 1</strong> covering approximately <strong>17 acres</strong>.
    </p>

    <p className="mt-4 leading-relaxed">
      <strong>Sobha Hennur</strong> is planned with <strong>4,400+ units</strong> across <strong>2, 3, 3.5 and 4 BHK apartments</strong>, with home sizes ranging from <strong>1,500 to 2,230 sq.ft.</strong> The project is currently in the <strong>pre-launch stage</strong>, with <strong>RERA approval under process</strong> and possession expected by <strong>2030</strong>.
    </p>

    <p className="mt-4 leading-relaxed">
      With a planned starting price of <strong>₹2.40 Cr onwards</strong>, Sobha Hennur is positioned as a <strong>premium luxury apartment development on Hennur Road, Bangalore</strong>. Buyers should check the latest official project information, approval status, pricing and timelines as the project progresses.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      About Sobha Hennur: A Premium Residential Address on Hennur Road
    </h2>

    <p className="mt-4 leading-relaxed">
      Sobha Hennur is a <strong>pre-launch premium luxury residential project</strong> by <strong>SOBHA Limited</strong> on <strong>Hennur Road</strong> in Bangalore. The overall development spans <strong>45 acres</strong>, with <strong>Phase 1</strong> planned across approximately <strong>17 acres</strong>. The project is planned as a large-scale residential community with <strong>4,400+ units</strong>.
    </p>

    <p className="mt-4 leading-relaxed">
      Homebuyers at Sobha Hennur can choose from <strong>2, 3, 3.5 & 4 BHK apartments</strong> (see the <a href="https://www.sobhahennur.co/floor-plan">floor plans</a> and <a href="https://www.sobhahennur.co/amenities">amenities</a>), with residences ranging from <strong>1,500 to 2,230 sq.ft.</strong> The project is planned to provide spacious premium homes within a large residential development on Hennur Road, with a starting price of <strong>₹2.40 Cr onwards</strong> and possession expected by <strong>2030</strong>.
    </p>

    <ul className="mt-4 list-disc space-y-2 pl-6">
      <li>
        <strong>Four principal configurations:</strong> 2, 3, 3.5 & 4 BHK apartments.
      </li>
      <li>
        <strong>Apartments of 1,500–2,230 sq.ft.:</strong> multiple size options planned to suit different residential requirements.
      </li>
      <li>
        <strong>Premium residential development:</strong> homes are planned as part of a large-scale project by <strong>SOBHA Limited</strong>.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Why a Premium Apartment Rather Than a Smaller Development
    </h2>

    <p className="mt-4 leading-relaxed">
      A large residential development gives buyers the opportunity to choose between multiple apartment configurations and sizes within one planned community. <strong>Sobha Hennur</strong> is planned across <strong>45 acres</strong>, with approximately <strong>17 acres allocated to Phase 1</strong>, and is expected to comprise <strong>4,400+ residential units</strong>. The development is planned with <strong>2, 3, 3.5 and 4 BHK apartments</strong>, giving homebuyers a choice based on their space requirements.
    </p>

    <p className="mt-4 leading-relaxed">
      The apartment sizes range from <strong>1,500 to 2,230 sq.ft.</strong>, while the indicative starting price is <strong>₹2.40 Cr onwards</strong>. Since the project is currently at the <strong>pre-launch stage</strong>, pricing and availability may change as the development progresses and the applicable project documentation is released.
    </p>

    <p className="mt-4 leading-relaxed">
      The location forms another part of the project's proposition. <strong>Sobha Hennur</strong> is situated on <strong>Hennur Road, Bangalore</strong>, and is planned as a <strong>premium luxury residential</strong> development by <strong>SOBHA Limited</strong>. The combination of a <strong>45-acre development</strong>, multiple apartment configurations and a planned <strong>4,400+ units</strong> makes the project a large residential offering on Hennur Road.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      What Is Documented and What Is Not
    </h2>

    <p className="mt-4 leading-relaxed">
      This is a <strong>pre-launch project</strong>, and some project information is still under development or approval. Rather than add details that have not been provided, the current information can be separated as follows:
    </p>

    <ul className="mt-4 list-disc space-y-2 pl-6">
      <li>
        <strong>Documented:</strong> the <strong>45-acre</strong> overall development; approximately <strong>17-acre Phase 1</strong>; <strong>4,400+ units</strong>; apartment configurations of <strong>2, 3, 3.5 & 4 BHK</strong>; apartment sizes of <strong>1,500–2,230 sq.ft.</strong>; indicative starting price of <strong>₹2.40 Cr onwards</strong>; <strong>pre-launch</strong> project status; <strong>SOBHA Limited</strong> as the builder; <strong>Hennur Road, Bangalore</strong> as the project location; and possession expected by <strong>2030</strong>.
      </li>
      <li>
        <strong>Under process:</strong> <strong>RERA approval</strong> for the project. The current RERA status is <strong>Approval Under Process</strong>, and a RERA number has not been provided.
      </li>
      <li>
        <strong>Subject to change:</strong> the indicative starting price of <strong>₹2.40 Cr onwards</strong>, apartment availability, project details and other commercial information may change as the project moves forward from the pre-launch stage.
      </li>
      <li>
        <strong>Not yet available:</strong> the <strong>RERA number</strong>, as approval is currently under process. Any information that depends on the final registered project documentation should be verified once the applicable approval is issued.
      </li>
    </ul>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      SOBHA Limited's Track Record
    </h2>

    <p className="mt-4 leading-relaxed">
      <strong>SOBHA Limited</strong> is the developer of <strong>Sobha Hennur</strong>, a premium luxury residential project located on <strong>Hennur Road, Bangalore</strong>. The company is developing the project as a large-scale residential community planned across <strong>45 acres</strong>, with approximately <strong>17 acres forming Phase 1</strong>.
    </p>

    <p className="mt-4 leading-relaxed">
      Sobha Hennur is planned with <strong>4,400+ residential units</strong> and offers <strong>2, 3, 3.5 & 4 BHK apartments</strong> ranging from <strong>1,500 to 2,230 sq.ft.</strong> The project represents SOBHA Limited's residential development on the Hennur Road corridor. You can also compare it with <a href="https://www.sobhahennur.co/bangalore">other Sobha projects in Bangalore</a>.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Approvals & RERA
    </h2>

    <p className="mt-4 leading-relaxed">
      <strong>RERA approval for Sobha Hennur is currently under process.</strong> The project status is <strong>Pre-Launch</strong>, and a RERA number has not been provided at this stage. The project is planned across <strong>45 acres</strong>, with <strong>Phase 1</strong> covering approximately <strong>17 acres</strong>, and is expected to comprise <strong>4,400+ units</strong>.
    </p>

    <p className="mt-4 leading-relaxed">
      Until the RERA approval process is completed and the applicable project documents are available, buyers should treat the current project information, including the expected <strong>2030 possession timeline</strong>, as subject to the final approved and registered documentation. The current project status and RERA details should be verified before making any financial commitment.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
