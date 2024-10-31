"use client";
import { useState, useEffect } from "react";
import { usePostData } from "@/utils/hooks";
import { isValidEmail } from "@/utils/validators";

export default function Contact() {
  const { response, isLoading, error, postData, reset } = usePostData();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    if (response) {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
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
    if (!formData.firstname) tempErrors.firstname = "First name is required";
    if (!formData.lastname) tempErrors.lastname = "Last name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
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
                        className={`form-control style-border ${errors.firstname ? "is-invalid" : ""}`}
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder="First name*"
                      />
                      {errors.firstname && (
                        <div className="invalid-feedback">{errors.firstname}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className={`form-control style-border ${errors.lastname ? "is-invalid" : ""}`}
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="Last name*"
                      />
                      {errors.lastname && (
                        <div className="invalid-feedback">{errors.lastname}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
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
                {error && <p style={{ color: "red" }}>{error?.response?.data.message}</p>}
                {response && <p className="success-text">Form submitted successfully!</p>}
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20" disabled={isLoading}>
                    <span className="link-effect">
                      <span className="effect-1">
                      {isLoading ? "SENDING MESSAGE..." : "SEND MESSAGE"}
                      </span>
                      <span className="effect-1">
                      {isLoading ? "SENDING MESSAGE..." : "SEND MESSAGE"}
                      </span>
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
