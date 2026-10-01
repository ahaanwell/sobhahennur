/* eslint-disable react/no-unescaped-entities */
export default function RateAnalysis() {
    return (
        <section
            id="analysis"
            aria-labelledby="analysis-heading"
            className="w-full bg-white pt-14 px-4 md:px-0"
        >
            <div className="max-w-5xl mx-auto">
                <h2
                    id="analysis-heading"
                    className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
                >
                    Sobha Hennur Rate per Sq.Ft. Analysis
                </h2>
                <div className="w-full h-px bg-gray-200 mb-5" />
                <img width={1200} height={675}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/analysis.webp"
              alt="Sobha Hennur rate per sq.ft. analysis"
              loading="lazy"
            />
                <div className="space-y-6 mt-6">
                    <div className="space-y-6 text-gray-800">
  <p className="leading-relaxed">
    One number is important when comparing this project fairly with other premium residential developments: <strong><a href="https://www.sobhahennur.co/price">₹2.40 Cr onwards is the current starting price for Sobha Hennur apartments</a></strong>, while the applicable per-sq.ft. value depends on the apartment's configuration and saleable area. Since the project includes multiple apartment types and sizes, comparing only the headline price without considering the apartment's area can give an incomplete picture. The current apartment sizes range from <strong>1,500 to 2,230 Sq.Ft.</strong>, making the area and configuration important factors when evaluating the overall cost.
  </p>

  {/* Scrolls sideways on small screens instead of squeezing the columns */}
  <div className="mt-4 overflow-x-auto">
  <table className="w-full min-w-[560px] border-collapse text-left text-sm md:text-base">
    <thead>
      <tr>
        <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-3 font-semibold">
          Configuration
        </th>
        <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-3 font-semibold">
          Apartment Size (saleable area)
        </th>
        <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-3 font-semibold">
          Starting Price
        </th>
        <th className="border border-gray-300 px-3 py-2 md:px-4 md:py-3 font-semibold">
          Pricing Basis
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          2 BHK Apartments
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          1,500 Sq.Ft. onwards
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          ₹2.40 Cr onwards
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          Based on applicable apartment pricing
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          3 BHK Apartments
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          Up to 2,230 Sq.Ft.
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          Subject to project pricing
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          Based on applicable apartment pricing
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          3.5 BHK Apartments
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          Up to 2,230 Sq.Ft.
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          Subject to project pricing
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          Based on applicable apartment pricing
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          4 BHK Apartments
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          Up to 2,230 Sq.Ft.
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          Subject to project pricing
        </td>
        <td className="border border-gray-300 px-3 py-2 md:px-4 md:py-3">
          Based on applicable apartment pricing
        </td>
      </tr>
    </tbody>
  </table>
  </div>

  <p className="leading-relaxed">
    On that basis, <strong>Sobha Hennur apartments start from approximately ₹2.40 Cr onwards</strong>, with the final price varying according to the selected configuration, apartment size and applicable project pricing. The project is planned across <strong><a href="https://www.sobhahennur.co/master-plan">45 acres</a></strong>, with approximately <strong>17 acres forming Phase 1</strong> and more than <strong>4,400 residential units</strong> planned across the overall development. Additional transaction-related costs should be considered separately when calculating the complete purchase outlay.
  </p>

  <p className="leading-relaxed">
    Two things follow. First, do not compare the starting price of Sobha Hennur directly with another project's headline price without checking the apartment size and configuration, because a lower entry price does not necessarily represent the same property type or saleable area. Second, when you are given another residential project's per-sq.ft. figure, ask what area it is applied to, which configuration it represents and what the quoted price includes before treating it as cheaper.
  </p>

  <p className="leading-relaxed">
    <em>
      Prices are indicative and subject to change. The final figure depends on the apartment's configuration, saleable area and applicable pricing at the time of booking. Since Sobha Hennur is currently in the pre-launch stage and <a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">RERA approval</a> is under process, buyers should verify the latest official cost sheet and applicable charges before making a purchase decision. Possession is currently expected by 2030.
    </em>
  </p>
</div>
                </div>
            </div>
        </section>
    )
};