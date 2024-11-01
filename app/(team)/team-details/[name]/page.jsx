import Header from "@/components/header/Header";
import TeamDetails from "@/components/team/components/TeamDetails";
import MarqueeComponent from "@/components/common/Marquee";
import ContactTeam from "@/components/team/components/ContactTeam";
import Footer from "@/components/footer/Footer";

//USE Static Side Genaration(SSG) if necessary

export const metadata = {
  title: "Team Details || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function TeamPageDetails({ params }) {
  return (
    <>
      <Header />
      <TeamDetails teamName={params.name} />
      <ContactTeam teamName={params.name} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
