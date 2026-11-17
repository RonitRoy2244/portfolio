import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Printer, 
  FileText
} from 'lucide-react';
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
      className={`rounded-3xl border p-0 w-[94vw] max-w-4xl max-h-[90vh] shadow-2xl backdrop:backdrop-blur-md ${
        darkMode 
          ? 'bg-slate-950 text-slate-100 border-slate-800' 
          : 'bg-white text-slate-900 border-slate-200'
      }`}
    >
      {/* Top Modal Controls Header */}
      <div className={`sticky top-0 z-20 px-6 py-4 border-b flex items-center justify-between backdrop-blur-md ${
        darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50/90 border-slate-200'
      }`}>
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-400" />
          <h2 id="resume-title" className="text-base font-bold font-mono">
            {personalInfo.name} — Full Resume
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
              darkMode 
                ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400 border-slate-700' 
                : 'bg-white hover:bg-slate-100 text-blue-600 border-slate-300 shadow-xs'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>

          <form method="dialog">
            <button
              value="cancel"
              autoFocus
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode ? 'bg-slate-800 text-slate-400 hover:text-white border-slate-700' : 'bg-white text-slate-500 hover:text-slate-900 border-slate-300'
              }`}
              aria-label="Close resume modal"
            >
              <X className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Resume Content (Exact copy matching the PDF resume) */}
      <div className="p-6 sm:p-10 space-y-8 overflow-y-auto max-h-[calc(90vh-70px)] font-sans">
        
        {/* Header Block */}
        <div className="text-center border-b border-slate-800/60 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {personalInfo.name.toUpperCase()}
          </h1>
          <p className="text-sm font-semibold text-cyan-400 mt-1 font-mono">
            Full Stack Java Developer | Spring Boot · React.js · REST APIs · MySQL · JUnit
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
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
        <div>
          <h3 className="text-sm font-bold font-mono tracking-wider text-cyan-400 uppercase border-b border-slate-800 pb-1 mb-2">
            SUMMARY
          </h3>
          <p className="text-sm leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>

        {/* TECHNICAL SKILLS */}
        <div>
          <h3 className="text-sm font-bold font-mono tracking-wider text-cyan-400 uppercase border-b border-slate-800 pb-1 mb-3">
            TECHNICAL SKILLS
          </h3>
          <div className="space-y-1.5 text-xs font-mono">
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
        <div>
          <h3 className="text-sm font-bold font-mono tracking-wider text-cyan-400 uppercase border-b border-slate-800 pb-1 mb-3">
            PROFESSIONAL EXPERIENCE
          </h3>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold mb-1">
              <span>Web Developer | Groveus Informatics and Private Limited, Siliguri, India</span>
              <span className="font-mono text-cyan-400">August 2026 – Present</span>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs leading-relaxed text-slate-300">
              <li>Delivered client-ready websites with <strong>100% client satisfaction</strong>, converting client design requirements into responsive HTML5, CSS3, JavaScript (ES6+), and Bootstrap pages.</li>
              <li>Debugged front-end issues and optimized page performance in collaboration with the development team, following coding best practices.</li>
              <li>Developed interactive JavaScript UI elements that improved user experience across client-facing pages.</li>
            </ul>
          </div>
        </div>

        {/* PROJECTS */}
        <div>
          <h3 className="text-sm font-bold font-mono tracking-wider text-cyan-400 uppercase border-b border-slate-800 pb-1 mb-4">
            PROJECTS
          </h3>
          
          {/* CodeArena */}
          <div className="mb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold mb-0.5">
              <span>CodeArena – Online Code Judge & Competitive Programming Platform</span>
              <a href="https://github.com/RonitRoy2244" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-mono underline">GitHub</a>
            </div>
            <div className="text-[11px] font-mono text-slate-400 italic mb-2">
              Java 17, Spring Boot, Spring Security, JWT, Hibernate (JPA), MySQL, JUnit 5, MockMvc, React.js, Vite
            </div>
            <ul className="list-disc list-outside pl-5 space-y-1 text-xs leading-relaxed text-slate-300">
              <li>Built a LeetCode-style online judge with Spring Boot and React that runs submitted Java and JavaScript code in isolated OS subprocesses, with time limits, process-tree termination, and a <strong>64 KB output cap</strong>.</li>
              <li>Designed <strong>11 REST API endpoints</strong> on MySQL across 4 entities, secured with stateless JWT authentication, BCrypt, and role-based access control for admin endpoints.</li>
              <li>Added per-user rate limiting (1 submission per 5 seconds) and a <strong>semaphore capping concurrent runs at 3</strong>; hidden test cases never leave the server.</li>
              <li>Wrote <strong>25 automated tests</strong> with JUnit 5 and Spring MockMvc covering authentication, problems, submissions, and the code runner.</li>
            </ul>
          </div>

          {/* Meridian */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold mb-0.5">
              <span>Meridian – Full-Stack E-Commerce Platform</span>
              <a href="https://github.com/RonitRoy2244" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-mono underline">GitHub</a>
            </div>
            <div className="text-[11px] font-mono text-slate-400 italic mb-2">
              Java, Spring Boot, Spring Security, JWT, Hibernate (JPA), MySQL, React.js, Bootstrap, AWS (EC2, RDS), Nginx
            </div>
            <ul className="list-disc list-outside pl-5 space-y-1 text-xs leading-relaxed text-slate-300">
              <li>Designed, built, and deployed a full-stack e-commerce platform covering <strong>4 core flows</strong>: user registration, product browsing, cart management, and order checkout.</li>
              <li>Built <strong>10+ RESTful API endpoints</strong> with Spring Boot and Hibernate (JPA) on MySQL, secured with stateless JWT authentication and BCrypt password hashing.</li>
              <li>Developed a responsive React.js frontend with Bootstrap, and deployed the application on AWS (EC2, RDS) with Nginx and security groups.</li>
            </ul>
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h3 className="text-sm font-bold font-mono tracking-wider text-cyan-400 uppercase border-b border-slate-800 pb-1 mb-3">
            EDUCATION
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold">
              <span>Bachelor of Technology, Computer Science and Engineering</span>
              <span className="font-mono text-slate-400">2020 – 2024</span>
            </div>
            <div className="text-slate-400">Techno India University | GPA: 7.8 / 10.0</div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold pt-2 border-t border-slate-800/40">
              <span>Class XII (CBSE Science) | Delhi Public School, Siliguri | 75%</span>
              <span className="font-mono text-slate-400">2020</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold pt-2 border-t border-slate-800/40">
              <span>Class X (ICSE) | Don Bosco School, Siliguri | 83%</span>
              <span className="font-mono text-slate-400">2018</span>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h3 className="text-sm font-bold font-mono tracking-wider text-cyan-400 uppercase border-b border-slate-800 pb-1 mb-2">
            CERTIFICATIONS
          </h3>
          <p className="text-xs">
            Full Stack Java Developer, NareshIT Hyderabad | Introduction to Web Development with HTML, CSS, JavaScript, IBM
          </p>
        </div>

      </div>
    </dialog>
  );
}
