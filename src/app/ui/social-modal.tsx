import { useState } from "react";
import Link from "next/link";

export type SocialLink = {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
};

// Default social links
const defaultSocialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/NicoDeGiacomo/tiny-code-share",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
        <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path>
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nicolasdegiacomo/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
        <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path>
        <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
        <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
        <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
      </svg>
    ),
  },
];

export default function SocialModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [socialLinks] = useState<SocialLink[]>(defaultSocialLinks);

  return (
    <div className="flex items-center gap-3 relative">
      <div className="flex items-center gap-2">
        {socialLinks.map((link) => (
          <Link 
            key={link.id} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block hover:opacity-75 transition-opacity"
          >
            {link.icon}
          </Link>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            {/* Dark overlay */}
            <div
              className="fixed inset-0 bg-black opacity-30"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Modal content */}
            <div className="bg-white z-10 p-6 rounded-lg shadow-xl w-11/12 max-w-2xl border-2 border-black relative">
              <button
                className="absolute top-2 right-2 text-2xl leading-none"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>

              <h2 className="text-3xl font-bold mb-4">Social Links</h2>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <div key={link.id} className="flex items-center gap-4 p-2 border border-gray-200 rounded">
                    <div className="flex-shrink-0">
                      {link.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{link.name}</h3>
                      <p className="text-sm text-gray-600">{link.url}</p>
                    </div>
                    <Link 
                      href={link.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm"
                    >
                      Visit
                    </Link>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-gray-600">
                To add more social links, update the <code>defaultSocialLinks</code> array in the <code>social-modal.tsx</code> file.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
