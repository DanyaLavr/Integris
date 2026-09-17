import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/src/shared/ui/SectionHeading";

const articles = [
  {
    category: "Longevity",
    title: "What is healthy aging?",
    image: "/images/journal/healthy-aging.jpg",
  },
  {
    category: "Skin",
    title: "How to choose the right treatment?",
    image: "/images/journal/right-treatment.jpg",
  },
  {
    category: "Technology",
    title: "Morpheus8: what is it?",
    image: "/images/journal/morpheus8.jpg",
  },
];

const Journal = () => {
  return (
    <section
      id="journal"
      className="scroll-mt-20 bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Journal"
            title="Insights on beauty & health"
            align="left"
            className="mx-0 text-left"
          />
          <Link
            href="/journal"
            className="btn-secondary inline-flex w-fit items-center justify-center rounded-lg px-5 py-2.5 text-sm"
          >
            View all articles
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3 lg:mt-14">
          {articles.map((article) => (
            <Link
              key={article.title}
              href="/journal"
              className="group block overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-brand-green">
                {article.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold sm:text-xl">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
