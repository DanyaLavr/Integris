const details = [
  { label: "Address", value: "Alicante, Spain" },
  { label: "Phone", value: "+34 000 000 000" },
  { label: "WhatsApp", value: "+34 000 000 000" },
  { label: "Email", value: "hello@integris.clinic" },
  { label: "Hours", value: "Mon–Fri, 10:00–20:00" },
];

const ContactInfo = () => {
  return (
    <div className="rounded-2xl bg-beige p-7 sm:p-8 lg:p-10">
      <h2 className="text-xl font-semibold sm:text-2xl">INTEGRIS</h2>
      <ul className="mt-6 space-y-5">
        {details.map((detail) => (
          <li key={detail.label} className="flex flex-col gap-0.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-black/50">
              {detail.label}
            </span>
            <span className="text-base font-medium sm:text-lg">
              {detail.value}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-brand-green transition-colors hover:text-black"
      >
        Follow us on Instagram →
      </a>
    </div>
  );
};

export default ContactInfo;
