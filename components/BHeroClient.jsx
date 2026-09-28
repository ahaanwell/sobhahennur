"use client";
import { FaDownload, FaPhone } from "react-icons/fa";
import LeadModal from "./LeadModal";
import { useEffect, useState } from "react";

const markShown = () => {
  try {
    sessionStorage.setItem("leadPopupShown", "1");
  } catch {}
};

function BHeroClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  const [modelBtnLabel, setModelBtnLabel] = useState("");

  // Desktop only, once per visit: open after 25s or once the visitor has
  // scrolled halfway down the page, whichever comes first.
  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const KEY = "leadPopupShown";
    try {
      if (sessionStorage.getItem(KEY)) return;
    } catch {}

    let done = false;
    const open = () => {
      if (done) return;
      done = true;
      cleanup();
      try {
        // Visitor already opened the form themselves during this visit
        if (sessionStorage.getItem(KEY)) return;
        sessionStorage.setItem(KEY, "1");
      } catch {}
      SetModelHeading("Enquire Now For More Details");
      setModelBtnLabel("Submit");
      setIsModalOpen(true);
    };

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= 0.5) open();
    };

    const timer = setTimeout(open, 25000);
    window.addEventListener("scroll", onScroll, { passive: true });

    function cleanup() {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }

    return cleanup;
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => {
            markShown();
            SetModelHeading("Enquire Now For More Details");
            setModelBtnLabel("Submit");
            setIsModalOpen(true);
          }}
          className="flex items-center cursor-pointer gap-2 bg-primary hover:bg-blue-800 text-white font-semibold px-7 py-3 rounded-full transition-colors"
        >
          <FaPhone />
          Enquire Now
        </button>
        <button
          onClick={() => {
            markShown();
            SetModelHeading("Download Brochure");
            setModelBtnLabel("Download");
            setIsModalOpen(true);
          }}
          className="flex items-center cursor-pointer gap-2 bg-transparent hover:bg-white/10 text-white font-semibold border-2 border-white px-7 py-3 rounded-full transition-colors"
        >
          <FaDownload />
          Download Brochure
        </button>
      </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel={modelBtnLabel}
      />
    </>
  );
}
export default BHeroClient;
