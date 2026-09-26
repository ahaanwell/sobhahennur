import Link from "next/link";
import { FaLocationDot, FaBuilding } from "react-icons/fa6";

const sobhaProjects = [
  {
    name: "Sobha Liora",
    area: "Whitefield, Immadihalli, Bangalore",
    summary:
      "A boutique-scale luxury address on the Whitefield side of the city. With only around 420 homes spread over 7 acres and roughly 80% of the land kept open, it is aimed at buyers who want larger 3 BHK and above residences in a low-density setting close to the eastern IT belt.",
    details: [
      { label: "Project Type", value: "Luxury Residential Apartments" },
      { label: "Status", value: "Pre-Launch" },
      { label: "Land Area", value: "7 Acres" },
      { label: "Total Units", value: "420 Units Approx." },
      { label: "Configurations", value: "3, 3.5 & 4 BHK Apartments" },
      { label: "Towers & Floors", value: "4 Towers | 2B + G + 17 Floors" },
      { label: "Open Space", value: "80% Open Space" },
      { label: "Starting Price", value: "On Request" },
      { label: "Approvals", value: "RERA & BBMP Approved" },
      { label: "Possession", value: "December 2030" },
      { label: "Developer", value: "Sobha Group" },
    ],
  },
  {
    name: "Sobha One World",
    area: "Off Hoskote, East Bangalore (Opposite Hoskote Toll Plaza)",
    summary:
      "The largest development on this list by a wide margin. Spread across a 350-acre land parcel beyond Hoskote, it is planned as a themed luxury community of tall towers with Vaastu-aligned homes, and it relies on the Kadugudi-Whitefield metro station for rail access into the city.",
    details: [
      { label: "Project Type", value: "Luxury Themed Apartments" },
      { label: "Total Land Area", value: "350 Acres" },
      { label: "Metro Access", value: "Kadugudi-Whitefield Metro Station" },
      { label: "Unit Variants", value: "1, 2, 3 & 4 BHK Apartments" },
      { label: "Total Units", value: "3,484 Vaastu-aligned Units" },
      { label: "Towers & Floors", value: "3B + GF + 46" },
      { label: "Starting Price", value: "₹1.09 Cr Onwards" },
      { label: "RERA", value: "Awaiting Approval (Pre-launch Phase)" },
      { label: "Possession", value: "2031 Onwards (Tentative)" },
    ],
  },
  {
    name: "Sobha Neopolis",
    area: "Panathur Road, Off Marathahalli-ORR, Bengaluru 560087",
    summary:
      "A Greek-inspired high-rise community set just off the Outer Ring Road near Marathahalli. Its 19 towers on nearly 26 acres put it within easy reach of the Bellandur and ORR tech corridor, and it is the only project here with a published RERA number and a 2027 handover.",
    details: [
      { label: "Project Type", value: "Luxury Residential Apartments" },
      { label: "Theme", value: "Greek-inspired Architecture" },
      { label: "Total Land Area", value: "25.86 Acres" },
      { label: "Total Units", value: "1,875 Apartments" },
      { label: "Towers", value: "19 High-rise Towers" },
      { label: "Structure", value: "2 Basements + Ground + 18 Floors" },
      { label: "Open Space", value: "Approximately 78%" },
      { label: "Starting Price", value: "₹95 Lakhs*" },
      { label: "Status", value: "New Launch" },
      { label: "Possession", value: "December 2027" },
      { label: "RERA No.", value: "PRM/KA/RERA/1251/446/PR/200923/006269" },
      { label: "Developer", value: "Sobha Limited" },
    ],
  },
  {
    name: "Sobha Queens Towers",
    area: "Thirumagondanahalli Service Rd, Attibele Industrial Area, Bengaluru 562107",
    summary:
      "Located on the far southern edge of the city towards the Tamil Nadu border, this 36-acre project offers the widest choice of home sizes on this list, from compact 1 BHK units to 4 BHK residences, at one of the most accessible entry prices for a SOBHA address.",
    details: [
      { label: "Total Area", value: "36 Acres" },
      { label: "Total Units", value: "572 Units" },
      { label: "Total Towers", value: "On Request" },
      { label: "Apartment Variants", value: "1, 2, 3, 3.5 & 4 BHK" },
      { label: "Super Built-Up Area", value: "550 – 2,400 sq.ft." },
      { label: "Starting Price", value: "₹70 Lakhs" },
      { label: "RERA Status", value: "To be Announced Soon" },
    ],
  },
  {
    name: "Sobha Madison Heights",
    area: "Electronic City, Main Hosur Road, Attibele Industrial Area, Bengaluru 562107",
    summary:
      "A 33-acre township of 42-storey high-rises along the Hosur Road corridor beyond Electronic City. It suits buyers working in the southern industrial and IT clusters who want a registered project with a wide range of apartment sizes.",
    details: [
      { label: "Township Area", value: "33 Acres" },
      { label: "Total Units", value: "1,120" },
      { label: "Towers", value: "42-Storeyed High-Rises" },
      { label: "Apartment Variants", value: "1, 2, 3 & 4 BHK" },
      { label: "Super Built-Up Area", value: "754 – 2,846 sq.ft." },
      { label: "Starting Price", value: "₹70 Lakhs" },
      { label: "RERA No.", value: "PRM/KA/RERA/1251/308/PR/230125/007420 || 007421" },
    ],
  },
];

export function SobhaProjectCards({ showSummary = true }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {sobhaProjects.map((project, index) => (
        <article
          key={project.name}
          className="bg-gray-50 rounded-2xl p-5 hover:shadow-sm transition-shadow duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
              {index + 1}
            </span>
            <h3 className="text-lg font-semibold text-gray-900">
              {project.name}
            </h3>
          </div>

          <p className="flex items-start gap-2 text-sm text-gray-600 mb-3">
            <FaLocationDot className="mt-1 text-primary flex-shrink-0" aria-hidden="true" />
            {project.area}
          </p>

          {showSummary && (
            <p className="leading-relaxed text-sm mb-4">{project.summary}</p>
          )}

          <dl className="text-sm divide-y divide-gray-200 border-t border-gray-200">
            {project.details.map((item) => (
              <div key={item.label} className="flex justify-between gap-4 py-2">
                <dt className="text-gray-500 flex items-start gap-2">
                  <FaBuilding className="mt-1 text-primary flex-shrink-0" aria-hidden="true" />
                  {item.label}
                </dt>
                <dd className="font-semibold text-gray-800 text-right break-words min-w-0">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </article>
      ))}
    </div>

  );
}

export default function TopSobhaProjects() {
  return (
    <section
      id="top-sobha-projects"
      aria-labelledby="top-sobha-projects-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="top-sobha-projects-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Top 5 Sobha Projects in Bangalore
        </h2>
        <div className="w-full h-px bg-gray-200 mb-5" />

        <p className="leading-relaxed text-gray-800 mb-6">
          Sobha Hennur is one of several <a href="https://www.sobha.com/" target="_blank" rel="nofollow noopener noreferrer">SOBHA</a> communities taking shape across <a href="https://www.sobhahennur.co/bangalore">Bangalore</a>. For buyers who want a wider view before deciding, here is a quick look at five other SOBHA developments in <a href="https://en.wikipedia.org/wiki/Whitefield,_Bangalore" target="_blank" rel="nofollow noopener noreferrer">Whitefield</a>, <a href="https://en.wikipedia.org/wiki/Hoskote" target="_blank" rel="nofollow noopener noreferrer">Hoskote</a>, the <a href="https://en.wikipedia.org/wiki/Marathahalli" target="_blank" rel="nofollow noopener noreferrer">Marathahalli</a>-ORR stretch and the <a href="https://en.wikipedia.org/wiki/Attibele" target="_blank" rel="nofollow noopener noreferrer">Attibele</a>-Hosur Road belt, with their headline numbers side by side.
        </p>

        <SobhaProjectCards showSummary={false} />

        <p className="text-sm text-gray-600 leading-relaxed mt-6">
          Details are indicative and may change. For a zone-by-zone view of the city and how these projects compare with Sobha Hennur, visit the{" "}
          <Link href="/bangalore">
            Bangalore page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
