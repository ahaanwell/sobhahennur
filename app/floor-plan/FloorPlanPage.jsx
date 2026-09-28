/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import FloorPlanClient from "@/components/FloorPlanClient";
import PageHero from "@/components/PageHero";

export const floorPlanFaqs = [
  {
    question: "What floor plans are available at Sobha Hennur?",
    answer: "Sobha Hennur is planned with four apartment configurations: 2 BHK, 3 BHK, 3.5 BHK and 4 BHK, with sizes ranging from 1,500 to 2,230 sq.ft.",
  },
  {
    question: "What is the size of a 2 BHK at Sobha Hennur?",
    answer: "The 2 BHK at Sobha Hennur is indicated at about 1,500 sq.ft., which is larger than a typical 2 BHK in Bangalore.",
  },
  {
    question: "What are the sizes of the 3 BHK and 3.5 BHK apartments?",
    answer: "The 3 BHK is indicated at 1,750–1,950 sq.ft. and the 3.5 BHK at 2,000–2,100 sq.ft. The additional half room in the 3.5 BHK can serve as a study, home office or prayer room.",
  },
  {
    question: "What is the size of the 4 BHK at Sobha Hennur?",
    answer: "The 4 BHK is the largest configuration at Sobha Hennur, indicated at about 2,230 sq.ft.",
  },
  {
    question: "Are the Sobha Hennur floor plans final?",
    answer: "No. The project is at the pre-launch stage and RERA approval is under process, so sizes and layouts are indicative. Final carpet areas and room dimensions should be checked in the RERA-registered plans and sale agreement.",
  },
];

function FloorPlanPage() {
  const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "/images/floor-plan.webp",
    alt: "Sobha Hennur 2 BHK floor plan",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "/images/floor-plan.webp",
    alt: "Sobha Hennur 3 BHK floor plan",
  },
  {
    id: 5,
    label: "3.5 BHK Floor Plan",
    image: "/images/floor-plan.webp",
    alt: "Sobha Hennur 3.5 BHK floor plan",
  },
  {
    id: 4,
    label: "4 BHK Floor Plan",
    image: "/images/floor-plan.webp",
    alt: "Sobha Hennur 4 BHK floor plan",
  },
];
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Floor Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Hennur Floor Plan
          </h1>
          <DownloadActions/>
          <div className="mt-6 space-y-6">
            <div className="space-y-6 text-gray-800">
  <p className="leading-relaxed">
    The <strong>Sobha Hennur Floor Plan</strong> provides an overview of the apartment configurations planned for this premium residential development on <a href="https://www.sobhahennur.co/location">Hennur Road, Bangalore</a>. Developed by <a href="https://www.sobha.com/city/bengaluru/" target="_blank" rel="nofollow noopener noreferrer"><strong>SOBHA Limited</strong></a>, the project is currently in the pre-launch stage and is planned across <a href="https://www.sobhahennur.co/master-plan">45 acres</a>, with approximately 17 acres allocated to Phase 1.
  </p>

  <p className="leading-relaxed">
    The proposed homes include 2, 3, 3.5 and 4 BHK apartments, with sizes ranging from 1,500 to 2,230 sq. ft. Indicative sizes have been shared for each configuration, while detailed room dimensions will be confirmed in the official drawings. Together they offer a clear starting point for comparing the planned apartment options.
  </p>

  <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            aria-label="Sobha Hennur floor plans"
          >
            {floorPlans.map((plan) => (
              <li
                key={plan.id}
                className="overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={plan.image}
                    alt={plan.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
  
                  <FloorPlanClient plan={plan} />
                </div>
  
                <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                  {plan.label}
                </div>
              </li>
            ))}
          </ul>

  <h2 className="text-2xl font-semibold text-gray-900">
    Sobha Hennur Floor Plan: Configurations and Apartment Sizes
  </h2>

  <p className="leading-relaxed">
    The project is planned with four apartment configurations. The table below shows the indicative size band for each configuration. Final areas should be confirmed through the official floor plan and the <a href="https://www.sobhahennur.co/price">Sobha Hennur price list</a>.
  </p>

  <table className="mt-4 w-full border-collapse text-left">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-3 font-semibold">
          Apartment Configuration
        </th>
        <th className="border border-gray-300 px-4 py-3 font-semibold">
          Planned Size Range
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          2 BHK Apartments
        </td>
        <td className="border border-gray-300 px-4 py-3">
          About 1,500 sq. ft.
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          3 BHK Apartments
        </td>
        <td className="border border-gray-300 px-4 py-3">
          1,750–1,950 sq. ft.
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          3.5 BHK Apartments
        </td>
        <td className="border border-gray-300 px-4 py-3">
          2,000–2,100 sq. ft.
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          4 BHK Apartments
        </td>
        <td className="border border-gray-300 px-4 py-3">
          About 2,230 sq. ft.
        </td>
      </tr>
    </tbody>
  </table>

  <p className="leading-relaxed">
    These are indicative pre-launch sizes. Room dimensions, balcony areas and the precise distribution of space between rooms have not yet been published and may vary between units of the same configuration.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    2 BHK Floor Plan
  </h3>

  <p className="leading-relaxed">
    The 2 BHK configuration is the entry-level option at <a href="https://www.sobhahennur.co/"><strong>Sobha Hennur</strong></a>, indicated at about 1,500 sq. ft. Its detailed room arrangement has not yet been published.
  </p>

  <p className="leading-relaxed">
    When reviewing the 2 BHK floor plan, buyers should check the dimensions of the bedrooms, living and dining area, kitchen, bathrooms and any balcony or utility space shown in the official drawing. These details help establish how the apartment's total area is distributed and whether the layout suits the household's needs.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    3 BHK and 3.5 BHK Floor Plans
  </h3>

  <p className="leading-relaxed">
    Sobha Hennur is also planned to include <strong>3 BHK and 3.5 BHK apartments.</strong> The 3 BHK is indicated at 1,750–1,950 sq. ft. and the 3.5 BHK at 2,000–2,100 sq. ft., giving families two mid-size layout choices.
  </p>

  <p className="leading-relaxed">
    The distinction between the two configurations should be assessed using the official plans rather than the configuration label alone. Buyers can compare the room arrangement, usable circulation space, storage provisions and separation between shared and private areas once detailed drawings are available.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    4 BHK Floor Plan
  </h3>

  <p className="leading-relaxed">
    The <strong>4 BHK apartment</strong> is the largest configuration listed for Sobha Hennur. It is indicated at about 2,230 sq. ft., the top of the project's overall size range.
  </p>

  <p className="leading-relaxed">
    A detailed floor plan will be needed to assess bedroom dimensions, common areas, kitchen placement and the relationship between private and shared spaces. Buyers should also verify the area measurement method used in the official apartment schedule, since the <a href="https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016" target="_blank" rel="nofollow noopener noreferrer">RERA Act</a> requires homes to be sold on carpet area.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    How to Evaluate the Sobha Hennur Floor Plan
  </h2>

  <p className="leading-relaxed">
    A floor plan is more useful when assessed beyond the number of bedrooms. The following points can help buyers compare the available layouts once official drawings are released:
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>Room dimensions:</strong> Check the stated length and width of bedrooms, living areas and the kitchen.
    </li>
    <li>
      <strong>Space distribution:</strong> Review how much of the apartment is allocated to rooms, circulation and other spaces.
    </li>
    <li>
      <strong>Privacy:</strong> Consider the placement of bedrooms in relation to the living and dining areas.
    </li>
    <li>
      <strong>Natural light and ventilation:</strong> Review the window and balcony positions shown on the plan.
    </li>
    <li>
      <strong>Storage and utility areas:</strong> Confirm whether the drawing identifies dedicated storage or utility spaces.
    </li>
    <li>
      <strong>Area details:</strong> Check the stated apartment area and how it is calculated before comparing different configurations.
    </li>
  </ul>

  <p className="leading-relaxed">
    These checks help distinguish between layouts that have similar overall areas but different internal arrangements.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    Project Details and Floor Plan Availability
  </h2>

  <p className="leading-relaxed">
    Sobha Hennur is a premium residential apartment project by <strong>SOBHA Limited</strong>, located on Hennur Road, Bangalore. The development is planned across 45 acres, with approximately 17 acres in Phase 1 and more than 4,400 units across the overall project. The planned <a href="https://www.sobhahennur.co/amenities">amenities</a> and <a href="https://www.sobhahennur.co/master-plan">master plan</a> will show how these homes sit within the wider community.
  </p>

  <p className="leading-relaxed">
    The project is currently in the <strong>pre-launch stage</strong>, and <a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">RERA approval</a> is under process. The indicative starting price is <a href="https://www.sobhahennur.co/price">₹2.40 Cr onwards</a>, with possession expected by 2030. Buyers should confirm the latest project information and official apartment drawings as they become available.
  </p>

  <p className="leading-relaxed">
    At present, the supplied project details confirm the configurations and indicative sizes, but do not include final floor-plan drawings or room measurements. These should be verified against the developer's official documentation before making a purchase decision. You can also compare these layouts with <a href="https://www.sobhahennur.co/bangalore">other Sobha projects in Bangalore</a>.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    Sobha Hennur Floor Plan FAQs
  </h2>

  {floorPlanFaqs.map((faq) => (
    <div key={faq.question}>
      <h3 className="text-xl font-semibold text-gray-900">
        {faq.question}
      </h3>
      <p className="mt-2 leading-relaxed">{faq.answer}</p>
    </div>
  ))}
</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default FloorPlanPage;
