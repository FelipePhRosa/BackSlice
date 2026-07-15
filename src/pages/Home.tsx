import { pageMeta } from "../constants/site";
import { usePageMeta } from "../hooks/usePageMeta";
import { Differentials } from "../sections/Differentials";
import { FAQ } from "../sections/FAQ";
import { FinalCTA } from "../sections/FinalCTA";
import { Hero } from "../sections/Hero";
import { Problems } from "../sections/Problems";
import { Process } from "../sections/Process";
import { ProjectsPreview } from "../sections/ProjectsPreview";
import { ServicesOverview } from "../sections/ServicesOverview";
import { Solution } from "../sections/Solution";
import { Technologies } from "../sections/Technologies";

export default function Home() {
  usePageMeta(pageMeta.home);

  return (
    <>
      <Hero />
      <Problems />
      <Solution />
      <ServicesOverview />
      <Differentials />
      <Process />
      <Technologies />
      <ProjectsPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
