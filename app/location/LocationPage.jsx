/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const locationFaqs = [
  {
    question: "Where is Sobha Hennur located?",
    answer: "Sobha Hennur is located on Hennur Road in Bangalore, in the northern and north-eastern part of the city. Buyers should confirm the exact site address with the developer.",
  },
  {
    question: "Who is developing Sobha Hennur?",
    answer: "Sobha Hennur is being developed by SOBHA Limited and is currently at the pre-launch stage.",
  },
  {
    question: "How big is the Sobha Hennur project?",
    answer: "The project is planned across 45 acres, with approximately 17 acres in Phase 1 and more than 4,400 apartments across the overall development.",
  },
  {
    question: "What is the future potential of Hennur Road?",
    answer: "Hennur Road is part of Bangalore's evolving residential landscape. Any future infrastructure, such as road or public transport upgrades, should be verified through official announcements before it is factored into a purchase decision.",
  },
  {
    question: "What apartment options and prices are available at Sobha Hennur?",
    answer: "Sobha Hennur is planned with 2, 3, 3.5 and 4 BHK apartments from 1,500 to 2,230 sq.ft., with prices starting from ₹2.40 crore onwards.",
  },
  {
    question: "Is Sobha Hennur RERA approved?",
    answer: "RERA approval for Sobha Hennur is currently under process, and possession is expected by 2030. Buyers should verify the registration on the Karnataka RERA portal once issued.",
  },
];

function LocationPage() {
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2321051781355!2d77.6299432!3d13.0208861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171e2f9917d3%3A0xa89ad8fa1447f15a!2sHennur%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1790360428883!5m2!1sen!2sin";

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Hennur Location
          </h1>
          <DownloadActions/>
          <div className="mt-6 space-y-6">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <div className="w-full h-[380px] md:h-[460px]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sobha Hennur location map — Hennur Road, Bangalore"
              aria-label="Google Maps showing Sobha Hennur location on Hennur Road, Bangalore"
            />
          </div>

          <Link
            href="https://maps.app.goo.gl/mgHt22xpDC33Br8B9"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Know more about Sobha Hennur location on Hennur Road, Bangalore"
            className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
          >
            Know More About Location
          </Link>
        </div>
            <div className="space-y-6 text-gray-800">
  <p className="leading-relaxed">
    The <strong>Sobha Hennur Location</strong> places the proposed residential development on Hennur Road in <a href="https://en.wikipedia.org/wiki/Bangalore" target="_blank" rel="nofollow noopener noreferrer">Bangalore</a>. The project is marketed as <a href="https://www.sobhahennur.co/">Sobha Hennur</a>, reflecting its location, and is being developed by <a href="https://www.sobha.com/" target="_blank" rel="nofollow noopener noreferrer">SOBHA Limited</a>. It is currently in the pre-launch stage.
  </p>

  <p className="leading-relaxed">
    For homebuyers, the location deserves attention not only because of the project’s address, but also because Hennur is part of Bangalore’s evolving residential landscape. Its relevance can be assessed through the area’s position within the city, the project’s planned scale, and the practical considerations buyers should examine before purchasing a home.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900">
    Where Is Sobha Hennur Located?
  </h2>

  <img width={1200} height={739}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/hennur-road.webp"
              alt="Hennur Road, Bangalore - location of Sobha Hennur"
              loading="lazy"
            />

  <p className="leading-relaxed">
    Sobha Hennur is located on <a href="https://www.magicbricks.com/Hennur-Main-Road-in-Bangalore-Overview" target="_blank" rel="nofollow noopener noreferrer"><strong>Hennur Road, Bangalore</strong></a>. This is the confirmed location information available for the project. The marketing name uses “Hennur” to identify the locality; it should not be treated as confirmation of a more specific street address or a separate project name.
  </p>

  <p className="leading-relaxed">
    Hennur is an established place name within Bangalore’s northern and northeastern urban landscape. Its location makes it relevant to buyers comparing residential options in this part of the city. However, a project’s general locality does not by itself establish travel times, distance to workplaces, or access to particular services.
  </p>

  <p className="leading-relaxed">
    For an accurate assessment, buyers should confirm the project’s exact site address and evaluate their regular travel routes from that point. This is particularly important when comparing properties, as two developments associated with the same locality may have different access conditions.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    Why Hennur Is a Location of Interest for Homebuyers
  </h2>

  <h3 className="text-xl font-semibold text-gray-900">
    A Residential Area Within a Growing City
  </h3>

  <p className="leading-relaxed">
    Bangalore’s residential choices extend across several corridors (see our <a href="https://www.sobhahennur.co/bangalore">Bangalore guide and top Sobha projects</a>), and Hennur is one of the locations buyers may consider when exploring homes in the northern and northeastern parts of the city. The area’s relevance should be assessed in relation to a buyer’s workplace, family requirements, commute patterns, and preferred neighbourhood environment.
  </p>

  <p className="leading-relaxed">
    Rather than relying on broad claims that a locality is “the best,” homebuyers can compare measurable factors such as daily travel time, road access, nearby services, and the availability of suitable housing options.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    Location Suitability Depends on Daily Travel
  </h3>

  <p className="leading-relaxed">
    The value of a <strong>residential location</strong> is closely connected to how well it supports a household’s routine. Buyers considering Sobha Hennur should map their usual destinations—such as offices, schools, healthcare facilities, and family-related locations—and check actual travel conditions at different times of day.
  </p>

  <p className="leading-relaxed">
    The project information provided confirms Hennur Road as the location but does not include verified distances or travel times to specific destinations. These should be checked independently using the exact site address rather than assumed from the project’s marketing name.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    Sobha Hennur Location and the Project’s Planned Scale
  </h2>

  <p className="leading-relaxed">
    Sobha Hennur is planned as a premium residential development across <a href="https://www.sobhahennur.co/master-plan">45 acres</a>, with approximately 17 acres identified for Phase 1. The proposed development includes more than 4,400 apartments.
  </p>

  <p className="leading-relaxed">
    The scale is relevant to buyers because it indicates that the project is planned as a large residential community rather than a small standalone apartment building. However, the total land area and unit count do not, on their own, confirm the final layout, open-space allocation, building arrangement, or phase-wise facilities.
  </p>

  <p className="leading-relaxed">
    Buyers should review the approved <a href="https://www.sobhahennur.co/master-plan">master plan</a>, the planned <a href="https://www.sobhahennur.co/amenities">amenities</a> and phase-specific documents when they become available. These can provide clearer information about the land included in each phase and the components covered by the purchase.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    What Is the Future Potential of Hennur?
  </h2>

  <p className="leading-relaxed">
    When assessing the future of a residential location, it is useful to distinguish between confirmed project information and broader expectations about urban development. Hennur’s relevance to a homebuyer will depend on how the locality and the surrounding city infrastructure serve that buyer over time.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    Evaluate Infrastructure Through Verified Updates
  </h3>

  <p className="leading-relaxed">
    Road improvements, public transport plans such as the <a href="https://english.bmrc.co.in/" target="_blank" rel="nofollow noopener noreferrer">Namma Metro</a> network, civic services, and other infrastructure can affect how convenient an area is for residents. However, no specific upcoming infrastructure project, completion date, or connectivity improvement has been confirmed in the project details provided here.
  </p>

  <p className="leading-relaxed">
    Before factoring future infrastructure into a purchase decision, buyers should check current official announcements and determine whether a proposed project is approved, under construction, or merely being discussed. They should also consider whether the infrastructure would meaningfully affect their own commute or daily needs.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    Consider Long-Term Residential Needs
  </h3>

  <p className="leading-relaxed">
    A location’s future suitability is not limited to property value expectations. Buyers should consider whether the area and the apartment configuration can support their household over several years.
  </p>

  <p className="leading-relaxed">
    Sobha Hennur is planned with <a href="https://www.sobhahennur.co/floor-plan">2, 3, 3.5 and 4 BHK apartments</a>, with sizes ranging from 1,500 to 2,230 square feet and prices from <a href="https://www.sobhahennur.co/price">₹2.40 crore onwards</a>. This range may accommodate different space requirements, but the suitability of a specific home depends on its final floor plan, room dimensions, usable area, and price.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    Sobha Hennur: Project Details at a Glance
  </h2>

  <table className="mt-4 w-full border-collapse text-left">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-3 font-semibold">
          Project Detail
        </th>
        <th className="border border-gray-300 px-4 py-3 font-semibold">
          Information
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
          Project Type
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Premium luxury residential
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Status
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Pre-launch
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Total Area
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
          Apartment Types
        </td>
        <td className="border border-gray-300 px-4 py-3">
          2, 3, 3.5 and 4 BHK
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          Size Range
        </td>
        <td className="border border-gray-300 px-4 py-3">
          1,500–2,230 sq. ft.
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

  <p className="leading-relaxed">
    These are the currently provided project details. As the project is pre-launch and <a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">RERA approval</a> is under process, buyers should confirm updated information through formal project documents before making a financial commitment.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    How to Assess the Location Before Buying
  </h2>

  <p className="leading-relaxed">
    A practical location review should include more than the locality name. Before evaluating Sobha Hennur, prospective buyers can:
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      Confirm the exact site address and access road.
    </li>
    <li>
      Check actual travel times to regular destinations during peak and off-peak hours.
    </li>
    <li>
      Review available public transport, including <a href="https://mybmtc.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">BMTC bus routes</a>, and road connectivity using current information.
    </li>
    <li>
      Visit the surrounding area to understand its present-day conditions.
    </li>
    <li>
      Verify any proposed infrastructure improvements through official updates.
    </li>
    <li>
      Review the project’s approved plans, phase details, and RERA status when available.
    </li>
    <li>
      Compare the apartment’s layout, size, and total cost with household requirements.
    </li>
  </ul>

  <p className="leading-relaxed">
    These steps help separate the confirmed characteristics of the project from assumptions about future development.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    Sobha Hennur Location FAQs
  </h2>

  {locationFaqs.map((faq) => (
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

export default LocationPage;
