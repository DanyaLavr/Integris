import SectionHeading from "@/src/shared/ui/SectionHeading";

const reasons = [
  {
    title: "Personalized",
    description: "Every plan is built individually, around you.",
  },
  {
    title: "Integrated",
    description: "Beauty, health and wellness work together.",
  },
  {
    title: "Technology",
    description: "Modern equipment and evidence-based methods.",
  },
  {
    title: "Expertise",
    description: "A team of specialists across every direction.",
  },
  {
    title: "Long-term",
    description: "A focus on lasting results, not quick fixes.",
  },
  {
    title: "Human",
    description: "You are always at the center of the approach.",
  },
];

const WhyIntegris = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Why INTEGRIS"
          title="A different kind of care"
        />

        <div className="mt-10 grid grid-cols-2 gap-6 sm:mt-12 sm:gap-8 lg:mt-14 lg:grid-cols-3 lg:gap-10">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="border-t border-black/10 pt-4">
              <span className="text-xs font-semibold text-brand-green">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold sm:text-xl">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-black/60 sm:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyIntegris;
