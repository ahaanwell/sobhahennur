import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

// Add the real Sobha Hennur profile urls here; empty entries are hidden.
const socialLinks = [
  { name: "Facebook", url: "", Icon: FaFacebookF, hover: "hover:bg-blue-600" },
  { name: "Instagram", url: "", Icon: FaInstagram, hover: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500" },
  { name: "LinkedIn", url: "", Icon: FaLinkedinIn, hover: "hover:bg-blue-700" },
  { name: "X (Twitter)", url: "", Icon: FaTwitter, hover: "hover:bg-sky-500" },
  { name: "YouTube", url: "", Icon: FaYoutube, hover: "hover:bg-red-500" },
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-white p-4 flex flex-col gap-4 relative border border-gray-200">

        <div className="lg:px-6">
          <p className="text-xs text-gray-700 leading-relaxed">
            <span className="font-medium">Disclaimer</span> : Please be advised that this website
            is not an official site and serves solely as an informational portal managed by a RERA
            authorized real estate agent. It does not constitute an offer or guarantee of any
            services. The prices displayed on this website are subject to change without prior
            notice, and the availability of properties cannot be guaranteed. The images showcased
            on this website are for representational purposes only and may not accurately reflect
            the actual properties. We may share your data with Real Estate Regulatory Authority
            (RERA) registered Developers for further processing as necessary. Additionally, we may
            send updates and information to the mobile number or email address registered with us.
            All rights reserved. The content, design, and information on this website are protected
            by copyright and other intellectual property rights. Any unauthorized use or
            reproduction of the content may violate applicable laws. For accurate and up-to-date
            information regarding services, pricing, availability, and any other details, it is
            recommended to contact us directly through the provided contact information on this
            website. Thank you for visiting our website.
          </p>
        </div>

        {/* Quick Links */}
          <div className="border-t border-gray-200"></div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              {[
                { name: "Sobha Hennur", link: "https://www.sobhahennur.co/" },
                { name: "Price", link: "https://www.sobhahennur.co/price" },
                { name: "Floor Plan", link: "https://www.sobhahennur.co/floor-plan" },
                { name: "Master Plan", link: "https://www.sobhahennur.co/master-plan" },
                { name: "Location", link: "https://www.sobhahennur.co/location" },
                { name: "Amenities", link: "https://www.sobhahennur.co/amenities" },
                { name: "Sobha Projects in Bangalore", link: "https://www.sobhahennur.co/bangalore" },
                { name: "FAQs", link: "https://www.sobhahennur.co/#faq" },
              ].map((item) => (
                <li key={item.link}>
                  <a href={item.link} className="text-gray-700 hover:text-[#b8860b]">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media: an icon is shown only once its url is filled in */}
          {socialLinks.some((item) => item.url) && (
            <>
            <div className="border-t border-gray-200"></div>
            <div className="flex justify-center gap-5">
              {socialLinks
                .filter((item) => item.url)
                .map(({ name, url, Icon, hover }) => (
                  <a
                    key={name}
                    href={url}
                    aria-label={`Sobha Hennur on ${name}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 ${hover} hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm`}
                  >
                    <Icon size={14} />
                  </a>
                ))}
            </div>
            </>
          )}

          <div className="border-t border-gray-200"></div>
          <p className="text-center text-xs text-gray-600">
            Developed and Marketing by{" "}
            <a
              href="https://www.mndigitalagency.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              M2N Digital Agency
            </a>
          </p>
      </div>
    </footer>
  );
}