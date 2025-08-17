import React, { useState } from "react";
import "../styles/Client.css";

export default function Client() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false); // new state for success card

  // Handle form submission — send directly to Google Sheets
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzhhK4rJcAZ3He75ZR_HAwE9hmp70w-11w45t3fPyV5fWqFJujg-d9BAmbhxDAGyUE/exec",
        {
          method: "POST",
          body: data,
        }
      );

      // Show success card
      setSubmitted(true);
      e.target.reset();

      // Hide card after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);

    } catch (error) {
      console.error("Form Submission Error:", error);
      alert("Failed to submit form. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-section">
        <div className="contact-left">
          <button className="contact-icon-btn">Contact</button>
          <div className="contact-title">Get in touch</div>
          <div className="contact-description">
            Have questions or ready to transform your business with AI automation?
          </div>

          <div className="contact-info-list">
            {/* Email */}
            <div className="contact-info-card">
              <span className="icon email">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="12"
                    rx="2"
                    stroke="#ffffff"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M3 6L12 13L21 6"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
              <div className="info">
                <div>Email us</div>
                <div className="info-details">ctrleforediting@gmail.com</div>
              </div>
              <button className="action">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="url(#emailArrowGrad)" />
                  <path
                    d="M12 10l4 4-4 4"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="emailArrowGrad"
                      x1="0"
                      y1="0"
                      x2="28"
                      y2="28"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#24d18f" />
                      <stop offset="1" stopColor="#36e8a0" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>

            {/* Instagram */}
            <div className="contact-info-card">
              <span className="icon instagram">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.75 6C6.7835 6 6 6.7835 6 7.75V16.25C6 17.2165 6.7835 18 7.75 18H16.25C17.2165 18 18 17.2165 18 16.25V7.75C18 6.7835 17.2165 6 16.25 6H7.75ZM12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5ZM8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12ZM15.75 8.25C16.1642 8.25 16.5 7.91421 16.5 7.5C16.5 7.08579 16.1642 6.75 15.75 6.75C15.3358 6.75 15 7.08579 15 7.5C15 7.91421 15.3358 8.25 15.75 8.25Z"
                    fill="#ffffff"
                  />
                </svg>
              </span>
              <div className="info">
                <div>Instagram</div>
                <div className="info-details">ctrleforediting</div>
              </div>
              <button
                className="action"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/ctrleforediting?igsh=ZDlkOG1tN2R3N2Fm",
                    "_blank"
                  )
                }
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="url(#instaArrowGrad)" />
                  <path
                    d="M12 10l4 4-4 4"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="instaArrowGrad"
                      x1="0"
                      y1="0"
                      x2="28"
                      y2="28"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#24d18f" />
                      <stop offset="1" stopColor="#36e8a0" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name / Brand Name"
              name="fullName"
              required
            />
            <input
              type="text"
              placeholder="Instagram ID"
              name="instagramId"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              name="phone"
            />
            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Success Card */}
          {submitted && (
            <div className="success-card">
              🎉 Thank you for submitting!<br />
              Your form has been successfully received.<br />
              We will get in touch with you soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}