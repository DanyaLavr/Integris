import Link from "next/link";
import SectionHeading from "@/src/shared/ui/SectionHeading";

const programs = [
  {
    title: "Skin Renewal",
    description: "To improve the quality and structure of your skin.",
  },
  {
    title: "Healthy Aging",
    description: "A comprehensive approach to age-related changes.",
  },
  {
    title: "Body Transformation",
    description: "Working with skin quality, contour and body composition.",
  },
  {
    title: "Skin Recovery",
    description: "Restoration and ongoing support for your skin.",
  },
  {
    title: "Wellness & Recovery",
    description: "Recovery, relaxation and overall wellbeing.",
  },
  {
    title: "Personalized Program",
    description: "An individual program built after your consultation.",
  },
];

const Programs = () => {
  return (
    <section
      id="programs"
      className="scroll-mt-20 bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Programs"
          title="Personal programs, not procedure lists"
          subtitle="The composition of every program is defined after your consultation — built around your goals, not a fixed set of treatments."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-black/10 p-6 transition-colors hover:border-brand-green sm:p-7"
            >
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm text-black/60 sm:text-base">
                  {program.description}
                </p>
              </div>
              <Link
                href="/contacts"
                className="btn-ghost mt-6 inline-flex w-fit items-center gap-1 rounded-lg px-0 py-1 text-sm"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
