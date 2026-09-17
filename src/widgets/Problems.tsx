import Image from "next/image";

const Problems = () => {
  return (
    <section className="pt-6 sm:pt-10 md:pt-14">
      <div className="">
        <div className="text-center mx-auto px-6 sm:px-10 max-w-2xl lg:max-w-3xl">
          <h2 className="title-h2">Яку проблеми ми вирішуємо?</h2>
          <p className="text-base mt-4 md:mt-5 md:text-lg lg:mt-6 lg:text-xl">
            Клініка спеціалізується на комплексному підході до омолодження
            обличчя та тіла, поєднуючи лазерні технології, апаратні методики та
            ін'єкційну косметологію для досягнення довготривалого ефекту.
          </p>
        </div>
        {/* pictures */}
        <ul className="grid grid-cols-2 h-auto md:grid-cols-4 mt-10 md:mt-11 lg:mt-12 h-40">
          <li className="relative bg-white border border-black aspect-square">
            <Image
              src="/images/img.png"
              fill
              alt=""
              className="object-cover grayscale transition duration-700 hover:grayscale-0"
            />

            <p className="absolute left-1/2 -translate-x-1/2 bottom-4 text-white text-2xl sm:text-3xl lg:text-5xl font-bold">
              Акне
            </p>
          </li>
          <li className="bg-white border border-black aspect-square"></li>
          <li className="bg-white border border-black aspect-square"></li>
          <li className="bg-white border border-black aspect-square"></li>
          <li className="bg-white border border-black aspect-square"></li>
          <li className="bg-white border border-black aspect-square"></li>
          <li className="bg-white border border-black aspect-square"></li>
          <li className="bg-white border border-black aspect-square"></li>
        </ul>
      </div>
    </section>
  );
};

export default Problems;
