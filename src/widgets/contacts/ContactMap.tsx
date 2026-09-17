const ContactMap = () => {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-full lg:min-h-[320px]">
      <iframe
        title="INTEGRIS on Google Maps"
        src="https://www.google.com/maps?q=Alicante,Spain&output=embed"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactMap;
