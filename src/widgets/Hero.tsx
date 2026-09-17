import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-black text-white sm:min-h-screen sm:items-center">
      <Image
        src="/images/hero/hero.jpg"
        alt="INTEGRIS space"
        fill
        priority
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      <div className="container--custom mx-0 relative z-10 pb-14 pt-32 sm:py-32">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-sm">
          Alicante, Spain
        </span>
        <h1 className="mt-4 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          INTEGRIS
        </h1>
        <p className="mt-3 text-xl font-medium text-white/90 sm:text-2xl md:text-3xl">
          Conscious Beauty &amp; Health
        </p>
        <p className="mt-5 max-w-md text-base text-white/70 sm:text-lg">
          Personalized care for your beauty, health and wellbeing.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Link
            href="/contacts"
            className="btn-primary inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm sm:text-base"
          >
            Book a Consultation
          </Link>
          <Link
            href="/#about"
            className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white sm:text-base"
          >
            Discover INTEGRIS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
