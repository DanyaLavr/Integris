import Image from "next/image";
import SectionHeading from "@/src/shared/ui/SectionHeading";

const images = [
  { src: "/images/space/reception.jpg", alt: "Reception" },
  { src: "/images/space/treatment-room.jpg", alt: "Treatment room" },
  { src: "/images/space/medical-room.jpg", alt: "Medical room" },
  { src: "/images/space/wellness-area.jpg", alt: "Wellness area" },
  { src: "/images/space/details.jpg", alt: "Interior detail" },
];

const Space = () => {
  return (
    <section
      id="space"
      className="scroll-mt-20 bg-beige py-16 md:py-20 lg:py-28"
    >
      <div className="container--custom">
        <SectionHeading
          eyebrow="Our Space"
          title="A space designed around you"
          subtitle="Privacy, calm, safety and premium service — in every detail."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl sm:row-span-2 sm:aspect-auto">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
            />
          </div>
          {images.slice(1).map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Space;
