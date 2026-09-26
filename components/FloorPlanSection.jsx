/* eslint-disable react/no-unescaped-entities */

import FloorPlanClient from "./FloorPlanClient";

const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "/images/floor-plan.webp",
    alt: "2 BHK Floor Plan",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "/images/floor-plan.webp",
    alt: "3 BHK Floor Plan",
  },
  {
    id: 5,
    label: "3.5 BHK Floor Plan",
    image: "/images/floor-plan.webp",
    alt: "3 BHK Floor Plan",
  },
  {
    id: 4,
    label: "4 BHK Floor Plan",
    image: "/images/floor-plan.webp",
    alt: "4 BHK Floor Plan",
  },
];

export default function FloorPlanSection() {
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="text-gray-800 space-y-6 pb-8">
          <p className="leading-relaxed">
            The <a href="https://www.sobhahennur.co/floor-plan">Sobha Hennur floor plans</a> cover four home types: <strong>2 BHK, 3 BHK, 3.5 BHK and 4 BHK apartments</strong>, planned within a size band of <strong>1,500 to 2,230 sq.ft.</strong> Even the entry-level home starts at 1,500 sq.ft., so this is not a project of compact starter units. Every layout begins at a size that many Bangalore developers reserve for a full 3 BHK, which gives each configuration more breathing room than its label suggests.
          </p>

          <p className="leading-relaxed">
            The plans below are indicative layouts released at the <strong>pre-launch stage</strong>. The exact area of each unit type, room dimensions and tower-wise stacking will be fixed in the sanctioned plans filed with the <a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">Karnataka RERA</a> once registration is issued, so treat these drawings as a guide to the room arrangement rather than a final specification.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-3 font-semibold">Configuration</th>
                  <th className="border border-gray-300 px-4 py-3 font-semibold">Planned Size Band</th>
                  <th className="border border-gray-300 px-4 py-3 font-semibold">Best Suited For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">2 BHK</td>
                  <td className="border border-gray-300 px-4 py-3">From 1,500 sq.ft.</td>
                  <td className="border border-gray-300 px-4 py-3">Couples and small families who want generous rooms rather than extra rooms</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">3 BHK</td>
                  <td className="border border-gray-300 px-4 py-3">Within 1,500 – 2,230 sq.ft.</td>
                  <td className="border border-gray-300 px-4 py-3">Families with children, or buyers who need a dedicated guest room</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">3.5 BHK</td>
                  <td className="border border-gray-300 px-4 py-3">Within 1,500 – 2,230 sq.ft.</td>
                  <td className="border border-gray-300 px-4 py-3">Households that need a study, home office or prayer room alongside three bedrooms</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">4 BHK</td>
                  <td className="border border-gray-300 px-4 py-3">Up to 2,230 sq.ft.</td>
                  <td className="border border-gray-300 px-4 py-3">Larger or multi-generational families living under one roof</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            Unit-wise areas have not yet been published for each configuration. Ask for the exact carpet and super built-up area of the specific unit you are considering.
          </p>
        </div>
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

        <div className="space-y-6 text-gray-800 mt-10">
          <h3 className="text-xl font-semibold text-gray-900">
            What Each Layout Is Designed Around
          </h3>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>2 BHK:</strong> with a 1,500 sq.ft. starting size, the extra area goes into wider living and dining spaces and larger bedrooms rather than a third room. It suits buyers who prefer fewer, more comfortable rooms that are easy to maintain.
            </li>
            <li>
              <strong>3 BHK:</strong> the most balanced layout for a growing family, typically separating the master bedroom from the two other bedrooms so parents and children each get some privacy.
            </li>
            <li>
              <strong>3.5 BHK:</strong> the "half" room is a smaller space that can work as a study, work-from-home office, nursery or pooja room. For many Bangalore professionals it is the room that stops the dining table from becoming the office desk.
            </li>
            <li>
              <strong>4 BHK:</strong> the largest home in the project, reaching up to 2,230 sq.ft. The fourth bedroom makes it practical for families with elderly parents, frequent guests or older children who each need their own room.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900">
            How to Read a Floor Plan Before You Book
          </h3>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Carpet area vs super built-up area:</strong> under the <a href="https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016" target="_blank" rel="nofollow noopener noreferrer">RERA Act</a>, homes must be sold on carpet area, the usable space inside your walls. The 1,500 to 2,230 sq.ft. figures should be checked against the carpet area in the final agreement.
            </li>
            <li>
              <strong>Orientation and light:</strong> check which direction the living room and balconies face. In Bangalore, east- and north-facing living areas tend to stay brighter and cooler through the afternoon.
            </li>
            <li>
              <strong>Cross-ventilation:</strong> look for windows on more than one wall in the main rooms. Homes that can be aired naturally depend less on fans and air-conditioning.
            </li>
            <li>
              <strong>Kitchen and utility:</strong> confirm whether the plan includes a separate utility area for washing machines and storage, and how the kitchen connects to the dining space.
            </li>
            <li>
              <strong>Wet areas and privacy:</strong> note how many bathrooms are attached to bedrooms and whether a common toilet is available for guests without walking through a bedroom.
            </li>
            <li>
              <strong>Vastu preferences:</strong> if <a href="https://en.wikipedia.org/wiki/Vastu_shastra" target="_blank" rel="nofollow noopener noreferrer">Vastu</a> matters to your family, check the entrance direction, the kitchen position and the master bedroom placement on the specific unit, since these can change from one tower or floor to another.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900">
            Choosing the Right Unit, Not Just the Right Size
          </h3>

          <p className="leading-relaxed">
            Two apartments with the same configuration can live very differently depending on their floor, their position in the tower and what they overlook. A unit facing internal open space will usually be quieter than one facing an access road, and higher floors generally get better light and airflow. Once the <a href="https://www.sobhahennur.co/master-plan">master plan</a> shows the tower positions, it is worth matching your preferred floor plan to a specific location within the <strong>45-acre development</strong>.
          </p>

          <p className="leading-relaxed">
            Size also drives cost. Because pricing starts at <strong>₹2.40 Cr onwards</strong> and moves with configuration and area, compare the floor plans side by side with the <a href="https://www.sobhahennur.co/price">Sobha Hennur price list</a> before shortlisting. Request the unit-wise plan, carpet area and cost sheet together, and verify them against the RERA-registered documents once available, before paying any booking amount.
          </p>
        </div>


      </div>
    </section>
  );
}