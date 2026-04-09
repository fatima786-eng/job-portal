import React, { useState } from "react";
import "./Panel.css";
import { FaSearch } from "react-icons/fa";

function Panel() {
  const [jobInput, setJobInput] = useState("");

  const myJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "EasyJobs",
      applicants: 12,
      link: "https://pk.indeed.com/jobs?q=frontend+developer",
    },
    {
      id: 2,
      title: "React Developer",
      company: "TechSoft",
      applicants: 8,
      link: "https://pk.indeed.com/jobs?q=react+developer",
    },
    {
      id: 3,
      title: "UI Designer",
      company: "Creative Studio",
      applicants: 15,
      link: "https://pk.indeed.com/jobs?q=ui+designer",
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "CodeHub",
      applicants: 9,
      link: "https://pk.indeed.com/jobs?q=backend+developer",
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "DevCore",
      applicants: 18,
      link: "https://pk.indeed.com/jobs?q=full+stack+developer",
    },
    {
      id: 6,
      title: "WordPress Developer",
      company: "WebCraft",
      applicants: 7,
      link: "https://pk.indeed.com/jobs?q=wordpress+developer",
    },
  ];

  const filteredJobs = myJobs.filter((job) =>
    job.title.toLowerCase().includes(jobInput.toLowerCase())
  );

  return (
    <div className="my-panel">
      {/* HERO SECTION */}
      <div className="hero-section">
        <h1 className="home-title">
          My Jobs Panel
          <br className="mobile-break" />
          Manage Posted Jobs
        </h1>

        <p className="home-subtitle">
          Search and manage all your posted jobs easily
        </p>

        <div className="single-search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search posted jobs..."
            className="single-search-input"
            value={jobInput}
            onChange={(e) => setJobInput(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
      </div>

      {/* JOB LIST */}
      <div className="jobs-list">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>Company: {job.company}</p>
            <p>Applicants: {job.applicants}</p>

            <a href={job.link} target="_blank" rel="noreferrer">
              <button className="apply-btn">View on Indeed</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Panel;