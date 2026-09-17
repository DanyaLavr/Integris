import About from "@/src/widgets/About";
import Areas from "@/src/widgets/Areas";
import CtaBanner from "@/src/widgets/CtaBanner";
import Hero from "@/src/widgets/Hero";
import Journal from "@/src/widgets/Journal";
import Programs from "@/src/widgets/Programs";
import Space from "@/src/widgets/Space";
import Team from "@/src/widgets/Team";
import Technology from "@/src/widgets/Technology";
import WhyIntegris from "@/src/widgets/WhyIntegris";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Areas />
      <Programs />
      <Technology />
      <Team />
      <Space />
      <WhyIntegris />
      <Journal />
      <CtaBanner />
    </main>
  );
}
