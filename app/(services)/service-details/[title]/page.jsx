import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";

import ServiceDetails from "@/components/service/ServiceDetails";
import { allFeatures } from "@/data/features";

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allFeatures.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export const metadata = {
  title:
    "Service Details || Tecvity - Delivering Creative Technological Solutions",
};
//
export default function ServicePageDetails({ params }) {
  return (
    <>
      <Header3 />
      <ServiceDetails serviceTitle={params.title} />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
