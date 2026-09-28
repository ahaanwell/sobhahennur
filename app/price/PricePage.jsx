import DownloadActions from "@/components/DownloadActions";
import DownloadCostSheetActions from "@/components/DownloadCostSheetActions";
import PageHero from "@/components/PageHero";

export const priceFaqs = [
  {
    question: "What is the starting price of Sobha Hennur?",
    answer: "The starting price of Sobha Hennur is ₹2.40 crore onwards for a 2 BHK apartment of about 1,500 sq.ft. This is an indicative pre-launch price and may change.",
  },
  {
    question: "What is the price of 3 BHK, 3.5 BHK and 4 BHK apartments at Sobha Hennur?",
    answer: "Indicative starting prices are ₹2.88 crore onwards for 3 BHK (1,750–1,950 sq.ft.), ₹3.36 crore onwards for 3.5 BHK (2,000–2,100 sq.ft.) and ₹3.90 crore onwards for 4 BHK (2,230 sq.ft.). Final prices depend on the unit, floor and official price schedule.",
  },
  {
    question: "What apartment sizes are available at Sobha Hennur?",
    answer: "Sobha Hennur offers 2, 3, 3.5 and 4 BHK apartments with sizes ranging from 1,500 to 2,230 sq.ft.",
  },
  {
    question: "Is Sobha Hennur RERA approved?",
    answer: "RERA approval for Sobha Hennur is currently under process. Buyers should verify the registration on the Karnataka RERA portal before making any booking or payment.",
  },
  {
    question: "Does the Sobha Hennur price include GST, stamp duty and registration?",
    answer: "The starting price is an indicative unit price. GST, stamp duty, registration charges and maintenance deposits are usually payable in addition, so buyers should request a complete cost sheet for the specific apartment.",
  },
  {
    question: "When is possession expected at Sobha Hennur?",
    answer: "Possession at Sobha Hennur is expected by 2030. The final date should be confirmed against the RERA-registered project documents once available.",
  },
];

function PricePage() {

const priceData = [
  { type: "2 BHK", size: "1,500 Sq.Ft.", price: "₹ 2.40 Cr* onwards" },
  { type: "3 BHK", size: "1,750 - 1,950 Sq.Ft.", price: "₹ 2.88 Cr* onwards" },
  { type: "3.5 BHK", size: "2,000 - 2,100 Sq.Ft.", price: "₹ 3.36 Cr* onwards" },
  { type: "4 BHK", size: "2,230 Sq.Ft.", price: "₹ 3.90 Cr* onwards" },
];
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Price"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Hennur Price
          </h1>
          <DownloadActions/>
          <div className="mt-6 space-y-6">
            <div className="space-y-6 text-gray-800">
  <p className="leading-relaxed">
    The <strong>Sobha Hennur Price</strong> starts at ₹2.40 crore onwards for the proposed residential development on <a href="https://www.sobhahennur.co/location">Hennur Road, Bangalore</a>. Marketed as <a href="https://www.sobhahennur.co/">Sobha Hennur</a>, the project is being developed by <a href="https://www.sobha.com/" target="_blank" rel="nofollow noopener noreferrer">SOBHA Limited</a> and is currently in the pre-launch stage.
  </p>

  <p className="leading-relaxed">
    The planned development covers <a href="https://www.sobhahennur.co/master-plan">45 acres</a>, with approximately 17 acres allocated to Phase 1. It is expected to include more than 4,400 apartments in 2, 3, 3.5 and 4 BHK configurations. The stated starting price provides an initial reference for buyers, while the final cost of a home will depend on the selected apartment and the confirmed price schedule.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900">
    Sobha Hennur Price Overview
  </h2>

  <div className="flex flex-col lg:flex-row gap-0 ">

          <div className="flex-1 overflow-x-auto">
            <table
              className="w-full text-sm md:text-base"
              role="table"
              aria-label="Apartment types and pricing"
            >
              <thead>
                <tr className="border bg-primary text-white border-gray-200">
                  <th className="py-1 px-2 font-bold text-center w-1/4">Unit Type</th>
                  <th className="py-1 px-2 font-bold text-center w-1/3">Size</th>
                  <th className="py-1 px-2 font-bold text-center w-1/3">Price</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-300 hover:bg-gray-50 transition"
                  >
                    <td className="py-2 px-2 text-center text-black">{row.type}</td>
                    <td className="py-2 px-2 text-center text-black">{row.size}</td>
                    <td className="py-2 px-2 text-center font-medium text-primary">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 md:px-0">
            <img width={320} height={174}
              className="w-full"
              loading="lazy"
              src="/images/costing-details.webp" alt="Sobha Hennur price and cost sheet details" />
            <DownloadCostSheetActions />
          </div>
        </div>

  <p className="text-sm text-gray-600 leading-relaxed">
    *Prices are indicative pre-launch figures for the base unit and exclude GST, stamp duty, registration and other charges. They are subject to change without notice.
  </p>

  <p className="leading-relaxed">
    The currently available starting price for Sobha Hennur is ₹2.40 crore onwards. This is an indicative entry price for the project and should not be interpreted as the fixed price of every apartment configuration.
  </p>

  <p className="leading-relaxed">
    The project’s apartment sizes range from 1,500 to 2,230 square feet. The table above shows the indicative size band and starting price for each configuration, from a 1,500 sq.ft. 2 BHK at ₹2.40 crore onwards to a 2,230 sq.ft. 4 BHK at ₹3.90 crore onwards. Buyers should refer to the official <a href="https://www.sobhahennur.co/floor-plan">floor plans</a> and price list to confirm the cost of a particular 2, 3, 3.5 or 4 BHK unit.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    Sobha Hennur Price Details
  </h3>

  <table className="mt-4 w-full border-collapse text-left">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-3 font-semibold">
          Price and Project Information
        </th>
        <th className="border border-gray-300 px-4 py-3 font-semibold">
          Details
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Project Name
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Sobha Hennur
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Location
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Hennur Road, Bangalore
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Developer
        </td>
        <td className="border border-gray-300 px-4 py-3">
          SOBHA Limited
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Project Status
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Pre-launch
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Starting Price
        </td>
        <td className="border border-gray-300 px-4 py-3">
          ₹2.40 crore onwards
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Apartment Configurations
        </td>
        <td className="border border-gray-300 px-4 py-3">
          2, 3, 3.5 and 4 BHK
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Apartment Size Range
        </td>
        <td className="border border-gray-300 px-4 py-3">
          1,500–2,230 sq. ft.
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Total Project Area
        </td>
        <td className="border border-gray-300 px-4 py-3">
          45 acres
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Phase 1 Area
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Approximately 17 acres
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Total Units
        </td>
        <td className="border border-gray-300 px-4 py-3">
          4,400+
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          RERA Status
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Approval under process
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Expected Possession
        </td>
        <td className="border border-gray-300 px-4 py-3">
          By 2030
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    Sobha Hennur Price by Apartment Configuration
  </h2>

  <p className="leading-relaxed">
    Sobha Hennur is planned to offer four apartment configurations: 2, 3, 3.5 and 4 BHK. The overall size range is stated as 1,500–2,230 square feet, and each configuration has its own indicative starting price.
  </p>

  <p className="leading-relaxed">
    The configuration-wise figures shared at this stage are indicative pre-launch prices. The final price of a unit may vary with its floor, facing, exact carpet area and the terms set out in the official price schedule.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    2 BHK Apartments
  </h3>

  <p className="leading-relaxed">
    The 2 BHK is the entry configuration, at about 1,500 sq.ft. with an indicative price of ₹2.40 crore onwards. Buyers considering this option should review the confirmed floor plan, room dimensions, area details and applicable price before comparing it with other available homes.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    3 and 3.5 BHK Apartments
  </h3>

  <p className="leading-relaxed">
    The 3 BHK is indicated at 1,750–1,950 sq.ft. from ₹2.88 crore onwards, and the 3.5 BHK at 2,000–2,100 sq.ft. from ₹3.36 crore onwards, giving households with different space requirements two mid-size options. The exact area and price for each layout should be confirmed through the developer’s latest unit-wise details.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    4 BHK Apartments
  </h3>

  <p className="leading-relaxed">
    The 4 BHK is the largest configuration, at about 2,230 sq.ft. with an indicative price of ₹3.90 crore onwards. Buyers evaluating this configuration should consider the final layout, total apartment area and complete purchase cost rather than relying only on the project’s starting price.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    What Determines the Final Sobha Hennur Apartment Cost?
  </h2>

  <p className="leading-relaxed">
    The ₹2.40 crore onwards figure is a starting price, not a complete cost estimate for every home. Before making a purchase decision, buyers should request a detailed quotation for the specific apartment they are considering.
  </p>

  <p className="leading-relaxed">
    The quotation should clarify the applicable unit price and identify any additional charges or payment conditions, such as <a href="https://www.gst.gov.in/" target="_blank" rel="nofollow noopener noreferrer">GST</a>, <a href="https://igr.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">stamp duty and registration</a>, car parking and maintenance deposits. Buyers should also check whether the quoted amount is current and applies to the relevant phase and apartment configuration.
  </p>

  <p className="leading-relaxed">
    Because the project is in the pre-launch stage, pricing and unit availability may be updated as formal project details are released. Any revised price should be reviewed alongside the corresponding floor plan and purchase documents.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    Sobha Hennur Price, RERA Status and Possession
  </h2>

  <p className="leading-relaxed">
    Sobha Hennur is currently described as a pre-launch project, with RERA approval under process. Buyers should verify the registration status and relevant disclosures on the <a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">Karnataka RERA portal</a> before making a booking or payment.
  </p>

  <p className="leading-relaxed">
    The expected possession timeline is by 2030. This is a stated expectation and should be confirmed against the applicable phase and formal project documents when available.
  </p>

  <p className="leading-relaxed">
    The project is planned across 45 acres, with approximately 17 acres assigned to Phase 1 and more than 4,400 units across the overall development. Buyers should confirm which phase includes the apartment they are considering and review the corresponding schedule and terms.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    Key Checks Before Evaluating Sobha Hennur Price
  </h2>

  <p className="leading-relaxed">
    Before comparing the price with other residential options, prospective buyers should:
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Request the latest unit-wise price list.</li>
    <li>Confirm the apartment’s configuration, size and floor plan.</li>
    <li>Ask for a complete cost sheet showing applicable charges.</li>
    <li>Verify the phase and unit details covered by the quotation.</li>
    <li>Check the project’s RERA status and formal disclosures.</li>
    <li>Confirm the possession timeline in the relevant documents.</li>
  </ul>

  <p className="leading-relaxed">
    These checks help buyers understand the full financial commitment rather than relying on the starting price alone.
  </p>

  <p className="leading-relaxed">
    Buyers can use the starting price as an initial reference, then assess the final quotation, apartment layout, phase details and expected possession timeline before making a decision. You can also compare it with <a href="https://www.sobhahennur.co/bangalore">other Sobha projects in Bangalore</a> and review the <a href="https://www.sobhahennur.co/amenities">amenities</a> planned for the project.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    Sobha Hennur Price FAQs
  </h2>

  {priceFaqs.map((faq) => (
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

export default PricePage;
