import React from "react";
import "./CV.css";

export default function App() {
  return (
    <div className="cv-container">
      <header>
        <h1>CHETAN KANDYA</h1>
        <p className="contact-info">
          Data Scientist | Software Developer<br />
          <a href="https://linkedin.com/in/chetan-kandya-a5372812a">LinkedIn</a> |{" "}
          <a href="https://github.com/chetankandya">GitHub</a><br />
          cheka108@student.liu.se | +46 7675 782 39 | Linköping, Sweden
        </p>
      </header>

      <section className="section">
        <h2>Profile</h2>
        <p>
          Software Developer with passion for systems programming. Currently pursuing my master’s degree in computer science with focus on machine learning. Over 3 years of hands-on experience in full-stack Software Development and SAFe (Scaled Agile Framework).
        </p>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <ul>
          <li><strong>Lab Assistant</strong>, Linköping University – Aug 2022 to Present</li>
          <li><strong>R&D Intern</strong>, Ericsson – Jun 2022 to Sep 2022</li>
          <li><strong>Software Consultant</strong>, Nordea Life and Pension – Aug 2018 to Aug 2021</li>
          <li><strong>Software Developer</strong>, Larsen and Toubro Infotech – Jun 2018 to Aug 2021</li>
          <li><strong>Intern</strong>, Prize Petroleum Co. Ltd. – May 2014 to Jul 2014</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <ul>
          <li>Implementing a Syntactic Parser using NLP (2022)</li>
          <li>Hobby Kitchen – React + Java Microservice (2022)</li>
          <li>Machine Learning in R (2021)</li>
          <li>Audio Mixer with FPGA Acceleration (2021)</li>
          <li>DevOps for Docker System (2020)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li>M.Sc. Computer Science (AI & ML), Linköping University – 2021–2023</li>
          <li>B.Sc. Computer Science, University of Petroleum and Energy Studies – 2014–2018</li>
        </ul>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <p>
          Java, C++, Python, R, SQL, Kotlin, Spring, Docker, React, Microservices, Prometheus, Grafana
        </p>
      </section>
    </div>
  );
}
