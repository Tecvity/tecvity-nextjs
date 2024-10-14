import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "@/components/portfolio/Breadcumb2";

import ProjectDetails from "@/components/portfolio/ProjectDetails";
import { allPortfolio } from "@/data/portfolio";
export const metadata = {
  title:
    "Project Details | Tecvity",
};

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allPortfolio.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Header3 />
      <Breadcumb2 portfolioTitle={params.title} />
      <ProjectDetails portfolioTitle={params.title} />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
