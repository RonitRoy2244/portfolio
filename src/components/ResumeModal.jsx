import React, { useEffect, useRef } from 'react';
import { X, Printer } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, darkMode }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <dialog
      ref={dialogRef}
      id="resume-modal"
      aria-labelledby="resume-title"
      onClose={onClose}
      className={`rounded-xl border p-0 w-[92vw] max-w-3xl max-h-[88vh] shadow-2xl backdrop:backdrop-blur-sm ${
        darkMode 
          ? 'bg-[#111214] text-zinc-100 border-zinc-800' 
          : 'bg-white text-zinc-900 border-zinc-200'
      }`}
    >
      {/* Top Header */}
      <div className={`sticky top-0 z-20 px-6 py-3 border-b flex items-center justify-between backdrop-blur-md ${
        darkMode ? 'bg-[#111214]/90 border-zinc-800' : 'bg-white/90 border-zinc-200'
      }`}>
        <h2 id="resume-title" className="text-xs font-mono font-semibold uppercase text-zinc-400">
          Curriculum Vitae — {personalInfo.name}
        </h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border transition-colors cursor-pointer ${
              darkMode 
                ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-700' 
                : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-800 border-zinc-300'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print PDF</span>
          </button>

          <form method="dialog">
            <button
              value="cancel"
              autoFocus
              className={`p-1 rounded border transition-colors cursor-pointer ${
                darkMode ? 'bg-zinc-900 text-zinc-400 hover:text-white border-zinc-700' : 'bg-zinc-50 text-zinc-500 hover:text-zinc-900 border-zinc-300'
              }`}
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Clean Typeset Resume Document */}
      <div className="p-8 sm:p-12 space-y-8 overflow-y-auto max-h-[calc(88vh-55px)] font-sans text-xs sm:text-[13px] leading-relaxed">
        
        {/* Header Block */}
        <div className="text-center border-b border-zinc-200 dark:border-zinc-800 pb-6 space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {personalInfo.name.toUpperCase()}
          </h1>
          <p className="font-mono text-zinc-500">
            Full Stack Java Developer | Spring Boot · React.js · REST APIs · MySQL · JUnit
          </p>
          <div className="text-xs font-mono text-zinc-500 flex flex-wrap justify-center gap-3 pt-2">
            <span>{personalInfo.email}</span>
            <span>|</span>
            <span>{personalInfo.phone}</span>
            <span>|</span>
            <span>github.com/RonitRoy2244</span>
            <span>|</span>
            <span>linkedin.com/in/ronit-roy-a60268225</span>
            <span>|</span>
            <span>Siliguri, India</span>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="space-y-1.5">
          <h3 className="font-mono font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Summary
          </h3>
          <p className="pt-1">
            {personalInfo.summary}
          </p>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="space-y-2">
          <h3 className="font-mono font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Technical Skills
          </h3>
          <div className="space-y-1 pt-1 font-mono text-xs">
            <div><strong>Languages:</strong> Java (Core & Advanced), JavaScript (ES6+), SQL, HTML5, CSS3</div>
            <div><strong>Backend:</strong> Spring Boot, Spring MVC, Spring Security, Hibernate (JPA), JDBC, REST APIs, JWT Authentication, RBAC</div>
            <div><strong>Testing:</strong> JUnit 5, Spring MockMvc, Integration Testing, Unit Testing</div>
            <div><strong>Frontend:</strong> React.js, Vite, Bootstrap, Responsive Web Design</div>
            <div><strong>Databases:</strong> MySQL, Oracle, MongoDB</div>
            <div><strong>Core Concepts:</strong> Object-Oriented Programming (OOP), Data Structures, MVC Architecture, Concurrency Control</div>
            <div><strong>AI-Assisted Development:</strong> Claude, Antigravity</div>
          </div>
        </div>

        {/* PROFESSIONAL EXPERIENCE */}
        <div className="space-y-3">
          <h3 className="font-mono font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Professional Experience
          </h3>
          <div className="space-y-1.5 pt-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold">
              <span>Web Developer | Groveus Informatics and Private Limited, Siliguri, India</span>
              <span className="font-mono text-zinc-500 text-xs font-normal">August 2026 – Present</span>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-1 text-zinc-300 dark:text-zinc-300">
              <li>Delivered client-ready websites with <strong>100% client satisfaction</strong>, converting client design requirements into responsive HTML5, CSS3, JavaScript (ES6+), and Bootstrap pages.</li>
              <li>Debugged front-end issues and optimized page performance in collaboration with the development team, following coding best practices.</li>
              <li>Developed interactive JavaScript UI elements that improved user experience across client-facing pages.</li>
            </ul>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="space-y-4">
          <h3 className="font-mono font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Projects
          </h3>

          {/* CodeArena */}
          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold">
              <span>CodeArena — Online Code Judge & Competitive Programming Platform</span>
              <a href="https://github.com/RonitRoy2244" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-amber-500 underline">GitHub</a>
            </div>
            <p className="font-mono text-xs text-zinc-500 italic">
              Java 17, Spring Boot, Spring Security, JWT, Hibernate (JPA), MySQL, JUnit 5, MockMvc, React.js, Vite
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 text-zinc-300 dark:text-zinc-300">
              <li>Built a LeetCode-style online judge with Spring Boot and React that runs submitted Java and JavaScript code in isolated OS subprocesses, with time limits, process-tree termination, and a <strong>64 KB output cap</strong>.</li>
              <li>Designed <strong>11 REST API endpoints</strong> on MySQL across 4 entities, secured with stateless JWT authentication, BCrypt, and role-based access control for admin endpoints.</li>
              <li>Added per-user rate limiting (1 submission per 5 seconds) and a <strong>semaphore capping concurrent runs at 3</strong>; hidden test cases never leave the server.</li>
              <li>Wrote <strong>25 automated tests</strong> with JUnit 5 and Spring MockMvc covering authentication, problems, submissions, and the code runner.</li>
            </ul>
          </div>

          {/* Meridian */}
          <div className="space-y-1.5 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold">
              <span>Meridian — Full-Stack E-Commerce Platform</span>
              <a href="https://github.com/RonitRoy2244" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-amber-500 underline">GitHub</a>
            </div>
            <p className="font-mono text-xs text-zinc-500 italic">
              Java, Spring Boot, Spring Security, JWT, Hibernate (JPA), MySQL, React.js, Bootstrap, AWS (EC2, RDS), Nginx
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 text-zinc-300 dark:text-zinc-300">
              <li>Designed, built, and deployed a full-stack e-commerce platform covering <strong>4 core flows</strong>: user registration, product browsing, cart management, and order checkout.</li>
              <li>Built <strong>10+ RESTful API endpoints</strong> with Spring Boot and Hibernate (JPA) on MySQL, secured with stateless JWT authentication and BCrypt password hashing.</li>
              <li>Developed a responsive React.js frontend with Bootstrap, and deployed the application on AWS (EC2, RDS) with Nginx and security groups.</li>
            </ul>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="space-y-3">
          <h3 className="font-mono font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Education
          </h3>
          <div className="space-y-2 pt-1 font-mono text-xs">
            <div className="flex justify-between font-semibold">
              <span>Bachelor of Technology, Computer Science and Engineering</span>
              <span className="text-zinc-500 font-normal">2020 – 2024</span>
            </div>
            <div className="text-zinc-500">Techno India University | GPA: 7.8 / 10.0</div>

            <div className="flex justify-between font-semibold pt-1">
              <span>Class XII (CBSE Science) | Delhi Public School, Siliguri | 75%</span>
              <span className="text-zinc-500 font-normal">2020</span>
            </div>

            <div className="flex justify-between font-semibold pt-1">
              <span>Class X (ICSE) | Don Bosco School, Siliguri | 83%</span>
              <span className="text-zinc-500 font-normal">2018</span>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="space-y-1.5">
          <h3 className="font-mono font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Certifications
          </h3>
          <p className="pt-1">
            Full Stack Java Developer, NareshIT Hyderabad | Introduction to Web Development with HTML, CSS, JavaScript, IBM
          </p>
        </div>

      </div>
    </dialog>
  );
}
