import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LandingPage.css"; // we'll create custom css

function LandingPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="landing-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div
        className="content"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h2 className="brand-name">RentRoom</h2>
        <p className="tagline">
          We make your stay <span>comfortable</span> and <span>memorable</span>
        </p>
        <Link to="/home">
          <button className="book-btn" data-aos="zoom-in" data-aos-duration="1000">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}


export default LandingPage;

