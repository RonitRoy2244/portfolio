import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

    setIsSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Form mailto trigger fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi Ronit,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoUrl, '_blank');

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span>09 // Contact & Inquiries</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Let's Build Something Exceptional
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Open to full-time roles, software engineering opportunities, and backend architecture discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Direct Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Availability Status Card */}
            <div className={`p-6 rounded-3xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-emerald-400 font-mono">
                  {personalInfo.status}
                </span>
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Currently based in <strong>Siliguri, India</strong>. Ready for remote, hybrid, or on-site engineering roles worldwide.
              </p>
            </div>

            {/* Email Card */}
            <div className={`p-5 rounded-2xl border flex items-center justify-between gap-3 ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Address</div>
                  <a href={`mailto:${personalInfo.email}`} className={`text-sm font-bold hover:text-cyan-400 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  copiedEmail 
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-400' 
                    : darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white' : 'bg-white border-slate-300 text-slate-700'
                }`}
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className={`p-5 rounded-2xl border flex items-center justify-between gap-3 ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Phone / WhatsApp</div>
                  <a href={`tel:${personalInfo.phone}`} className={`text-sm font-bold hover:text-indigo-400 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  copiedPhone 
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-400' 
                    : darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white' : 'bg-white border-slate-300 text-slate-700'
                }`}
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                  darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-white' : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-900'
                }`}
              >
                <GithubIcon className="w-5 h-5 text-slate-400" />
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">GitHub</div>
                  <div className="text-xs font-bold font-mono">RonitRoy2244</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                  darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-blue-500/30 text-white' : 'bg-slate-50 border-slate-200 hover:border-blue-300 text-slate-900'
                }`}
              >
                <LinkedinIcon className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">LinkedIn</div>
                  <div className="text-xs font-bold font-mono">ronit-roy</div>
                </div>
              </a>
            </div>

          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-1 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Send a Direct Message
              </h3>
              <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Fill out the form below to initiate direct communication with Ronit.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full Stack Java Role / Project Inquiry"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-200 shadow-md shadow-cyan-500/20 cursor-pointer"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Message Dispatched via Email Client!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
