import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import Link from "next/link";

function LocationPage() {
  const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.683256338268!2d77.7662908!3d13.0558224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0ff2939d2fdb%3A0x53dac1d0b117326b!2sNH%2075%20%26%20Old%20Madras%20Rd%2C%20Bengaluru%2C%20Karnataka%20560049!5e0!3m2!1sen!2sin!4v1773561216072!5m2!1sen!2sin";

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
        
        </div>
      </main>
    </>
  );
}

export default LocationPage;
