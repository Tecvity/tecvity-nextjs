import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/service/Breadcumb";
import Features1 from "@/components/service/Features1";

import Video from "@/components/service/Video";
export const metadata = {
  title: "Our Services | Tecvity",
};

export default function ServicePage1() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Features1 />
      <Video />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
