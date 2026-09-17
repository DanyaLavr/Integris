import Image from "next/image";
import SectionHeading from "@/src/shared/ui/SectionHeading";

const areas = [
  {
    title: "Face",
    description: "Skin health, rejuvenation, facial aesthetics.",
    image: "/images/areas/face.jpg",
  },
  {
    title: "Body",
    description:
      "Body contouring, skin quality, lymphatic and regenerative approaches.",
    image: "/images/areas/body.jpg",
  },
  {
    title: "Skin Health",
    description:
      "Professional treatments, skin quality, pigmentation, acne, sensitivity.",
    image: "/images/areas/skin-health.jpg",
  },
  {
    title: "Anti-Age",
    description:
      "Age management, skin quality, prevention and regenerative approaches.",
    image: "/images/areas/anti-age.jpg",
  },
  {
    title: "Wellness",
    description: "Recovery, relaxation, body wellbeing and lifestyle support.",
    image: "/images/areas/wellness.jpg",
  },
  {
    title: "Health",
    description: "Medical consultations, diagnostics and preventive approach.",
    image: "/images/areas/health.jpg",
  },
];

const Areas = () => {
  return (
    <section
      id="areas"
      className="scroll-mt-20 bg-beige py-16 md:py-20 lg:py-28"
    >
      <div className="container--custom">
        <SectionHeading
          eyebrow="Our Areas"
          title="Where we focus our expertise"
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {areas.map((area) => (
            <li
              key={area.title}
              className="group relative aspect-square overflow-hidden rounded-xl bg-black/5 sm:aspect-[4/3]"
            >
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                <p className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                  {area.title}
                </p>
                <p className="mt-1 hidden text-sm text-white/80 sm:block">
                  {area.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Areas;
