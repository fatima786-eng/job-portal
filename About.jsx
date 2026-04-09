import React, { useState } from "react";
import "./About.css";
import { FaSearch } from "react-icons/fa";

function About() {
  const [jobInput, setJobInput] = useState("");

  const handleSearch = () => {
    console.log("Searching:", jobInput);
  };

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <div className="hero-section">
        <h1 className="home-title">
          Hire Easy!
          <br className="mobile-break" />
          Get Hired Easy
        </h1>

        <p className="home-subtitle">
          Explore thousands of jobs in Pakistan and International
        </p>

        <div className="single-search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="single-search-input"
            value={jobInput}
            onChange={(e) => setJobInput(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* ABOUT DESCRIPTION */}
      <section className="about-description">
        <h1>About EasyJobs</h1>
        <p>
          EasyJobs is your trusted platform to connect employers with job seekers
          seamlessly. Our mission is to simplify the hiring process and empower
          talented individuals to find the right opportunities.
        </p>
        <p>
          We focus on providing a user-friendly interface, accurate job listings,
          and an efficient system that tracks applications, helping both employers
          and candidates save time and resources.
        </p>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To create a transparent, easy-to-use, and fair job portal where talented
          professionals can be matched with employers looking for the perfect fit.
        </p>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <h3>Ghulam Fatima</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <h3>Ali Khan</h3>
            <p>CTO</p>
          </div>
          <div className="team-card">
            <h3>Sana Ahmed</h3>
            <p>Head of Operations</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;