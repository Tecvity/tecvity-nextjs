import Image from "next/image";

export default function Features() {
  return (
    <div className="why-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", right: "0px", bottom: "140px" }}
      >
        <Image
          width={838}
          height={778}
          src="/assets/img/normal/about_tecvity.png"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title">
                Passionate About Delivering Premium Quality Services
              </h2>
            </div>
            <h4>We Love What We Do</h4>
            <p>
              We are a software agency working with brands helping them design, develop and secure their infrastructure
            </p>
            <h4 className="mt-35">Why Work With Us</h4>
            <p className="mb-n1">
              If you ask our clients what it’s like working with 36, they’ll
              talk about how much we care about their success. For us, real
              relationships fuel real success. We love building long-term relationships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
