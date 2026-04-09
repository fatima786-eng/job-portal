import React, { useState } from "react";
import "./Home.css";
import { FaSearch, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

function Home() {
  const [jobInput, setJobInput] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showJobs, setShowJobs] = useState(false);
  const [showPostJob, setShowPostJob] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [postedJobs, setPostedJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: "", location: "", type: "Full Time", salary: "" });
  const [showPayment, setShowPayment] = useState(false);

  // Permanent Job List with Indeed Links
  const jobList = [
    { 
      title: "Frontend Developer", 
      location: "Lahore", 
      type: "Full Time", 
      salary: "80k", 
      link: "https://pk.indeed.com/q-frontend-developer-l-lahore-jobs.html" 
    },
    { 
      title: "Graphic Designer", 
      location: "Karachi", 
      type: "Remote", 
      salary: "60k", 
      link: "https://pk.indeed.com/q-graphic-designer-l-karachi-jobs.html" 
    },
    { 
      title: "Intern Developer", 
      location: "Islamabad", 
      type: "Internship", 
      salary: "30k", 
      link: "https://pk.indeed.com/q-intern-developer-l-islamabad-jobs.html" 
    },
    { 
      title: "Backend Developer", 
      location: "Lahore", 
      type: "Part Time", 
      salary: "50k", 
      link: "https://pk.indeed.com/q-backend-developer-l-lahore-jobs.html" 
    },
    { 
      title: "React JS Expert", 
      location: "Remote", 
      type: "Full Time", 
      salary: "120k", 
      link: "https://pk.indeed.com/q-react-js-jobs.html" 
    },
    // Add this inside your Home component
  // Full Time
  { title: "Frontend Developer", location: "Lahore", type: "Full Time", salary: "80k", link: "https://pk.indeed.com/q-frontend-developer-jobs.html" },
  { title: "Backend Engineer", location: "Karachi", type: "Full Time", salary: "110k", link: "https://pk.indeed.com/q-backend-developer-jobs.html" },
  { title: "MERN Stack Dev", location: "Islamabad", type: "Full Time", salary: "130k", link: "https://pk.indeed.com/q-mern-stack-jobs.html" },
  { title: "UI/UX Designer", location: "Remote", type: "Full Time", salary: "90k", link: "https://pk.indeed.com/q-ui-ux-designer-jobs.html" },
  { title: "Python Developer", location: "Lahore", type: "Full Time", salary: "100k", link: "https://pk.indeed.com/q-python-developer-jobs.html" },
  
  // Remote
  { title: "React Developer", location: "Remote", type: "Remote", salary: "150k", link: "https://pk.indeed.com/q-remote-react-jobs.html" },
  { title: "Content Writer", location: "Remote", type: "Remote", salary: "50k", link: "https://pk.indeed.com/q-content-writer-jobs.html" },
  { title: "SEO Specialist", location: "Remote", type: "Remote", salary: "70k", link: "https://pk.indeed.com/q-seo-specialist-jobs.html" },
  { title: "Digital Marketer", location: "Remote", type: "Remote", salary: "65k", link: "https://pk.indeed.com/q-digital-marketing-jobs.html" },
  { title: "Virtual Assistant", location: "Remote", type: "Remote", salary: "40k", link: "https://pk.indeed.com/q-virtual-assistant-jobs.html" },

  // Internship
  { title: "Web Dev Intern", location: "Lahore", type: "Internship", salary: "25k", link: "https://pk.indeed.com/q-web-development-internship-jobs.html" },
  { title: "Graphic Design Intern", location: "Karachi", type: "Internship", salary: "20k", link: "https://pk.indeed.com/q-graphic-design-internship-jobs.html" },
  { title: "Software Intern", location: "Islamabad", type: "Internship", salary: "30k", link: "https://pk.indeed.com/q-software-internship-jobs.html" },
  { title: "App Dev Intern", location: "Faisalabad", type: "Internship", salary: "22k", link: "https://pk.indeed.com/q-app-development-internship-jobs.html" },
  { title: "QA Intern", location: "Lahore", type: "Internship", salary: "25k", link: "https://pk.indeed.com/q-qa-internship-jobs.html" },
  { title: "Data Entry Intern", location: "Rawalpindi", type: "Internship", salary: "15k", link: "https://pk.indeed.com/q-data-entry-internship-jobs.html" },

  // Part Time
  { title: "Social Media Manager", location: "Lahore", type: "Part Time", salary: "35k", link: "https://pk.indeed.com/q-part-time-social-media-jobs.html" },
  { title: "Video Editor", location: "Karachi", type: "Part Time", salary: "45k", link: "https://pk.indeed.com/q-part-time-video-editor-jobs.html" },
  { title: "PHP Developer", location: "Remote", type: "Part Time", salary: "55k", link: "https://pk.indeed.com/q-part-time-php-jobs.html" },
  { title: "Support Agent", location: "Islamabad", type: "Part Time", salary: "30k", link: "https://pk.indeed.com/q-part-time-customer-support-jobs.html" }
  ];

  const filteredJobs =
    selectedFilter === "All"
      ? jobList
      : jobList.filter((job) => job.type === selectedFilter);

  // Handlers
  const handleApplyClick = () => {
    if (!isLoggedIn) setShowLogin(true);
    else {
      setShowJobs(true);
      setShowPostJob(false);
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  const handlePostJobClick = () => {
    if (!isLoggedIn) setShowLogin(true);
    else {
      setShowPostJob(true);
      setShowJobs(false);
      setShowPayment(false);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowJobs(true);
  };

  const handleJobPost = () => {
    if (!newJob.title || !newJob.location || !newJob.salary) {
      alert("Please fill all fields");
      return;
    }
    setPostedJobs([...postedJobs, newJob]);
    setNewJob({ title: "", location: "", type: "Full Time", salary: "" });
    setShowPayment(true);
  };

  return (
    <div className="home">
      {/* HERO SECTION */}
      <div className="hero-section">
        <h1 className="home-title">
          Hire Easy! <br className="mobile-break" /> Get Hired Easy
        </h1>
        <p className="home-subtitle">Explore thousands of jobs in Pakistan and International</p>
        <div className="single-search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="single-search-input"
            value={jobInput}
            onChange={(e) => setJobInput(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
      </div>

      {/* FEATURE CARDS (NAVIGATION) */}
      <div className="feature-cards">
        <div className="feature-row" onClick={handleApplyClick}>
          <div className="feature-card"><img src="/src/assets/apply jobs.png" alt="Apply" /></div>
        </div>
        <div className="feature-row" onClick={handlePostJobClick}>
          <div className="feature-card"><img src="/src/assets/post a job.png" alt="Post" /></div>
        </div>
        <div className="feature-row" onClick={() => { setShowJobs(true); setShowPostJob(false); }}>
          <div className="feature-card"><img src="/src/assets/job offer.png" alt="Jobs List" /></div>
        </div>
        <div className="feature-row">
          <div className="feature-card"><img src="/src/assets/jobs seekers.png" alt="Seekers" /></div>
        </div>
      </div>

      {/* JOBS DISPLAY SECTION */}
      {showJobs && (
        <div className="jobs-wrapper">
          <div className="sidebar">
            <h3>Filter Type</h3>
            {["All", "Full Time", "Part Time", "Remote", "Internship"].map((filter) => (
              <div
                key={filter}
                className={`filter-item ${selectedFilter === filter ? "active-filter" : ""}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </div>
            ))}
          </div>

          <div className="jobs-list">
            <h2 className="section-heading">Available Job Offers</h2>
            {filteredJobs.map((job, idx) => (
              <div key={idx} className="job-display-card">
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <p>{job.location} • <strong>{job.type}</strong></p>
                  <span className="salary-tag">Salary: {job.salary}</span>
                </div>
                <a href={job.link} target="_blank" rel="noopener noreferrer" className="apply-now-btn">
                  Apply on Indeed <FaExternalLinkAlt size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* POST JOB FORM (Same logic as before, kept clean) */}
      {showPostJob && (
        <div className="jobs-wrapper">
           {/* ... existing Post Job Form code ... */}
           <div className="job-card">
              <h3>Post Your Job</h3>
              <input type="text" placeholder="Job Title" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
              <input type="text" placeholder="Location" value={newJob.location} onChange={(e) => setNewJob({ ...newJob, location: e.target.value })} />
              <input type="text" placeholder="Salary" value={newJob.salary} onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })} />
              <select value={newJob.type} onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}>
                <option>Full Time</option><option>Part Time</option><option>Remote</option><option>Internship</option>
              </select>
              <button onClick={handleJobPost}>Submit & Pay</button>
           </div>
        </div>
      )}

    {/* CLEAN LOGIN MODAL */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="login-modal">
            <FaTimes className="close-icon" onClick={() => setShowLogin(false)} />
            <h2>Login foam</h2>
            <p className="login-subtitle">Please enter your details to sign in</p>
            
            <input type="email" placeholder="Email Address" className="modal-input" />
            <input type="password" placeholder="Password" className="modal-input" />
            
            <button className="modal-btn" onClick={handleLogin}>Login</button>
            
            <div className="login-footer">
              Don't have an account? <span>Sign Up</span>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Home;