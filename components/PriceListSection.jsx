/* eslint-disable react/no-unescaped-entities */
import EMICalculator from "./Emicalculator";
import DownloadCostSheetActions from "./DownloadCostSheetActions";

const priceData = [
  { type: "2 BHK", size: "1,500 Sq.Ft.", price: "₹ 2.40 Cr* onwards" },
  { type: "3 BHK", size: "1,750 - 1,950 Sq.Ft.", price: "₹ 2.88 Cr* onwards" },
  { type: "3.5 BHK", size: "2,000 - 2,100 Sq.Ft.", price: "₹ 3.36 Cr* onwards" },
  { type: "4 BHK", size: "2,230 Sq.Ft.", price: "₹ 3.90 Cr* onwards" },
];

export default function PriceListSection() {

  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Apartment Types and Price
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="text-gray-800 space-y-6 pb-5">
           <p className="leading-relaxed">
    Apartments at <strong>Sobha Hennur</strong> are planned in <strong><a href="https://www.sobhahennur.co/floor-plan">2, 3, 3.5 & 4 BHK configurations</a></strong>, with sizes ranging from <strong>1,500 to 2,230 sq.ft.</strong> The current indicative starting price is <strong><a href="https://www.sobhahennur.co/price">₹2.40 Cr onwards</a></strong>. The project is planned across <strong>45 acres</strong>, with approximately <strong>17 acres allocated to Phase 1</strong> and <strong>4,400+ units</strong> planned across the development.
  </p>

  <p className="leading-relaxed">
    The available apartment configuration and size range provides homebuyers with multiple options, from 2 BHK residences to larger 4 BHK homes. As the project is currently at the <strong>pre-launch stage</strong>, the final price may vary depending on the selected configuration, apartment size and availability.
  </p>
        </div>
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
              src="/images/costing-details.webp" alt="Costing Details" />
            <DownloadCostSheetActions />
          </div>
        </div>
        <div className="space-y-6 mt-6">
          <div className="space-y-6 text-gray-800">
  <p className="leading-relaxed">
    *Prices are indicative and subject to change. The <strong>₹2.40 Cr onwards</strong> figure represents the current stated starting price for the project. Apartment pricing may differ based on configuration, size and availability. <strong><a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">RERA approval is under process</a></strong>, so buyers should confirm the latest official price sheet and project documentation before proceeding.
  </p>

  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      How the Quoted Figure Is Built
    </h2>

    <p className="mt-4 leading-relaxed">
      The headline starting price of <strong>₹2.40 Cr onwards</strong> represents the current indicative entry price for <strong>Sobha Hennur</strong>. The final amount payable for an apartment can vary according to the selected <strong>2, 3, 3.5 or 4 BHK configuration</strong>, the apartment's size and its availability.
    </p>

    <p className="mt-4 leading-relaxed">
      The project offers homes between <strong>1,500 and 2,230 sq.ft.</strong>, so the final price should be evaluated against the specific apartment rather than only against the headline starting figure. Since the development is still at the <strong>pre-launch stage</strong>, buyers should request the current cost sheet and verify all applicable charges before making a decision.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Why Apartment Configuration Moves the Price
    </h2>

    <p className="mt-4 leading-relaxed">
      The difference between the starting price and the final price of an apartment is influenced by more than the headline configuration. <strong>Sobha Hennur</strong> offers four principal apartment types—<strong>2, 3, 3.5 and 4 BHK</strong>—with sizes ranging from <strong>1,500 to 2,230 sq.ft.</strong>
    </p>

    <p className="mt-4 leading-relaxed">
      A larger configuration and a larger apartment size naturally represent a different pricing point from the project's <strong>₹2.40 Cr onwards</strong> starting figure. Therefore, the choice between configurations is an important financial consideration, particularly when comparing a 2 BHK with a 3, 3.5 or 4 BHK residence.
    </p>

    <p className="mt-4 leading-relaxed">
      The project is currently in the <strong>pre-launch stage</strong>, so prospective buyers should confirm the price applicable to the specific apartment configuration and size they are considering rather than relying only on the headline starting price.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Cost Sheet and Pre-Launch Terms
    </h2>

    <p className="mt-4 leading-relaxed">
      Because <strong>Sobha Hennur</strong> is currently a <strong>pre-launch project</strong> and its <strong>RERA approval is under process</strong>, the final registered project documentation and applicable cost details are not yet available in the information provided here. The current <strong>₹2.40 Cr onwards</strong> starting price should therefore be treated as an indicative figure and may change as the project progresses.
    </p>

    <p className="mt-4 leading-relaxed">
      What can be confirmed at this stage is the current project framework: <strong>45 acres</strong> of total development area, approximately <strong>17 acres in Phase 1</strong>, <strong>4,400+ units</strong>, <strong>2, 3, 3.5 & 4 BHK apartments</strong>, apartment sizes of <strong>1,500–2,230 sq.ft.</strong>, and an indicative starting price of <strong>₹2.40 Cr onwards</strong>.
    </p>

    <p className="mt-4 leading-relaxed">
      The <strong>milestone-wise payment schedule has not been provided</strong>. Prospective buyers should request the latest official cost sheet and payment schedule and verify the applicable terms before making any financial commitment. The same applies to the expected <strong>2030 possession date</strong>, which should be checked against the final registered project documentation once available.
    </p>

    <p className="mt-4 leading-relaxed">
      All pricing, availability and project timelines should be considered subject to change at the current pre-launch stage and verified against the latest official information from <strong><a href="https://www.sobha.com/" target="_blank" rel="nofollow noopener noreferrer">SOBHA Limited</a></strong> before proceeding.
    </p>
  </div>

  <div>
    <p className="leading-relaxed">
      Every home at <strong>Sobha Hennur</strong> is planned as a premium apartment within the development, with no bare plots or self-build <strong>apartments</strong> involved. The project offers <strong>2, 3, 3.5 & 4 BHK apartments</strong>, providing four principal residential configurations. Apartment sizes range from <strong>1,500 to 2,230 sq.ft.</strong>, giving buyers multiple options based on their space requirements.
    </p>

    <p className="mt-4 leading-relaxed">
      Read the configuration and size details carefully, because these are the key figures when evaluating an apartment project. The <strong>apartment size</strong> represents the stated residential area of each home, ranging from <strong>1,500 to 2,230 sq.ft.</strong> The current indicative starting price for <strong>Sobha Hennur is ₹2.40 Cr onwards</strong>. The final price depends on the selected apartment configuration, size and availability, so the starting figure should not be treated as the price of every residence.
    </p>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      How the Apartment Configurations Are Arranged
    </h2>

    <ul className="mt-4 list-disc space-y-2 pl-6">
      <li>
        <strong>2 BHK:</strong> a residential configuration planned for buyers looking for a spacious two-bedroom home within the premium development.
      </li>
      <li>
        <strong>3 BHK:</strong> a larger family-oriented apartment configuration offering additional residential space.
      </li>
      <li>
        <strong>3.5 BHK:</strong> an expanded apartment configuration that provides an additional half-bedroom space along with the primary bedrooms and living areas.
      </li>
      <li>
        <strong>4 BHK:</strong> the largest principal configuration planned at Sobha Hennur, intended for buyers seeking a more spacious premium residence.
      </li>
    </ul>

    <p className="mt-4 leading-relaxed">
      The project offers apartment sizes between <strong>1,500 and 2,230 sq.ft.</strong>, across the four configurations. The availability of different apartment types allows prospective buyers to compare their space requirements and budget before selecting a specific home.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Setbacks and the Building Envelope
    </h2>

    <p className="mt-4 leading-relaxed">
      The project is planned as a <strong><a href="https://www.sobhahennur.co/master-plan">45-acre premium luxury residential development</a></strong> on <strong><a href="https://www.sobhahennur.co/location">Hennur Road, Bangalore</a></strong>, with <strong>Phase 1</strong> covering approximately <strong>17 acres</strong>. As the project is currently at the <strong>pre-launch stage</strong> and <strong>RERA approval is under process</strong>, detailed building-envelope and setback information has not been provided in the current project details.
    </p>

    <p className="mt-4 leading-relaxed">
      The applicable approved plans, building specifications and development parameters should be verified against the official project documentation once the relevant approvals are available.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}