import { faqsHome } from "@/data/faq";
import Link from "next/link";

export default function Faq() {
  return (
    <div className="faq-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="title-area text-center ">
              <h2 className="sec-title">What We Can Do for Our Clients</h2>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="accordion-area accordion" id="faqAccordion">
              {faqsHome.map((elm, i) => (
                <div key={i} className="accordion-card active">
                  <div
                    className="accordion-header"
                    id={`collapse-item-${elm.id}`}
                  >
                    <button
                      className={`accordion-button ${
                        i == 0 ? "" : "collapsed"
                      } `}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${elm.id}`}
                      aria-expanded="true"
                      aria-controls={`collapse-${elm.id}`}
                    >
                      {" "}
                      <span className="faq-number">
                        {i.toString.length > 1 ? i : "0" + (i + 1)}
                      </span>{" "}
                      {elm.question}
                    </button>
                  </div>
                  <div
                    id={`collapse-${elm.id}`}
                    className={`accordion-collapse collapse ${
                      i == 0 ? "show" : ""
                    } `}
                    aria-labelledby={`collapse-item-${elm.id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">{elm.answer}</p>
                      <br></br>
                      <div className="link-btn">
                        <Link
                          scroll={false}
                          href={elm.link || "#"}
                          className={`btn ${!elm.link ? "disabled" : ""}`}
                        >
                          <span className="link-effect">
                            <span className="effect-1">SHOW DETAILS</span>
                            <span className="effect-1">SHOW DETAILS</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
