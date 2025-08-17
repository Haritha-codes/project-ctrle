import React from "react";
import "../styles/About.css";

export default function Client() {
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
            <div className="contact-info-card">
              <span className="icon email">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <rect width="24" height="24" rx="8" fill="#24d18f"/>
                  <path d="M4 8v8h16V8l-8 5-8-5z" fill="#fff"/>
                  <path d="M20 8l-8 5-8-5" stroke="#24d18f" strokeWidth="2"/>
                </svg>
              </span>
              <div className="info">
                <div>Email us</div>
                <div className="info-details">johnny.yarov@gmail.com</div>
              </div>
              <button className="action">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="url(#emailArrowGrad)"/>
                  <path d="M12 10l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="emailArrowGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#24d18f"/><stop offset="1" stopColor="#36e8a0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="contact-info-card">
              <span className="icon phone">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <rect width="24" height="24" rx="8" fill="#ee2828"/>
                  <path d="M7 9c1.5 3 4.5 6 7 7l2-2c1-1 0-2-1-2h-2c-1 0-2 1-2 2v2" stroke="#fff" strokeWidth="2"/>
                </svg>
              </span>
              <div className="info">
                <div>Call us</div>
                <div className="info-details">(503) 123-4567</div>
              </div>
              <button className="action">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="url(#phoneArrowGrad)"/>
                  <path d="M12 10l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="phoneArrowGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#24d18f"/><stop offset="1" stopColor="#36e8a0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="contact-info-card">
              <span className="icon location">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <rect width="24" height="24" rx="8" fill="#24d18f"/>
                  <path d="M12 7a5 5 0 0 1 5 5c0 3-5 7-5 7s-5-4-5-7a5 5 0 0 1 5-5zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="#fff"/>
                  <circle cx="12" cy="12" r="2" fill="#ee2828"/>
                </svg>
              </span>
              <div className="info">
                <div>Our location</div>
                <div className="info-details">Crosby Street, NY, US</div>
              </div>
              <button className="action">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="url(#locArrowGrad)"/>
                  <path d="M12 10l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="locArrowGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#24d18f"/><stop offset="1" stopColor="#36e8a0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form">
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <textarea placeholder="Message" name="message" required />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}