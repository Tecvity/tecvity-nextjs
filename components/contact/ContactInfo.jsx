import { contactPageInfo } from "@/data/contactInfo";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          {contactPageInfo.map((info, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <Image width={36} height={40} src={info.iconSrc} alt="icon" />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">
                    <a href="#">{info.title}</a>
                  </h4>
                  <span>
                  {info.address && (
                    <p>{info.address}</p>
                  )}
                  {info.city && (
                    <p>{info.city}</p>
                  )}
                  {info.email && (
                    <p>{info.email}</p>
                  )}
                  {info.email2 && (
                    <p>{info.email2}</p>
                  )}
                  {info.phoneNumber1 && (
                    <p>
                      {info.phoneNumber1}
                    </p>
                  )}
                  {info.phoneNumber2 && (
                    <p>{info.phoneNumber2}</p>
                  )}
                  </span>
                </div>
                  <a href={info.linkUrl} className="link-btn" target="_blank">
                    <span className="link-effect">
                      <span className="effect-1">{info.linkText}</span>
                      <span className="effect-1">{info.linkText}</span>
                    </span>
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt="icon"
                    />
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
