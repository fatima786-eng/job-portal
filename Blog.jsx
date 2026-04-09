import React, { useState } from "react";
import "./Blog.css";
import { FaSearch } from "react-icons/fa";

const companies = [
  {
    id: 1,
    name: "Google",
    country: "USA",
    employees: "182,000+",
    jobs: "2,500+",
    website: "https://careers.google.com",
  },
  {
    id: 2,
    name: "Microsoft",
    country: "USA",
    employees: "221,000+",
    jobs: "1,800+",
    website: "https://jobs.microsoft.com",
  },
  {
    id: 3,
    name: "Amazon",
    country: "USA",
    employees: "1,550,000+",
    jobs: "10,000+",
    website: "https://www.amazon.jobs",
  },
  {
    id: 4,
    name: "Apple",
    country: "USA",
    employees: "161,000+",
    jobs: "1,200+",
    website: "https://www.apple.com/careers",
  },
  {
    id: 5,
    name: "Meta",
    country: "USA",
    employees: "67,000+",
    jobs: "900+",
    website: "https://www.meta.com/careers",
  },
  {
    id: 6,
    name: "Accenture",
    country: "Ireland",
    employees: "774,000+",
    jobs: "3,300+",
    website: "https://www.accenture.com/careers",
  },
  {
    id: 7,
    name: "Deloitte",
    country: "UK",
    employees: "457,000+",
    jobs: "4,800+",
    website: "https://www.deloitte.com/careers",
  },
  {
    id: 8,
    name: "TCS",
    country: "India",
    employees: "615,000+",
    jobs: "1,500+",
    website: "https://careers.tcs.com",
  },
  {
    id: 9,
    name: "Infosys",
    country: "India",
    employees: "317,000+",
    jobs: "1,100+",
    website: "https://careers.infosys.com",
  },
  {
    id: 10,
    name: "Unilever",
    country: "UK",
    employees: "128,000+",
    jobs: "700+",
    website: "https://www.unilever.com/careers",
  },
  {
    id: 11,
    name: "Siemens",
    country: "Germany",
    employees: "320,000+",
    jobs: "1,300+",
    website: "https://www.siemens.com/careers",
  },
  {
    id: 12,
    name: "IBM",
    country: "USA",
    employees: "282,000+",
    jobs: "850+",
    website: "https://careers.ibm.com",
  },
];

function Blog() {
  const [jobInput, setJobInput] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(jobInput.toLowerCase())
  );

  const handleSearch = () => {
    console.log("Searching for:", jobInput);
  };

  return (
    <div className="blog-page">
      {/* HERO SECTION */}
      <div className="hero-section">
        <h1 className="home-title">
          Hire Easy!
          <br className="mobile-break" />
          Get Hired Easy
        </h1>
        <p className="home-subtitle">
          Explore live hiring companies around the world
        </p>

        {/* SEARCH BAR */}
        <div className="single-search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search companies..."
            className="single-search-input"
            value={jobInput}
            onChange={(e) => setJobInput(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* COMPANY LIST */}
      <h1 className="blog-title">Top National & International Companies</h1>
      <p className="blog-subtitle">
        Explore live hiring companies with employee details and job openings
      </p>

      <div className="company-grid">
        {filteredCompanies.map((company) => (
          <div key={company.id} className="company-card">
            <h2>{company.name}</h2>
            <p>
              <strong>Country:</strong> {company.country}
            </p>
            <p>
              <strong>Employees:</strong> {company.employees}
            </p>
            <p>
              <strong>Available Jobs:</strong> {company.jobs}
            </p>

            <a href={company.website} target="_blank" rel="noreferrer">
              <button>View Careers</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;