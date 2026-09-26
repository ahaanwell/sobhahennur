/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { SobhaProjectCards } from "@/components/TopSobhaProjects";

function BangalorePage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Bangalore"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Hennur Bangalore
          </h1>
          <DownloadActions />

          <div className="space-y-6 text-gray-800 mt-8">
            <img
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/bangalore.webp"
              alt="Bangalore city skyline and residential growth"
              loading="lazy"
            />

            <p className="leading-relaxed">
              Choosing a home in <strong><a href="https://en.wikipedia.org/wiki/Bangalore" target="_blank" rel="nofollow noopener noreferrer">Bengaluru</a></strong> is rarely a decision about the city alone. It is a decision about which part of the city fits your working life, your children's schooling and the way you want to spend your weekends. A metropolis of this size behaves less like one market and more like several smaller ones stitched together, each with its own pace of growth, price bands and commuting patterns. This page looks at Bangalore through that lens and explains where <strong>Sobha Hennur</strong> sits within it.
            </p>

            <p className="leading-relaxed">
              Over the last two decades the city has moved outward from its older core around MG Road, Jayanagar and Malleshwaram. Employment clusters formed along the Outer Ring Road, in <a href="https://en.wikipedia.org/wiki/Whitefield,_Bangalore" target="_blank" rel="nofollow noopener noreferrer">Whitefield</a>, in <a href="https://en.wikipedia.org/wiki/Electronic_City" target="_blank" rel="nofollow noopener noreferrer">Electronic City</a> and, more recently, along the northern stretch leading to the airport at <a href="https://en.wikipedia.org/wiki/Devanahalli" target="_blank" rel="nofollow noopener noreferrer">Devanahalli</a>. Housing followed those jobs, and every major developer, <strong><a href="https://en.wikipedia.org/wiki/Sobha_Developers_Ltd" target="_blank" rel="nofollow noopener noreferrer">SOBHA Limited</a></strong> included, built its portfolio around these new centres of demand.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Bangalore's Residential Market, Zone by Zone
            </h2>

            <p className="leading-relaxed">
              A simple way to understand the city is to divide it into broad directions. The boundaries are informal, but they help a buyer shortlist quickly before visiting any site.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>North and North-East:</strong> <a href="https://en.wikipedia.org/wiki/Hebbal" target="_blank" rel="nofollow noopener noreferrer">Hebbal</a>, Thanisandra, Jakkur, <a href="https://en.wikipedia.org/wiki/Yelahanka" target="_blank" rel="nofollow noopener noreferrer">Yelahanka</a> and the <a href="https://www.sobhahennur.co/location">Hennur belt</a>. This side gained momentum once the international airport moved north, and it continues to attract buyers who value airport access and relatively newer neighbourhoods.
              </li>
              <li>
                <strong>East:</strong> Whitefield, KR Puram, Varthur and Panathur. Long anchored by technology parks, this zone has deep rental demand and a mature supply of gated communities.
              </li>
              <li>
                <strong>South-East:</strong> Sarjapur Road, Bellandur and HSR Layout. Proximity to the Outer Ring Road offices has made this one of the most actively traded parts of the city.
              </li>
              <li>
                <strong>South:</strong> Electronic City, Kanakapura Road and Bannerghatta Road. These areas mix established layouts with newer high-rise projects and tend to offer a wider spread of budgets.
              </li>
              <li>
                <strong>Central and West:</strong> older, denser neighbourhoods with limited new land, where fresh large-format launches are uncommon and resale dominates.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              Where Hennur Fits on the City Map
            </h2>

            <p className="leading-relaxed">
              <a href="https://www.sobhahennur.co/location">Hennur</a> lies in the north-eastern quadrant, between the Outer Ring Road to its south and the airport-bound corridors to its north. It is flanked by Kalyan Nagar and HRBR Layout on one side and Thanisandra on the other, which means residents are close to neighbourhoods that already have running schools, clinics, cafés and retail rather than waiting for them to arrive.
            </p>

            <p className="leading-relaxed">
              For a buyer comparing zones, Hennur's appeal is a balance. It is further from the crowded tech belts of the south-east, yet it keeps reasonable access to <a href="https://en.wikipedia.org/wiki/Manyata_Tech_Park" target="_blank" rel="nofollow noopener noreferrer">Manyata Tech Park</a> and the Outer Ring Road, and a more direct route north towards <a href="https://www.bengaluruairport.com/" target="_blank" rel="nofollow noopener noreferrer">Kempegowda International Airport</a> than most eastern or southern suburbs can offer. That in-between position is exactly why a <strong><a href="https://www.sobhahennur.co/master-plan">45-acre SOBHA development</a></strong> in this corridor stands out.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Infrastructure That Shapes Bangalore Home Values
            </h2>

            <p className="leading-relaxed">
              Property prices in Bangalore have historically tracked infrastructure more closely than almost anything else. Three categories are worth watching for any address in the city:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Metro expansion:</strong> the <a href="https://en.wikipedia.org/wiki/Namma_Metro" target="_blank" rel="nofollow noopener noreferrer">Namma Metro</a> network continues to add lines and stations across the city. Proximity to a working or sanctioned station can change daily commuting and resale appeal, so check the latest alignment and timelines published by <a href="https://english.bmrc.co.in/" target="_blank" rel="nofollow noopener noreferrer">BMRCL</a> rather than relying on marketing brochures.
              </li>
              <li>
                <strong>Road and flyover upgrades:</strong> ring roads, grade separators and widened arterials decide how long it actually takes to reach your office. Announced projects often take years to complete, so value only what is under active construction.
              </li>
              <li>
                <strong>Employment hubs:</strong> tech parks and business districts create the rental demand that supports long-term value. Manyata Tech Park and the Outer Ring Road offices are the major job centres relevant to North-East Bangalore.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              SOBHA Limited's Footprint in Bangalore
            </h2>

            <p className="leading-relaxed">
              Bangalore is <a href="https://www.sobha.com/" target="_blank" rel="nofollow noopener noreferrer">SOBHA</a>'s home market. The company's headquarters are in the city, and much of its residential portfolio has been built here across the north, east and south. Buyers often associate the brand with its in-house, backward-integrated construction model, in which the developer controls much of its own design, interiors, glazing and concrete work rather than outsourcing it.
            </p>

            <p className="leading-relaxed">
              For a buyer, that history offers something practical: completed SOBHA communities already exist across the city, so you can visit them, see how buildings and common areas have aged, and speak to residents. That is the most reliable way to judge what a future SOBHA project may feel like, and it applies directly to evaluating a pre-launch project such as Sobha Hennur.
            </p>
          </div>

          <div className="space-y-6 text-gray-800 mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Top 5 Sobha Projects in Bangalore
            </h2>
            <div className="w-full h-px bg-gray-200 mb-5" />

            <p className="leading-relaxed">
              The five SOBHA developments below are spread across the east, the south and the Outer Ring Road belt. It is not a ranking by price or size; it is a cross-section that shows how the developer's product changes from one corridor to another, from a 7-acre low-density enclave in Whitefield to a 350-acre themed community near <a href="https://en.wikipedia.org/wiki/Hoskote" target="_blank" rel="nofollow noopener noreferrer">Hoskote</a>. Seeing them together also makes it easier to judge where <Link href="/">Sobha Hennur</Link> in North-East Bangalore fits in.
            </p>

            <SobhaProjectCards />
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Note:</strong> the projects above are listed for comparison. Prices marked with an asterisk are indicative, and availability, pricing, possession dates and RERA details can change over time, so confirm current information on the developer's official website or the Karnataka RERA portal before acting on it.
            </p>
          </div>

          <div className="space-y-6 text-gray-800 mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              How Sobha Hennur Compares With Other SOBHA Addresses
            </h2>

            <p className="leading-relaxed">
              Placed alongside the five projects above, Sobha Hennur differs in three ways. First, it is the only one on the Hennur corridor in North-East Bangalore, whereas the others are concentrated in Whitefield, Hoskote, the Outer Ring Road and the Attibele-Hosur Road belt. Second, its homes start at <strong><a href="https://www.sobhahennur.co/floor-plan">1,500 sq.ft.</a></strong>, so it skips the compact 1 BHK units offered at Sobha One World, Sobha Queens Towers and Sobha Madison Heights and focuses on larger family homes. Third, at <strong>45 acres</strong> it sits between the boutique scale of Sobha Liora and the very large footprint of Sobha One World, and it is planned in phases so the community inside the project grows over several years.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 font-semibold">
                      Factor
                    </th>
                    <th className="border border-gray-300 px-4 py-3 font-semibold">
                      Sobha Hennur
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">City zone</td>
                    <td className="border border-gray-300 px-4 py-3">North-East Bangalore</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Nearest established neighbourhoods</td>
                    <td className="border border-gray-300 px-4 py-3">Kalyan Nagar, HRBR Layout, Thanisandra</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Land parcel</td>
                    <td className="border border-gray-300 px-4 py-3">45 acres overall, about 17 acres in Phase 1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Home types</td>
                    <td className="border border-gray-300 px-4 py-3">2, 3, 3.5 & 4 BHK</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Size band</td>
                    <td className="border border-gray-300 px-4 py-3">1,500 – 2,230 sq.ft.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Entry price</td>
                    <td className="border border-gray-300 px-4 py-3">₹2.40 Cr onwards (indicative)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Stage</td>
                    <td className="border border-gray-300 px-4 py-3">Pre-launch, RERA approval under process</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Expected handover</td>
                    <td className="border border-gray-300 px-4 py-3">2030</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900">
              Who Should Look at North-East Bangalore
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Professionals working around <strong>Manyata Tech Park, Hebbal or the northern Outer Ring Road</strong> who want a shorter daily drive.
              </li>
              <li>
                Frequent flyers who would rather be on the <strong>airport side of the city</strong> than cross it at peak hour.
              </li>
              <li>
                Families upgrading from a smaller apartment who want a <strong>larger home in a planned community</strong> with <a href="https://www.sobhahennur.co/amenities">shared amenities</a> without moving to the far periphery.
              </li>
              <li>
                Long-horizon buyers comfortable with a <strong>2030 possession</strong> in exchange for pre-launch entry into a new SOBHA community.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              A Short Checklist Before Buying in Bangalore
            </h2>

            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Fix your non-negotiables first: office location, school, and a realistic peak-hour commute limit.
              </li>
              <li>
                Visit at least one completed project by the same developer and inspect how it has been maintained.
              </li>
              <li>
                Search the project on the <strong><a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">Karnataka RERA</a></strong> portal and match the registered details with what you are told on site.
              </li>
              <li>
                Ask for a full cost sheet, including <a href="https://www.gst.gov.in/" target="_blank" rel="nofollow noopener noreferrer">GST</a>, <a href="https://igr.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">stamp duty</a>, registration, maintenance deposits and parking, not just the base rate.
              </li>
              <li>
                Have an independent lawyer review title documents and the sale agreement before paying anything beyond a refundable booking amount.
              </li>
            </ol>

            <p className="leading-relaxed">
              Bangalore rewards buyers who pick the right corridor for their own routine rather than the one that is trending. If North-East Bangalore matches yours, Sobha Hennur is worth putting on your shortlist, and the <Link href="/price">price</Link>, <Link href="/floor-plan">floor plan</Link> and <Link href="/location">location</Link> pages give you the details you need to take the next step.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default BangalorePage;
