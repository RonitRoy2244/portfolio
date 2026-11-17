import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalInfo, skillsData, experienceData, projectsData, educationData, certificationsData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function TerminalModal({ isOpen, onClose, darkMode, setDarkMode, openResumeModal }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Ronit Roy Portfolio CLI [Version 2026.1]' },
    { type: 'system', text: 'Type "help" to view all available commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const rawCmd = inputVal.trim();
      const cmd = rawCmd.toLowerCase();

      if (!rawCmd) return;

      const newHistory = [...history, { type: 'user', text: rawCmd }];
      setCommandHistory(prev => [...prev, rawCmd]);
      setHistoryIndex(-1);

      switch (cmd) {
        case 'help':
          newHistory.push({
            type: 'output',
            text: `Available commands:
  help            - List all available commands
  about / bio     - Professional summary & background
  skills          - Full breakdown of technical skills
  projects        - Overview of CodeArena & Meridian
  experience      - Current role at Groveus Informatics
  education       - Degrees, institutions & GPA
  certs           - NareshIT & IBM certifications
  contact         - Email, phone, GitHub, LinkedIn
  curl resume     - View complete resume
  sudo hire       - Trigger hire celebration & contact flow
  theme           - Toggle light/dark mode
  clear           - Clear terminal window`
          });
          break;

        case 'about':
        case 'bio':
        case 'summary':
          newHistory.push({
            type: 'output',
            text: `${personalInfo.name} — ${personalInfo.role}
Location: ${personalInfo.location}
Status: ${personalInfo.status}

Summary:
${personalInfo.summary}`
          });
          break;

        case 'skills':
          newHistory.push({
            type: 'output',
            text: `TECHNICAL SKILLS:
- Languages: Java (Core & Advanced), JavaScript (ES6+), SQL, HTML5, CSS3
- Backend: Spring Boot, Spring MVC, Spring Security, Hibernate (JPA), JDBC, REST APIs, JWT, RBAC
- Testing: JUnit 5, Spring MockMvc, Integration Testing, Unit Testing
- Frontend: React.js, Vite, Bootstrap, Responsive Web Design
- Databases: MySQL, Oracle, MongoDB
- Core: OOP, Data Structures, MVC Architecture, Concurrency Control (Semaphores, OS Subprocesses)
- AI Dev: Claude, Antigravity`
          });
          break;

        case 'projects':
          newHistory.push({
            type: 'output',
            text: `FEATURED PROJECTS:
1. CodeArena — Online Code Judge & Competitive Programming Platform
   • Java 17, Spring Boot, Spring Security, JWT, Hibernate (JPA), MySQL, JUnit 5, MockMvc, React.js, Vite
   • Isolated OS subprocesses runner with 64 KB output buffer cap and semaphore(3) throttling.
   • 11 REST API endpoints, 25 automated tests with JUnit 5 and MockMvc.

2. Meridian — Full-Stack E-Commerce Platform
   • Java, Spring Boot, Spring Security, JWT, Hibernate (JPA), MySQL, React.js, Bootstrap, AWS (EC2, RDS), Nginx
   • 4 core flows: user registration, product browsing, cart management, order checkout.
   • 10+ RESTful API endpoints on MySQL, deployed on AWS with Nginx reverse proxy.`
          });
          break;

        case 'experience':
        case 'work':
          newHistory.push({
            type: 'output',
            text: `PROFESSIONAL EXPERIENCE:
Web Developer | Groveus Informatics and Private Limited, Siliguri, India
August 2026 – Present
• Delivered client-ready websites with 100% client satisfaction, converting client design requirements into responsive HTML5, CSS3, JavaScript (ES6+), and Bootstrap pages.
• Debugged front-end issues and optimized page performance in collaboration with the development team.
• Developed interactive JavaScript UI elements that improved UX across client-facing pages.`
          });
          break;

        case 'education':
        case 'edu':
          newHistory.push({
            type: 'output',
            text: `EDUCATION:
• B.Tech, Computer Science and Engineering (2020 – 2024)
  Techno India University | GPA: 7.8 / 10.0
• Class XII (CBSE Science) (2020)
  Delhi Public School, Siliguri | 75%
• Class X (ICSE) (2018)
  Don Bosco School, Siliguri | 83%`
          });
          break;

        case 'certs':
        case 'certifications':
          newHistory.push({
            type: 'output',
            text: `CERTIFICATIONS:
1. Full Stack Java Developer — NareshIT Hyderabad
2. Introduction to Web Development with HTML, CSS, JavaScript — IBM`
          });
          break;

        case 'contact':
          newHistory.push({
            type: 'output',
            text: `CONTACT INFORMATION:
• Email: ${personalInfo.email}
• Phone: ${personalInfo.phone}
• GitHub: ${personalInfo.github}
• LinkedIn: ${personalInfo.linkedin}
• Location: ${personalInfo.location}`
          });
          break;

        case 'curl resume':
          newHistory.push({
            type: 'output',
            text: `Fetching resume... Opening native resume view.`
          });
          openResumeModal();
          break;

        case 'sudo hire':
        case 'sudo hire ronit':
          newHistory.push({
            type: 'output',
            text: `[AUTH SUCCESS]: Candidate Ronit Roy selected!
Dispatching interview request to royr2866@gmail.com...
Welcome aboard!`
          });
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.5 }
          });
          break;

        case 'theme':
          setDarkMode(!darkMode);
          newHistory.push({
            type: 'output',
            text: `Switched theme mode to: ${!darkMode ? 'Dark' : 'Light'}`
          });
          break;

        case 'clear':
          setHistory([
            { type: 'system', text: 'Terminal cleared. Type "help" for options.' }
          ]);
          setInputVal('');
          return;

        default:
          newHistory.push({
            type: 'error',
            text: `Command not found: "${rawCmd}". Type "help" to see available commands.`
          });
          break;
      }

      setHistory(newHistory);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div 
        className={`w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden font-mono flex flex-col h-[520px] transition-all ${
          darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-900 border-slate-700 text-slate-100'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-slate-400 flex items-center gap-1.5 font-bold">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              ronit@fullstack-dev:~
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Output */}
        <div className="p-4 flex-1 overflow-y-auto text-xs space-y-2 leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {item.type === 'system' && (
                <div className="text-cyan-400 font-bold">{item.text}</div>
              )}
              {item.type === 'user' && (
                <div className="flex items-center gap-2 text-white">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-cyan-300">~</span>
                  <span>{item.text}</span>
                </div>
              )}
              {item.type === 'output' && (
                <div className="text-slate-300 pl-4 border-l border-slate-800 py-0.5">{item.text}</div>
              )}
              {item.type === 'error' && (
                <div className="text-red-400 pl-4">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="px-4 py-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-xs">➜</span>
          <span className="text-cyan-300 text-xs">~</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-none placeholder-slate-600"
          />
          <CornerDownLeft className="w-3.5 h-3.5 text-slate-500" />
        </div>
      </div>
    </div>
  );
}
