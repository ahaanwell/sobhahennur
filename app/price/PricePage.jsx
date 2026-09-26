import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";

function PricePage() {
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
         
        </div>
      </main>
    </>
  );
}

export default PricePage;
