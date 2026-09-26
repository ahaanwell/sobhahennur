
const amenitiesData = [
  { id: 1,  name: "Gymnasium",           image: "/images/gym.svg",    alt: "Gymnasium" },
  { id: 2,  name: "Swimming Pool",       image: "/images/swm.svg",    alt: "Swimming Pool" },
  { id: 3,  name: "Yoga Pavilion",       image: "/images/yoga.svg",   alt: "Yoga Pavilion" },
  { id: 4,  name: "Video Door Phone",    image: "/images/videos.svg", alt: "Video Door Phone" },
  { id: 5,  name: "Kids Activity Zone",  image: "/images/kids.svg",   alt: "Kids Activity Zone" },
  { id: 6,  name: "Mini Theater",        image: "/images/mine.svg",   alt: "Mini Theater" },
  { id: 7,  name: "Aerobics Room",       image: "/images/tennis.svg", alt: "Aerobics Room" },
  { id: 8,  name: "Indoor Games Room",   image: "/images/chess.svg",  alt: "Indoor Games Room" },
  { id: 9,  name: "Club House",          image: "/images/disco-ball.svg", alt: "Club House" },
  { id: 10, name: "Dance/Music",         image: "/images/dance.svg",  alt: "Dance/Music" },
  { id: 11, name: "24/7 CCTV Monitoring",image: "/images/cctv.svg",   alt: "24/7 CCTV Monitoring" },
  { id: 12, name: "Jogging Track",       image: "/images/jog.svg",    alt: "Jogging Track" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="amenities-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Amenities at Sobha Hennur
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className=" leading-relaxed mb-6">
          <p className="text-gray-800">
            <strong><a href="https://www.sobha.com/" target="_blank" rel="nofollow noopener noreferrer">SOBHA Limited</a></strong> has planned <strong>Sobha Hennur</strong> as a premium luxury residential development on <strong>Hennur Road, Bangalore</strong>. The project is currently at the <b>pre-launch stage</b>, and detailed information about the complete amenity schedule has not been provided in the current project details. Therefore, this section focuses only on the amenities and facilities that can be confirmed from the available project information, without adding unverified features.
          </p>
        </div>

      <div className="space-y-10 text-gray-800 mb-5">

  </div>


        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          aria-label="Sattav Aaranya"
        >
          {amenitiesData.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-between w-full h-[150px] lg:h-[180px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-3 rounded-xl hover:border hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="w-full flex-1 flex items-center justify-center p-3 h-[60%]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[90%] object-contain"
                  loading="lazy"
                 
                />
              </div>

              <p className="text-center text-sm text-gray-700 font-light leading-tight pb-1">
                {item.name}
              </p>
            </li>
          ))}
        </ul>

        <div className="space-y-6 mt-10">
          <div className="space-y-6 text-gray-800">
  <h3 className="text-xl font-semibold text-gray-900">
    What the Master Plan Shows
  </h3>

  <p className="leading-relaxed">
    The current project information confirms the overall residential development and its scale, but a detailed amenity schedule has not yet been released. As the project is still in the <strong>pre-launch stage</strong> and <strong>RERA approval is under process</strong>, specific clubhouse facilities, recreational areas and individual amenity components should not be assumed until they are officially documented.
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      A planned <strong>45-acre residential development</strong>, providing a large-scale setting for the project. Detailed amenity specifications have not yet been released, so no individual facility is attributed without confirmation.
    </li>
    <li>
      <strong>Approximately 17 acres in Phase 1</strong>, forming the first phase of the larger residential development.
    </li>
    <li>
      <strong>2, 3, 3.5 & 4 BHK apartments</strong>, providing multiple residential configurations within the development.
    </li>
    <li>
      <strong>Apartment sizes ranging from 1,500 to 2,230 sq.ft.</strong>, offering different home sizes for varying space requirements.
    </li>
    <li>
      <strong>4,400+ residential units</strong> planned across the overall development.
    </li>
    <li>
      A residential location on <strong><a href="https://www.sobhahennur.co/location">Hennur Road, Bangalore</a></strong>, placing the project within an established urban corridor.
    </li>
  </ul>
</div>
        <div className="space-y-6 text-gray-800">
  <h3 className="text-xl font-semibold text-gray-900">
    The Apartment Is the Amenity
  </h3>

  <p className="leading-relaxed">
    The project is designed around premium residential living, with the individual apartment forming the core of the home experience. The available configurations include <strong><a href="https://www.sobhahennur.co/floor-plan">2, 3, 3.5 and 4 BHK apartments</a></strong>, with sizes extending from <strong>1,500 to 2,230 sq.ft.</strong>
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>2 BHK apartments</strong> for buyers seeking a spacious two-bedroom home
    </li>
    <li>
      <strong>3 BHK apartments</strong> offering additional room for family living
    </li>
    <li>
      <strong>3.5 BHK apartments</strong> providing an expanded residential configuration
    </li>
    <li>
      <strong>4 BHK apartments</strong> designed for buyers looking for a larger premium residence
    </li>
  </ul>

  <p className="leading-relaxed">
    The available project information does not confirm specific apartment-level features such as private terraces, lifts, utility rooms or other internal facilities. Those details should be taken from the official floor plans and specifications once released rather than assumed from generic luxury-apartment layouts.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h3 className="text-xl font-semibold text-gray-900">
    What Is Still Not on Record
  </h3>

  <p className="leading-relaxed">
    It is worth stating clearly because <strong>Sobha Hennur</strong> is currently a <strong>pre-launch project</strong>. The current information confirms the <strong>45-acre development</strong>, approximately <strong>17-acre Phase 1</strong>, <strong>4,400+ units</strong>, <strong>2, 3, 3.5 &amp; 4 BHK apartments</strong>, and apartment sizes of <strong>1,500–2,230 sq.ft.</strong> However, a complete amenity schedule has not been provided.
  </p>

  <p className="leading-relaxed">
    There is currently no confirmed information in the supplied project details regarding a specific <strong>swimming pool, gymnasium, sports court, clubhouse, amphitheatre, jogging track or other individual recreational facility</strong>, so none is listed as a confirmed amenity here. Likewise, detailed specifications, fittings, finishes and other construction features have not been provided.
  </p>

  <p className="leading-relaxed">
    This does not mean that such facilities will not form part of the completed development. It simply means that they should not be presented as confirmed until <strong>SOBHA Limited</strong> releases the relevant <a href="https://www.sobhahennur.co/master-plan">master plan</a>, amenity schedule or official project documentation.
  </p>

  <p className="leading-relaxed">
    The project's <strong><a href="https://rera.karnataka.gov.in/" target="_blank" rel="nofollow noopener noreferrer">RERA approval is under process</a></strong>, so the registered documentation will be an important reference once available. Buyers should verify the final amenity list, specifications and other project details against the latest official documents rather than relying on unverified marketing claims.
  </p>
</div>
</div>
      </div>
    </section>
  );
}