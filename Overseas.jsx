import React, { useState } from "react";
import "./Overseas.css";
import { FaSearch } from "react-icons/fa";

function Overseas() {
  const [jobInput, setJobInput] = useState("");

  const handleSearch = () => {
    console.log("Searching:", jobInput);
  };

  const overseasJobs = [
    { id: 1, title: "Software Engineer", company: "Tech Dubai", country: "UAE", salary: "$3000/month", visa: "Visa Sponsored" },
    { id: 2, title: "Nurse", company: "London Care", country: "UK", salary: "$4000/month", visa: "Visa Sponsored" },
    { id: 3, title: "Civil Engineer", company: "Build Canada", country: "Canada", salary: "$5000/month", visa: "Visa Sponsored" },
    { id: 4, title: "Driver", company: "Saudi Transport", country: "Saudi Arabia", salary: "$2500/month", visa: "Free Accommodation" },
    { id: 5, title: "Electrician", company: "Qatar Power", country: "Qatar", salary: "$2800/month", visa: "Visa + Food" },
    { id: 6, title: "Hotel Manager", company: "Singapore Hotels", country: "Singapore", salary: "$4500/month", visa: "Visa Sponsored" },
  ];

  const filteredJobs = overseasJobs.filter(job =>
    job.title.toLowerCase().includes(jobInput.toLowerCase())
  );

  return (
    <div className="overseas-page">
      {/* HERO SECTION */}
      <div className="hero-section">
        <h1 className="home-title">
          Hire Easy!<br className="mobile-break" />Get Hired Easy
        </h1>
        <p className="home-subtitle">
          Explore thousands of jobs in Pakistan and International
        </p>
        <div className="single-search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search overseas jobs..."
            className="single-search-input"
            value={jobInput}
            onChange={(e) => setJobInput(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* JOBS */}
      <h1 className="overseas-heading">Overseas Jobs</h1>
      <div className="overseas-list">
        {filteredJobs.map((job) => (
          <a
            href={`https://www.${job.company.replace(/\s+/g, "").toLowerCase()}.com/careers`}
            target="_blank"
            rel="noreferrer"
            key={job.id}
            className="overseas-card-link"
          >
            <div className="overseas-card">
              <h2>{job.title}</h2>
              <p>Company: {job.company}</p>
              <p>Country: {job.country}</p>
              <p>Salary: {job.salary}</p>
              <p>{job.visa}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Overseas;