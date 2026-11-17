import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);

    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailto;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Title */}
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-500 mb-8">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="md:col-span-5 space-y-6">
            <h3 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
              Let's connect.
            </h3>
            
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              I'm open to full-time software engineering roles, Java backend development, and web application projects. 
              Drop me a note or reach out directly.
            </p>

            <div className="space-y-3 pt-2 text-xs font-mono">
              <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800/60">
                <span className="text-zinc-500">Email:</span>
                <div className="flex items-center gap-2">
                  <a href={`mailto:${personalInfo.email}`} className={`hover:text-amber-500 transition-colors ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                    {personalInfo.email}
                  </a>
                  <button onClick={handleCopyEmail} className="cursor-pointer text-zinc-500 hover:text-zinc-300">
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800/60">
                <span className="text-zinc-500">Phone:</span>
                <div className="flex items-center gap-2">
                  <a href={`tel:${personalInfo.phone}`} className={`hover:text-amber-500 transition-colors ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                    {personalInfo.phone}
                  </a>
                  <button onClick={handleCopyPhone} className="cursor-pointer text-zinc-500 hover:text-zinc-300">
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800/60">
                <span className="text-zinc-500">GitHub:</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-amber-500 transition-colors">
                  <span>github.com/RonitRoy2244</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800/60">
                <span className="text-zinc-500">LinkedIn:</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-amber-500 transition-colors">
                  <span>linkedin.com/in/ronit-roy</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-zinc-500">Location:</span>
                <span className={darkMode ? 'text-zinc-200' : 'text-zinc-800'}>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Message Form Column */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-500 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Henderson"
                  className={`w-full px-3.5 py-2 rounded-md text-xs sm:text-sm border focus:outline-none focus:border-amber-500 transition-colors ${
                    darkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-600' 
                      : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className={`w-full px-3.5 py-2 rounded-md text-xs sm:text-sm border focus:outline-none focus:border-amber-500 transition-colors ${
                    darkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-600' 
                      : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a project overview, role details, or an inquiry..."
                  className={`w-full px-3.5 py-2 rounded-md text-xs sm:text-sm border focus:outline-none focus:border-amber-500 transition-colors ${
                    darkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-600' 
                      : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
                  }`}
                />
              </div>

              <button
                type="submit"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                  darkMode 
                    ? 'bg-zinc-100 hover:bg-white text-zinc-950 font-semibold border-transparent' 
                    : 'bg-zinc-900 hover:bg-zinc-800 text-white font-semibold border-transparent'
                }`}
              >
                <span>{submitted ? "Opening Email Client..." : "Send Message"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
