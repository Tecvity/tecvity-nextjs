"use client";

export default function Contact() {
  return (
    <div className="contact-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="contact-map shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", left: 0, bottom: "140px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.571881971785!2d74.30818557521448!3d31.480961049088812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919034c42bfd7d1%3A0xbb6830adc0f3a757!2sVenture%20Drive%20Model%20Town!5e0!3m2!1sen!2s!4v1732650446326!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="contact-form-wrap">
              <div className="title-area mb-30">
                <h2 className="sec-title">Have Any Project on Your Mind?</h2>
                <p>
                  Great! We're excited to hear from you and let's start
                  something
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Full name*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Email address*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="website"
                        id="website"
                        placeholder="Website link"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        required
                        name="message"
                        placeholder="How Can We Help You*"
                        id="contactForm"
                        className="form-control style-border"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20">
                    <span className="link-effect">
                      <span className="effect-1">SEND MESSAGE</span>
                      <span className="effect-1">SEND MESSAGE</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
