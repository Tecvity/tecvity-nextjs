"use client";
import { useState, useEffect } from "react";
import { usePostData } from "@/utils/hooks";
import { isValidEmail } from "@/utils/validators";

export default function Contact() {
  const { response, isLoading, error, postData, reset } = usePostData();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  useEffect(() => {
    if(response) {
      setFormData({
        name: "",
        email: "",
        website: "",
        message: ""
      });
    }
  }, [isLoading]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Full name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!formData.website) tempErrors.website = "Website is required";
    if (!formData.message) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    reset();

    if (validate())
      await postData("/api/Contact/Submit", formData);
  };

  return (
    <div className="contact-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="contact-map shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", left: 0, bottom: "140px" }}
      >
        <iframe
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
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
                <p>Great! We're excited to hear from you and let's start something</p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className={`form-control style-border ${errors.name ? "is-invalid" : ""}`}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name*"
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="email"
                        className={`form-control style-border ${errors.email ? "is-invalid" : ""}`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address*"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className={`form-control style-border ${errors.website ? "is-invalid" : ""}`}
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Website link"
                      />
                      {errors.website && (
                        <div className="invalid-feedback">{errors.website}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        required
                        name="message"
                        placeholder="How Can We Help You*"
                        className={`form-control style-border ${errors.message ? "is-invalid" : ""}`}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>
                  </div>
                </div>
                {isLoading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error?.response?.data.message}</p>}
                {response && <p className="success-text">Form submitted successfully!</p>}
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20" disabled={isLoading}>
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
