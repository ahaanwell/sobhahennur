/* eslint-disable react/no-unescaped-entities */

import MasterPlanClient from "./MasterPlanClient";

export default function MasterPlanSection() {
  return (
    <section
      id="master-plan"
      aria-labelledby="master-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Master Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="max-w-2xl mx-auto">
          <div
          
            className="relative w-full aspect-[5/3] bg-gray-100 overflow-hidden"
          >
            <img width={750} height={495}
              src="/images/master-plan.webp"
              alt="Master Plan"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <MasterPlanClient/>
          </div>

          <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
            Master Plan
          </div>

        </div>
        <div className="space-y-6 mt-6">
          <div className="space-y-6 text-gray-800">
  <p className="leading-relaxed">
    The <strong><a href="https://www.sobhahennur.co/master-plan">Sobha Hennur master plan</a></strong> is planned across <strong>45 acres</strong> as a premium luxury residential development on <strong><a href="https://www.sobhahennur.co/location">Hennur Road, Bangalore</a></strong>, with <strong>Phase 1 covering approximately 17 acres</strong>. The overall project is planned with <strong>4,400+ residential units</strong>, while the first phase is expected to account for <strong>approximately 1,400+ units</strong>. The remaining development will be planned across subsequent phases. The documented project elements are:
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>Approximately 1,400+ residential units in Phase 1</strong> across around 17 of the overall 45 acres, with further development planned in subsequent phases
    </li>
    <li>
      <strong><a href="https://www.sobhahennur.co/floor-plan">2, 3, 3.5 & 4 BHK apartments</a></strong> planned across the residential development
    </li>
    <li>
      <strong>Apartment sizes from 1,500 to 2,230 sq.ft.</strong>, offering multiple options across the available configurations
    </li>
    <li>
      A <strong>45-acre overall development</strong> planned as a premium luxury residential community
    </li>
    <li>
      <strong>Phase 1 spread across approximately 17 acres</strong> as the first part of the larger development
    </li>
    <li>
      A planned <strong>4,400+ total unit development</strong>, with the balance of the residential inventory expected across subsequent phases
    </li>
  </ul>

  <p className="leading-relaxed">
    The project is planned as a large-scale premium residential community, with the current project details confirming the overall <strong>45-acre development</strong>, approximately <strong>17-acre Phase 1</strong>, <strong>4,400+ units</strong>, and multiple apartment configurations. Detailed information regarding the clubhouse, <a href="https://www.sobhahennur.co/amenities">internal amenities</a>, landscaping, road widths and other master-plan facilities has not been provided in the current project details, so none is added here. Once the developer releases the detailed master plan, those elements can be verified from the official drawing rather than assumed from marketing material.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      The Phase 1 Unit Mix
    </h2>

    <p className="mt-4 leading-relaxed">
      Phase 1 is planned across approximately <strong>17 acres</strong> and is expected to include <strong>approximately 1,400+ residential units</strong>. The released project information identifies four principal apartment configurations: <strong>2, 3, 3.5 and 4 BHK apartments</strong>. Apartment sizes range from <strong>1,500 to 2,230 sq.ft.</strong>, giving buyers multiple residential options within the first phase.
    </p>

    <p className="mt-4 leading-relaxed">
      The exact configuration-wise distribution of the Phase 1 inventory has not been provided. Therefore, the number of 2, 3, 3.5 and 4 BHK apartments within the approximately <strong>1,400+ Phase 1 units</strong> should be confirmed from the latest official project plan and inventory sheet.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Roads, Parks and the Residential Layout
    </h2>

    <p className="mt-4 leading-relaxed">
      The <strong>Sobha Hennur master plan</strong> covers approximately <strong>45 acres</strong>, with the first phase occupying around <strong>17 acres</strong>. The project is planned as a premium luxury residential development comprising <strong>2, 3, 3.5 and 4 BHK apartments</strong> ranging from <strong>1,500 to 2,230 sq.ft.</strong>
    </p>

    <p className="mt-4 leading-relaxed">
      Detailed information regarding the internal road hierarchy, landscaped parks, open spaces and other master-plan components has not been provided in the current project details. These elements should therefore be verified against the official master plan once the detailed layout is released.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      The Entrance Block
    </h2>

    <p className="mt-4 leading-relaxed">
      The entrance to <strong>Sobha Hennur</strong> forms part of the planned residential development on <strong>Hennur Road, Bangalore</strong>. The project is being developed across <strong>45 acres</strong>, with approximately <strong>17 acres forming Phase 1</strong>, and is planned to accommodate <strong>4,400+ units</strong> across the overall development.
    </p>

    <p className="mt-4 leading-relaxed">
      Specific details regarding the entrance plaza, retail or commercial components, dedicated access facilities and other entrance-level features have not been provided in the current project information. Accordingly, no additional features are being attributed to the master plan until they are confirmed in the official project documentation.
    </p>

    <p className="mt-4 leading-relaxed">
      The master plan information described above is based on the current project details provided for Sobha Hennur. Once the <a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">RERA approval</a> is issued, the approved layout, unit details, development parameters and other applicable project information should be verified against the registered documentation.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}