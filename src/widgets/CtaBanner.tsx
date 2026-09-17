import Link from "next/link";

const CtaBanner = () => {
  return (
    <section className="bg-brand-green py-16 text-white md:py-20">
      <div className="container flex flex-col items-center gap-6 text-center sm:gap-7">
        <h2 className="title-h2 max-w-2xl">
          Ready to start your personalized journey?
        </h2>
        <p className="max-w-xl text-base text-white/85 sm:text-lg">
          Book a consultation and let&apos;s design the plan that fits you.
        </p>
        <Link
          href="/contacts"
          className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:text-base"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
