import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold text-blue-700">Chetan Kandya</h1>
          <nav className="mt-2 md:mt-0 flex space-x-6 text-sm">
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Software Developer & Cloud Engineer</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Experienced software developer with a Master’s in Computer Science (AI & ML focus). 
            Currently working as a <strong>Cloud Engineer at Sectra</strong> and pursuing my thesis at Ericsson on deterministic performance in Kubernetes.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-blue-700">Professional Experience</h3>
        <div className="space-y-8">
          
          <div>
            <h4 className="font-bold text-lg">Cloud Engineer — Sectra, Linköping</h4>
            <span className="text-sm text-gray-500">Sep 2023 – Present</span>
            <p className="mt-2 text-gray-700">
              Working on cloud infrastructure, automation, and Kubernetes solutions for secure healthcare systems.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg">Master Thesis Student — Ericsson, Stockholm</h4>
            <span className="text-sm text-gray-500">Jan 2023 – Present</span>
            <p className="mt-2 text-gray-700">
              Research on deterministic performance in Kubernetes clusters, designing autonomous monitoring 
              and optimization solutions using Go, Python, and Bash with tools like Prometheus, Grafana, and Linkerd.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg">R&D Intern — Ericsson, Linköping</h4>
            <span className="text-sm text-gray-500">Jun 2022 – Dec 2022</span>
            <p className="mt-2 text-gray-700">
              Developed microservices in Kotlin (SpringBoot), implemented monitoring solutions, and 
              optimized architecture for scalability and resilience.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg">Software Consultant — Nordea Life & Pension, Helsinki</h4>
            <span className="text-sm text-gray-500">Aug 2018 – Aug 2021</span>
            <p className="mt-2 text-gray-700">
              Led backend development projects, implemented automation, and migrated legacy systems to microservices.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6 text-blue-700">Key Projects</h3>
          <ul className="space-y-6">
            <li>
              <strong>Sentiment Analysis of IMDB Reviews</strong> — Trained BERT & RoBERTa for sentiment classification. 
              <a href="https://github.com/chetankandya/Sentiment-Analysis" className="text-blue-600 ml-2">View Code</a>
            </li>
            <li>
              <strong>Hobby Kitchen</strong> — ReactJS + Java microservice app, containerized with Docker.
              <a href="https://github.com/chetankandya/Hobby-Kitchen" className="text-blue-600 ml-2">View Code</a>
            </li>
            <li>
              <strong>Audio Mixer with FPGA Acceleration</strong> — Real-time audio equalizer with Python & FPGA.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-blue-700">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <span className="bg-white p-3 rounded shadow">Java, Kotlin, Go, Python</span>
          <span className="bg-white p-3 rounded shadow">ReactJS, Spring Boot</span>
          <span className="bg-white p-3 rounded shadow">Kubernetes, Docker</span>
          <span className="bg-white p-3 rounded shadow">Prometheus, Grafana</span>
          <span className="bg-white p-3 rounded shadow">PostgreSQL, MongoDB</span>
          <span className="bg-white p-3 rounded shadow">Linux, CI/CD</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p>Email: <a href="mailto:chetankandya23@gmail.com" className="underline">chetankandya23@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/chetan-kandya-a5372812a" className="underline">linkedin.com/in/chetan-kandya</a></p>
          <p>GitHub: <a href="https://github.com/chetankandya" className="underline">github.com/chetankandya</a></p>
        </div>
      </section>
    </div>
  );
}
