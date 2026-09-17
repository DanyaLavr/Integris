import Link from "next/link";

const footerNav = [
  { label: "About", href: "/#about" },
  { label: "Areas", href: "/#areas" },
  { label: "Programs", href: "/#programs" },
  { label: "Technology", href: "/#technology" },
  { label: "Team", href: "/#team" },
  { label: "Journal", href: "/#journal" },
  { label: "Contact", href: "/contacts" },
];

const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Legal Notice", href: "/legal-notice" },
  { label: "Terms & Conditions", href: "/terms" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container--custom py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-xl font-semibold tracking-wide">
              INTEGRIS
            </span>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Conscious Beauty &amp; Health
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-green hover:text-brand-green"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://wa.me/000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-green hover:text-brand-green"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12a8 8 0 1 1-14.6-4.6L4 20l4.8-1.3A8 8 0 0 1 20 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-colors hover:text-brand-green"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {legalNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-colors hover:text-brand-green"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>Alicante, Spain</li>
              <li>+34 000 000 000</li>
              <li>hello@integris.clinic</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} INTEGRIS. All rights reserved.
          </p>
          <p>Alicante &middot; Costa Blanca &middot; Spain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
