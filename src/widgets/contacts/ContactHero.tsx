const ContactHero = () => {
  return (
    <section className="bg-black py-16 text-white sm:py-20 md:py-24">
      <div className="container">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-green sm:text-sm">
          Contact
        </span>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl">
          Let&apos;s talk about you
        </h1>
        <p className="mt-4 max-w-lg text-base text-white/70 sm:text-lg">
          Leave your details and our team will contact you shortly to
          schedule your consultation.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
