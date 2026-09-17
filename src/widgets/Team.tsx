import SectionHeading from "@/src/shared/ui/SectionHeading";

const teams = [
  {
    title: "Medical Team",
    description:
      "Doctors and medical specialists overseeing your health and safety.",
  },
  {
    title: "Aesthetic Team",
    description:
      "Aesthetic specialists focused on skin quality and facial harmony.",
  },
  {
    title: "Wellness Team",
    description:
      "Wellness and body specialists supporting your overall wellbeing.",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="scroll-mt-20 bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Team"
          title="A team built around every direction"
          subtitle="Medical, aesthetic and wellness specialists working together on your personal plan."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 lg:mt-14 lg:gap-6">
          {teams.map((team) => (
            <div
              key={team.title}
              className="rounded-2xl bg-beige p-7 text-center sm:p-8"
            >
              <h3 className="text-xl font-semibold sm:text-2xl">
                {team.title}
              </h3>
              <p className="mt-3 text-sm text-black/60 sm:text-base">
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
