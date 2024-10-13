import { socialMediaLinks } from "@/data/socials";
import { teamData } from "@/data/team";
import Image from "next/image";

export default function TeamDetails({ teamName }) {
  const decodedTeamName = decodeURIComponent(teamName);
  const teamItem = teamData.filter((elm) => elm.name == decodedTeamName)[0] || teamData[1];
  return (
    <div className="team-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="team-inner-thumb mb-lg-0 mb-40">
              <Image
                width={527}
                height={640}
                className="w-100"
                src={teamItem.imageSrc}
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-details-about-info mb-0">
              <h2 className="sec-title mb-3">{teamItem.name}</h2>
              <h4 className="team-desig">{teamItem.designation}</h4>
              <p className="sec-text mt-30">
               {teamItem?.para1}
              </p>
              <p className="sec-text mt-15">
                {teamItem?.para2}
              </p>
              <div className="about-contact-wrap mt-35">
                <h6 className="about-contact-title">
                  <a href={`mailto:${teamItem.email}`}>{teamItem.email}</a>
                </h6>
                <h6 className="about-contact-title">
                  <a href={`tel::${teamItem.phone}`}>{teamItem.phone}</a>
                </h6>
                <div className="social-btn mt-4">
                  {socialMediaLinks.map((elm, i) => (
                    <a key={i} href={elm.href}>
                      <i className={elm.iconClass}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
