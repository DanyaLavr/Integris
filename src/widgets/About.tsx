import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/src/shared/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We get to know you — your request, concerns and history.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "We evaluate the condition of your skin, body and overall wellbeing.",
  },
  {
    number: "03",
    title: "Personalized Strategy",
    description: "We design an individual plan built around your goals.",
  },
  {
    number: "04",
    title: "Treatment",
    description:
      "We combine procedures, technology, care and other required directions.",
  },
  {
    number: "05",
    title: "Follow-up",
    description: "We track your results and adjust the program over time.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image
              src="/images/about/about.jpg"
              alt="INTEGRIS interior"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-green sm:text-sm">
              About INTEGRIS
            </span>
            <h2 className="title-h2 mt-3">What is INTEGRIS?</h2>
            <p className="mt-5 text-base text-black/70 sm:text-lg">
              INTEGRIS is a space where beauty, health, technology and wellness
              work together.
            </p>
            <p className="mt-4 text-base font-medium sm:text-lg">
              Not just a treatment. Not just a consultation. A personalized
              approach to you.
            </p>
            <Link
              href="#approach"
              className="btn-secondary mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm"
            >
              Discover Our Approach
            </Link>
          </div>
        </div>

        <div id="approach" className="mt-20 scroll-mt-24 md:mt-24 lg:mt-28">
          <SectionHeading
            eyebrow="Our Approach"
            title="We don't start with a treatment. We start with you."
          />

          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-black/10 pt-5">
                <span className="text-sm font-semibold text-brand-green">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-black/60 sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
