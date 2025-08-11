import React from "react";
import "./cv.css";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-700">Chetan Kandya</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#experience" className="hover:text-blue-700 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-700 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-700 transition">Skills</a>
            <a href="#education" className="hover:text-blue-700 transition">Education</a>
            <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Cloud Engineer & Software Developer</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Master's in Computer Science (AI & ML focus). Currently working at{" "}
          <strong>Sectra</strong> as a Cloud Engineer. Over 3 years of experience in software
          development, DevOps, and cloud systems.
        </p>
        <div className="mt-6 space-x-4">
          <a href="https://linkedin.com/in/chetan-kandya-a5372812a" className="px-5 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
            LinkedIn
          </a>
          <a href="https://github.com/chetankandya" className="px-5 py-2 bg-gray-800 text-white rounded-full hover:bg-black transition">
            GitHub
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Experience</h2>
        {[
          {
            role: "Cloud Engineer — Sectra",
            date: "Sep 2023 – Present | Linköping, Sweden",
            desc: "Working on secure cloud infrastructure, automation, and Kubernetes solutions for healthcare systems."
          },
          {
            role: "Master Thesis Student — Ericsson",
            date: "Jan 2023 – Sep 2023",
            desc: "Researching deterministic performance in Kubernetes clusters, building autonomous monitoring and optimization tools."
          },
          {
            role: "Lab Assistant — Linköping University",
            date: "Aug 2022 – Present",
            desc: "Helping students with AI labs, reviewing and grading lab reports."
          },
          {
            role: "R&D Intern — Ericsson",
            date: "Jun 2022 – Dec 2022",
            desc: "Developed Kotlin-based microservices with monitoring using Prometheus and Grafana."
          },
          {
            role: "Software Consultant — Nordea Life & Pension",
            date: "Aug 2018 – Aug 2021",
            desc: "Java backend development, automation, and migration from monolithic to microservices architecture."
          }
        ].map((job, idx) => (
          <div key={idx} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition mb-6">
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-gray-600"><em>{job.date}</em></p>
            <p>{job.desc}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl">Hobby Kitchen</h3>
              <p>ReactJS + Java microservices app, containerized with Docker.</p>
              <a href="https://github.com/chetankandya/Hobby-Kitchen" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl">Sentiment Analysis with BERT</h3>
              <p>Classifying IMDB reviews using BERT & RoBERTa.</p>
              <a href="https://github.com/chetankandya/Sentiment-Analysis" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Java", "Kotlin", "Python", "ReactJS", "Spring Boot", "Kubernetes", "Docker", "Prometheus", "Grafana"].map((skill, idx) => (
            <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">{skill}</span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Education</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">M.Sc. Computer Science (AI & ML) — Linköping University</h3>
              <p className="text-gray-600"><em>2021 – 2023</em></p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">B.Tech. Computer Science — UPES, India</h3>
              <p className="text-gray-600"><em>2014 – 2018</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="bg-blue-700 text-white py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Email: <a href="mailto:cheka108@student.liu.se" className="underline">cheka108@student.liu.se</a></p>
          <p>Phone: +46 7675 782 39</p>
          <p className="mt-4">&copy; 2025 Chetan Kandya</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
