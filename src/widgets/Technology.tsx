import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/src/shared/ui/SectionHeading";

const technologies = [
  {
    name: "Morpheus8",
    description: "Fractional radiofrequency microneedling for skin remodeling.",
    image: "/images/technology/morpheus8.jpg",
  },
  {
    name: "Lumecca",
    description: "Intense pulsed light for pigmentation and skin quality.",
    image: "/images/technology/lumecca.jpg",
  },
  {
    name: "ICOONE",
    description: "Cellular stimulation for body contouring and skin quality.",
    image: "/images/technology/icoone.jpg",
  },
  {
    name: "Ultraformer",
    description: "High-intensity focused ultrasound for lifting and firmness.",
    image: "/images/technology/ultraformer.jpg",
  },
  {
    name: "Volnewmer",
    description: "Capacitive radiofrequency for deep tissue regeneration.",
    image: "/images/technology/volnewmer.jpg",
  },
  {
    name: "Hydrafacial",
    description: "Deep cleansing, exfoliation and hydration in one session.",
    image: "/images/technology/hydrafacial.jpg",
  },
  {
    name: "HELEO",
    description: "Photobiomodulation to support skin recovery and health.",
    image: "/images/technology/heleo.jpg",
  },
];

const Technology = () => {
  return (
    <section
      id="technology"
      className="scroll-mt-20 bg-black py-16 text-white md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Technology"
          title="Our Technology"
          subtitle="We don't sell a device. We deliver a result and an expert approach."
          tone="dark"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="overflow-hidden rounded-2xl bg-white/5 transition-colors hover:bg-white/10"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{tech.name}</h3>
                <p className="mt-2 text-sm text-white/60">{tech.description}</p>
                <Link
                  href="/contacts"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-green transition-colors hover:text-white"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
