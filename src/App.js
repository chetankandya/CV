import React from "react";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Chetan Kandya</h1>
        <p className="text-lg">Data Scientist | Software Developer</p>
        <div className="mt-4 space-x-4">
          <a href="https://linkedin.com/in/chetan-kandya-a5372812a" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/chetankandya" className="hover:underline">GitHub</a>
          <a href="mailto:cheka108@student.liu.se" className="hover:underline">Email</a>
        </div>
      </header>

      {/* About */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p>
          Software Developer with a passion for systems programming, currently pursuing my
          Master's in Computer Science with a focus on Machine Learning at Linköping University.
          Over 3 years of experience in full-stack development and SAFe (Scaled Agile Framework).
          Aspiring to work in dynamic, challenging environments that foster growth and innovation.
        </p>
      </section>

      {/* Experience */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Lab Assistant</strong> – Linköping University (Aug 2022 – Present)  
            Helping students with labs, reviewing and grading reports.
          </li>
          <li>
            <strong>R&D Intern</strong> – Ericsson (Sep 2022 – Jun 2022)  
            Microservice development in Kotlin, Docker deployments, monitoring with Prometheus & Grafana.
          </li>
          <li>
            <strong>Software Consultant</strong> – Nordea Life & Pension (Aug 2018 – Aug 2021)  
            Java backend development, migrating to microservices, REST API development.
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="https://github.com/chetankandya/Logistic-Regression" className="block p-4 bg-white rounded shadow hover:shadow-lg">
            <h3 className="font-bold">Machine Learning in R</h3>
            <p>Implemented algorithms like KNN, Logistic Regression, SVM, Neural Networks, and more.</p>
          </a>
          <a href="https://github.com/chetankandya/AudioMIxer/tree/FPGAAcceleration" className="block p-4 bg-white rounded shadow hover:shadow-lg">
            <h3 className="font-bold">Audio Mixer with FPGA Acceleration</h3>
            <p>Audio equalizer in Python, optimized using FPGA.</p>
          </a>
          <a href="https://github.com/chetankandya/Spring-Boot-Docker" className="block p-4 bg-white rounded shadow hover:shadow-lg">
            <h3 className="font-bold">DevOps for Docker System</h3>
            <p>Spring Boot app integrated with Azure CI/CD, Dockerized for cost optimization.</p>
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <p><strong>Languages:</strong> Java, C++, Python, R, SQL, Kotlin</p>
        <p><strong>Frameworks:</strong> Spring Boot, React, Docker, SAFe</p>
        <p><strong>Tools:</strong> Git, Jenkins, Prometheus, Grafana</p>
      </section>

      {/* Education */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul>
          <li>Master's in Computer Science (AI & ML) – Linköping University, Sweden (2021–2023)</li>
          <li>Bachelor's in Computer Science – University of Petroleum & Energy Studies, India (2014–2018)</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 text-center">
        © {new Date().getFullYear()} Chetan Kandya
      </footer>
    </div>
  );
}
