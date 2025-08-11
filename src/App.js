import React from "react";
import "./CV.css";

function App() {
  return (
    <div className="font-sans bg-sky-50 text-gray-800">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Chetan Kandya</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Cloud Engineer & Software Developer</h2>
          <p>
            Master’s in Computer Science (AI & ML focus). 
          </p> 
          <p>
            Currently working at <strong>Sectra</strong> as a Cloud Engineer.  
            Skilled in cloud, DevOps, and scalable systems.
          </p>
          <div className="hero-buttons">
            <a href="https://linkedin.com/in/chetan-kandya-a5372812a" className="btn-primary">LinkedIn</a>
            <a href="https://github.com/chetankandya" className="btn-secondary">GitHub</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section fade-in">
        <h2>About Me</h2>
        <p> I am a dedicated software developer and cloud engineer with a Master’s degree specializing in Artificial Intelligence and Machine Learning. </p>
        <p> With over 3 years of hands-on experience in full-stack development, Kubernetes, and cloud-native solutions, I combine deep technical knowledge with a passion for innovation.</p>  
        <p> I thrive in dynamic environments where I can leverage my skills in cloud infrastructure, automation, and performance optimization to deliver scalable, reliable software solutions. Currently, I’m enhancing cloud security and infrastructure at Sectra. I am eager to contribute to forward-thinking teams that value collaboration and continuous learning.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="section fade-in">
        <h2>Experience</h2>
        <div className="timeline">
          {[
            {
              role: "Cloud Engineer — Sectra",
              date: "Sep 2023 – Present",
              desc: "Secure healthcare cloud infrastructure & automation."
            },
            {
              role: "Master Thesis — Ericsson",
              date: "Jan 2023 – Sep 2023",
              desc: "Research on deterministic Kubernetes performance."
            },
            {
              role: "Lab Assistant — Linköping University",
              date: "Aug 2022 – Sep 2023",
              desc: "Guided students in AI/ML labs."
            },
            {
              role: "R&D Intern — Ericsson",
              date: "Jun 2022 – Dec 2022",
              desc: "Kotlin microservices with Prometheus/Grafana."
            },
            {
              role: "Software Consultant — Nordea Life & Pension",
              date: "Aug 2018 – Aug 2021",
              desc: "Java backend & microservices migration."
            }
          ].map((job, idx) => (
            <div key={idx} className="timeline-item">
              <h3>{job.role}</h3>
              <span>{job.date}</span>
              <p>{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section fade-in">
        <h2>Projects</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Hobby Kitchen</h3>
            <p>React + Java microservices app with Docker.</p>
            <a href="https://github.com/chetankandya/Hobby-Kitchen">View</a>
          </div>
          <div className="card">
            <h3>Sentiment Analysis with BERT</h3>
            <p>IMDB review classification with BERT & RoBERTa.</p>
            <a href="https://github.com/chetankandya/Sentiment-Analysis">View</a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section fade-in">
        <h2>Skills</h2>
        <div className="skills">
          {["Java", "Kotlin", "Python", "ReactJS", "Spring Boot", "Kubernetes", "Docker", "Prometheus", "Grafana"]
            .map((skill, idx) => <span key={idx} className="skill">{skill}</span>)}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section fade-in">
        <h2>Education</h2>
        <div className="card-grid">
          <div className="card">
            <h3>M.Sc. Computer Science</h3>
            <p>AI & ML focus — Linköping University</p>
            <span>2021 – 2023</span>
          </div>
          <div className="card">
            <h3>B.Tech. Computer Science</h3>
            <p>UPES, India</p>
            <span>2014 – 2018</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="footer">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:cheka108@student.liu.se">chetankandya23@gmail.com</a></p>
         <p className="name">© 2025 Chetan Kandya</p>
      </footer>
    </div>
  );
}

export default App;
