"use client";
import { useState, useEffect } from "react";
import { usePostData } from "@/utils/hooks";
import { isValidEmail } from "@/utils/validators";
import { teamData } from "@/data/team";

export default function ContactTeam({ teamName }) {
  const decodedTeamName = teamName.replace(/-/g, ' ');
  const teamItem = teamData.filter((elm) => elm.name == decodedTeamName)[0] || teamData[1];

  const { response, isLoading, error, postData, reset } = usePostData();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    teamEmail: teamItem.email || "" // Set default team email
  });

  const [errors, setErrors] = useState({});

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
    if (validate()) {
      await postData("/api/Contact/TeamMember", formData);
    }
  };

  return (
    <div className="contact-area-2 text-center space-bottom">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form-wrap">
              <div className="title-area mb-30">
                <h3 className="sec-title">Contact with Me</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form ajax-contact">
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
                        placeholder="First name *"
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
                        placeholder="Last name *"
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
                        placeholder="Email address *"
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
                        placeholder="Write your comment *"
                        className={`form-control style-border style2 ${errors.message ? "is-invalid" : ""}`}
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
