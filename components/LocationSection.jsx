/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const landmarks = [
  { label: "Outer Ring Road", detail: "Immediate Access" },
  { label: "Sarjapur Road", detail: "10–15 Minutes" },
  { label: "Electronic City", detail: "25–30 Minutes" },
  { label: "Koramangala", detail: "20 Minutes" },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2321051781355!2d77.6299432!3d13.0208861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171e2f9917d3%3A0xa89ad8fa1447f15a!2sHennur%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1790360428883!5m2!1sen!2sin";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full bg-white pt-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="location-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Location & Connectivity
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p className="leading-relaxed">
    Sobha Hennur is located on <strong><a href="https://www.sobhahennur.co/location">Hennur Road</a>, <a href="https://en.wikipedia.org/wiki/Bangalore" target="_blank" rel="nofollow noopener noreferrer">Bangalore</a></strong>, placing the project within a well-established residential corridor in the city's eastern and northeastern part. Hennur Road connects several residential neighbourhoods and provides access to important parts of Bangalore through its surrounding road network.
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>Micro-market:</strong> Hennur Road, Bangalore
    </li>
    <li>
      <strong>Location character:</strong> Established residential corridor
    </li>
    <li>
      <strong>Road:</strong> Hennur Road
    </li>
    <li>
      <strong>City:</strong> Bangalore
    </li>
  </ul>
</div>
<div className="space-y-6 text-gray-800 mb-6">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900">
      Landmark & Coordinates
    </h2>

    <ul className="mt-4 list-disc space-y-2 pl-6">
      <li>
        <strong>Location:</strong> Hennur Road, Bangalore
      </li>
      <li>
        <strong>Wider context:</strong> Hennur Road and surrounding residential neighbourhoods
      </li>
      <li>
        <strong>Primary access:</strong> Hennur Road
      </li>
      <li>
        <strong>Project status:</strong> Pre-Launch
      </li>
    </ul>
  </div>
</div>

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

        <div className="space-y-6 mt-6">
          <div className="space-y-6 text-gray-800">
    <h2 className="text-2xl font-semibold text-gray-900">
      The Setting
    </h2>

    <p className="mt-4 leading-relaxed">
      Hennur Road has developed into a prominent residential destination in Bangalore, with a combination of established neighbourhoods, apartment communities, schools, healthcare facilities, retail destinations and everyday services. The corridor also connects with several important roads leading towards other parts of the city.
    </p>

    <p className="mt-4 leading-relaxed">
      The surrounding area has a predominantly urban-residential character, making Hennur Road relevant for homebuyers looking for a location where residential communities sit alongside established social infrastructure. The road also provides access towards adjoining areas such as <strong>Hennur, Kalyan Nagar, HRBR Layout, <a href="https://en.wikipedia.org/wiki/Banaswadi" target="_blank" rel="nofollow noopener noreferrer">Banaswadi</a> and Thanisandra</strong>, depending on the route taken.
    </p>

    <p className="mt-4 leading-relaxed">
      One of the practical advantages of evaluating a Hennur Road address is the ability to connect the project location with the destinations that form part of everyday life. Schools, hospitals, offices, shopping areas and public transport options can all be assessed based on the particular route and time of travel.
    </p>

    <p className="mt-4 leading-relaxed">
      For buyers considering <a href="https://www.sobhahennur.co/location">the location</a>, the most useful approach is to check the actual journey from <strong>Sobha Hennur on Hennur Road</strong> to the places they regularly visit. Bangalore traffic conditions can change considerably during peak hours, so live route times provide a more realistic picture than a fixed distance alone.
    </p>
</div>
<div className="space-y-6 text-gray-800">
    <h2 className="text-2xl font-semibold text-gray-900">
      What's Nearby and How to Get There
    </h2>

    <p className="mt-4 leading-relaxed">
      The location provides access to a range of established residential and commercial neighbourhoods around <strong>Hennur Road</strong>. Nearby areas such as <strong>Kalyan Nagar, HRBR Layout and Banaswadi</strong> contribute to the surrounding social and commercial ecosystem, while connections towards <strong>Thanisandra</strong> provide access to another major residential and employment corridor.
    </p>

    <p className="mt-4 leading-relaxed">
      <strong>Hennur Road</strong> itself serves as the primary approach to the project. From the wider corridor, residents can connect to adjoining roads and neighbourhoods depending on their destination. The exact travel time will vary according to the route, traffic and time of day.
    </p>

    <p className="mt-4 leading-relaxed">
      For daily requirements, buyers can evaluate the surrounding location based on access to <strong>schools, hospitals, supermarkets, restaurants, shopping destinations and workplaces</strong>. These facilities are distributed across the Hennur Road corridor and nearby neighbourhoods rather than being concentrated at a single point.
    </p>

    <p className="mt-4 leading-relaxed">
      Public transport connectivity should also be assessed according to the nearest available <a href="https://mybmtc.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">BMTC bus routes</a> and other transport options at the time of travel. Since schedules and routes can change, current information should be checked before relying on a particular service for regular commuting.
    </p>

    <p className="mt-4 leading-relaxed">
      For airport or city-wide travel, the practical journey should be measured from the project's location using a current mapping application. This is particularly important for Bangalore, where peak-hour traffic can have a significant effect on actual travel time.
    </p>

    <p className="mt-4 leading-relaxed">
      Where a specific school, hospital, office or other destination is important to you, it is best to measure that route yourself from the project location at the time you would normally travel. This provides a more useful understanding of <strong>Sobha Hennur connectivity</strong> and the practicality of the Hennur Road location.
    </p>

    <p className="mt-4 leading-relaxed">
      <strong>Note:</strong> Connectivity, travel times, public transport routes and nearby facilities can change over time. Verify current routes and accessibility before making a purchase decision.
    </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-semibold text-gray-900">
    The Hennur Road Corridor
  </h2>

  <p className="leading-relaxed">
    <strong>Hennur Road</strong> is one of Bangalore's established residential corridors, connecting the Hennur area with several important neighbourhoods across the city's eastern and northeastern side. The corridor has developed from a predominantly residential stretch into a broader urban zone with apartment communities, schools, healthcare facilities, retail destinations, restaurants and everyday services.
  </p>

  <p className="leading-relaxed">
    The character of Hennur Road changes across its length. Some sections are more densely developed and commercially active, while other stretches retain a predominantly residential setting. This variation is important when evaluating a property here, because the practical experience of living on Hennur Road depends not only on the project address but also on the specific access route and surrounding neighbourhood.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    What This Corridor Gives a Home Buyer
  </h3>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>An established residential location.</strong> Hennur Road has a mix of residential communities and established neighbourhoods, providing buyers with an urban residential setting rather than an isolated development.
    </li>
    <li>
      <strong>Access to surrounding neighbourhoods.</strong> The corridor connects towards areas such as <strong>Kalyan Nagar, HRBR Layout, Banaswadi and Thanisandra</strong>, depending on the route and destination.
    </li>
    <li>
      <strong>Everyday social infrastructure.</strong> Schools, hospitals, shopping areas, restaurants and other essential services are available across Hennur Road and its surrounding neighbourhoods.
    </li>
    <li>
      <strong>Multiple commuting routes.</strong> The road network around Hennur provides access towards different parts of Bangalore, although actual travel time depends heavily on traffic and the time of day.
    </li>
  </ul>

  <h3 className="text-xl font-semibold text-gray-900">
    The Corridor's Limitations
  </h3>

  <p className="leading-relaxed">
    Two practical points are worth considering when evaluating Hennur Road. First, <strong>travel time can vary significantly throughout the day</strong>, particularly during Bangalore's peak commuting hours. A route that appears short on a map may take considerably longer during busy periods, so it is better to check the journey at the time you would actually travel.
  </p>

  <p className="leading-relaxed">
    Second, connectivity should be assessed according to your own daily destinations. The most relevant route for someone travelling to an office may be very different from the route required for schools, hospitals, shopping or other regular activities. Rather than relying only on general location claims, check the actual route from the project to the places that matter to you.
  </p>

  <p className="leading-relaxed">
    The practical approach for a purchase at this value is to do the corridor homework yourself: drive the relevant Hennur Road routes during weekday peak hours, check the accessibility of your regular destinations, and compare actual travel times at different times of the day. Those exercises provide a more realistic understanding of the location than a general connectivity
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900 text-center">
    Hennur Road
  </h2>
  <div className="w-full h-px bg-gray-200 mb-5 mt-3" />
  </div>
  <img
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/hennur-road.webp"
              alt="Hennur Road"
              loading="lazy"
            />
  <p className="leading-relaxed">
    <strong>Hennur Road</strong> is an established residential corridor in Bangalore, surrounded by a combination of residential communities, local businesses and urban infrastructure. The area provides access to several neighbouring localities and continues to attract residential development.
    Its location makes it relevant for buyers who want to remain within an established part of Bangalore while maintaining access to nearby residential and commercial areas. The surrounding neighbourhoods provide much of the everyday infrastructure required for regular living, including educational institutions, healthcare, retail and food options.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    What the Location Means Day to Day
  </h3>

  <p className="leading-relaxed">
    Two things stand out when considering a Hennur Road address. The first is <strong>access to established neighbourhood infrastructure</strong>: residents can look beyond the immediate project and use the wider network of schools, hospitals, retail outlets, restaurants and other services available around the corridor.
    The second is the importance of <strong>route selection and traffic conditions</strong>. Hennur Road connects to several adjoining areas, but the time required to reach a destination can change considerably depending on the hour and direction of travel. This makes actual commute testing an important part of evaluating the location.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    Who This Suits
  </h3>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      Buyers who want a home in an <strong>established residential corridor</strong> with access to everyday urban conveniences.
    </li>
    <li>
      Families who want to evaluate schools, healthcare, shopping and other facilities across <strong>Hennur Road and nearby neighbourhoods</strong>.
    </li>
    <li>
      Buyers whose regular destinations are accessible from Hennur Road and who are comfortable evaluating commute times according to peak-hour traffic.
    </li>
    <li>
      Homebuyers looking for a <strong>Bangalore residential location</strong> where the surrounding neighbourhood infrastructure can be assessed alongside the project itself.
    </li>
  </ul>

  <h3 className="text-xl font-semibold text-gray-900">
    Do Your Own Diligence on the Neighbourhood
  </h3>

  <p className="leading-relaxed">
    Because Hennur Road covers a broad urban corridor, the distance and travel time to any particular destination can vary depending on the exact route and time of day. Rather than using generic figures, check the locations that are relevant to your daily routine, including your workplace, children's school, preferred hospital, shopping areas and other regular destinations.
    Before you commit, visit the location at different hours, drive the routes you would use during weekday peak periods, check the availability of essential services around the project, and verify the latest project and approval information. For <strong>Sobha Hennur</strong>, the project is currently <strong>pre-launch</strong>, with <strong><a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">RERA approval under process</a></strong>, so the latest official documentation should also be reviewed before making a purchase decision.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <div>
    <h2 className="text-2xl font-semibold text-gray-900 text-center">
    Bangalore
  </h2>
    <div className="w-full h-px bg-gray-200 mb-5 mt-3" />
  </div>
  <img
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/bangalore.webp"
              alt="Hennur Road"
              loading="lazy"
            />

  <p className="leading-relaxed">
    <strong><a href="https://en.wikipedia.org/wiki/Bangalore" target="_blank" rel="nofollow noopener noreferrer">Bangalore</a></strong>, officially Bengaluru, is the capital of <a href="https://en.wikipedia.org/wiki/Karnataka" target="_blank" rel="nofollow noopener noreferrer">Karnataka</a> and one of India's major metropolitan cities. Located on the <a href="https://en.wikipedia.org/wiki/Deccan_Plateau" target="_blank" rel="nofollow noopener noreferrer">Deccan Plateau</a> at an elevation of close to 900 metres above sea level, the city is known for its relatively moderate climate compared with many other large Indian cities. Bangalore is widely recognised as a major technology and employment centre, with strong presence across IT, software, aerospace, defence, biotechnology and start-ups, attracting professionals and businesses from across the country.
    The city has an extensive urban infrastructure network, with <strong><a href="https://english.bmrc.co.in/" target="_blank" rel="nofollow noopener noreferrer">Namma Metro</a></strong> and BMTC buses serving different parts of Bangalore. Major roads and corridors connect residential neighbourhoods with employment centres, while <strong><a href="https://www.bengaluruairport.com/" target="_blank" rel="nofollow noopener noreferrer">Kempegowda International Airport</a></strong> provides domestic and international air connectivity. The city also has a broad network of schools, colleges, hospitals, shopping centres, restaurants and recreational spaces. Continued employment activity and residential development have made Bangalore an important destination for both homebuyers and property investors.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    Why Bangalore Draws Homebuyers
  </h3>

  <p className="leading-relaxed">
    Several factors contribute to Bangalore's residential demand. A large <strong>employment base</strong> creates continuing demand for housing across different parts of the city. An established <strong>resale market</strong> provides homeowners with options when they decide to sell or upgrade. Buyers also have a <strong>wide range of residential choices</strong>, including apartments, villas and other housing formats across different locations and price segments.
    This combination of employment opportunities, established neighbourhoods, social infrastructure and varied housing options continues to make Bangalore an important residential market for homebuyers.
  </p>

  <h3 className="text-xl font-semibold text-gray-900">
    Why North Bangalore and Hennur Road
  </h3>

  <p className="leading-relaxed">
    <strong>North and Northeast Bangalore</strong> have become important residential areas, with established neighbourhoods and expanding residential development across corridors such as <strong>Hennur Road, Thanisandra and surrounding areas</strong>. <strong>Hennur Road</strong> is a prominent residential corridor with access to schools, hospitals, retail destinations, restaurants and other everyday facilities.
    The Hennur Road corridor also provides connectivity towards several established neighbourhoods and other parts of Bangalore. As residential development continues along this side of the city (see our <a href="https://www.sobhahennur.co/bangalore">Bangalore guide and top Sobha projects</a>), <strong>Sobha Hennur</strong> is positioned on Hennur Road as a <strong>premium luxury residential</strong> development by <strong>SOBHA Limited</strong>.
  </p>
</div>
        </div>

      
      </div>
    </section>
  );
}
