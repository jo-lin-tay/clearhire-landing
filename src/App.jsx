import { useState } from "react";
import "./index.css";

// ─── Icons (inline SVG components) ───────────────────────────────
const ShieldIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const SendIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const SearchIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

const ClipboardIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <path d="M9 14l2 2 4-4" />
  </svg>
);

const AlertIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const BuildingIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01" />
  </svg>
);

const GlobeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const DollarIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

const TelegramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

// ─── Risk Demo Component ─────────────────────────────────────────
function RiskDemo() {
  const [active, setActive] = useState(0);

  const examples = [
    {
      label: "High Risk",
      color: "danger-red",
      icon: "🚨",
      riskLevel: "HIGH",
      riskColor: "text-red-400",
      barColor: "bg-red-500",
      barWidth: "w-[90%]",
      listing: `"Earn $8,000/month working from home! No experience needed. WhatsApp us at +65 8XXX to start immediately. Investment of $500 required for starter kit."`,
      flags: [
        { icon: "💰", text: "Unrealistic salary for no-experience role" },
        { icon: "📱", text: "WhatsApp-only contact — no company email" },
        { icon: "🚩", text: "Upfront payment required" },
        { icon: "🏢", text: "No company name or registration" },
      ],
      verdict: "This listing shows multiple hallmarks of a job scam. Do not send money or personal information.",
    },
    {
      label: "Medium Risk",
      color: "warning-amber",
      icon: "⚠️",
      riskLevel: "MEDIUM",
      riskColor: "text-amber-400",
      barColor: "bg-amber-500",
      barWidth: "w-[55%]",
      listing: `"Digital Marketing Executive at XYZ Pte Ltd. Salary: $3,500–$4,500/month. Send resume to hr@xyz-sg.com. Walk-in interviews at Bugis Junction."`,
      flags: [
        { icon: "🌐", text: "Domain xyz-sg.com registered 2 months ago" },
        { icon: "🏢", text: "Company not found in ACRA registry" },
      ],
      verdict: "Some yellow flags present. Verify the company before sharing personal details.",
    },
    {
      label: "Low Risk",
      color: "safe-green",
      icon: "✅",
      riskLevel: "LOW",
      riskColor: "text-green-400",
      barColor: "bg-green-500",
      barWidth: "w-[15%]",
      listing: `"Software Engineer at Grab. Competitive salary + equity. Apply via grab.careers. MOM-registered EA: R12345678."`,
      flags: [
        { icon: "✅", text: "Known employer with established presence" },
        { icon: "✅", text: "MOM EA licence verified" },
      ],
      verdict: "This listing appears legitimate. Standard application process from a known company.",
    },
  ];

  const ex = examples[active];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Tab buttons */}
      <div className="flex gap-2 mb-6 justify-center">
        {examples.map((e, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              active === i
                ? `bg-${e.color}/20 text-${e.color} ring-1 ring-${e.color}/50`
                : "bg-dark-card text-slate-400 hover:text-slate-200"
            }`}
          >
            {e.icon} {e.label}
          </button>
        ))}
      </div>

      {/* Report card */}
      <div className="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShieldIcon className="w-5 h-5 text-shield-green" />
            <span className="text-sm font-semibold text-shield-green">ClearHire Report</span>
          </div>
          <span className={`text-sm font-bold ${ex.riskColor}`}>{ex.riskLevel} RISK</span>
        </div>

        {/* Risk bar */}
        <div className="w-full bg-slate-700 rounded-full h-2 mb-5">
          <div className={`${ex.barColor} h-2 rounded-full transition-all duration-500`} style={{ width: ex.barWidth === "w-[90%]" ? "90%" : ex.barWidth === "w-[55%]" ? "55%" : "15%" }}></div>
        </div>

        {/* Listing excerpt */}
        <div className="bg-slate-800/50 rounded-lg p-4 mb-5 border-l-4 border-slate-600">
          <p className="text-sm text-slate-300 italic leading-relaxed">{ex.listing}</p>
        </div>

        {/* Flags */}
        <div className="space-y-2 mb-5">
          {ex.flags.map((f, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <span className="text-base flex-shrink-0">{f.icon}</span>
              <span className="text-slate-300">{f.text}</span>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <div className={`p-3 rounded-lg bg-${ex.color}/10 border border-${ex.color}/20`}>
          <p className="text-sm font-medium text-slate-200">{ex.verdict}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────
export default function App() {
  const telegramLink = "https://t.me/ClearHireBot";

  const steps = [
    {
      num: "1",
      icon: <ClipboardIcon className="w-8 h-8" />,
      title: "Paste a Job Listing",
      desc: "Copy a suspicious job ad URL or text and send it to our Telegram bot.",
    },
    {
      num: "2",
      icon: <SearchIcon className="w-8 h-8" />,
      title: "AI Analyses It",
      desc: "Our AI checks pay realism, scam patterns, company legitimacy, and more.",
    },
    {
      num: "3",
      icon: <ShieldIcon className="w-8 h-8" />,
      title: "Get Your Risk Report",
      desc: "Receive a detailed risk assessment with flags and a clear verdict in seconds.",
    },
  ];

  const checks = [
    { icon: <DollarIcon className="w-7 h-7 text-shield-green" />, title: "Pay vs Role Realism", desc: "Compares salary against Singapore benchmarks for the role and experience level." },
    { icon: <AlertIcon className="w-7 h-7 text-warning-amber" />, title: "Scam Language Detection", desc: "Identifies pressure tactics, urgency, and classic scam phrasing patterns." },
    { icon: <BuildingIcon className="w-7 h-7 text-blue-400" />, title: "MOM EA Licence Check", desc: "Verifies employment agency licences against the Ministry of Manpower registry." },
    { icon: <GlobeIcon className="w-7 h-7 text-purple-400" />, title: "Domain Age & Trust", desc: "Checks when the job posting website was registered — new domains are riskier." },
    { icon: <SendIcon className="w-7 h-7 text-cyan-400" />, title: "Contact Method Flags", desc: "WhatsApp-only, personal emails, or no company contact info raises red flags." },
    { icon: <ShieldIcon className="w-7 h-7 text-danger-red" />, title: "Personal Info Requests", desc: "Detects requests for bank details, NRIC, or upfront payments before hiring." },
  ];

  const stats = [
    { value: "< 10s", label: "Average scan time" },
    { value: "5", label: "Risk dimensions checked" },
    { value: "Free", label: "No sign-up required" },
    { value: "SG", label: "Built for Singapore" },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-shield-green/20 rounded-xl flex items-center justify-center">
              <ShieldIcon className="w-5 h-5 text-shield-green" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">ClearHire</span>
          </div>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-shield-green text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-shield-green/20"
          >
            <TelegramIcon className="w-4 h-4" />
            Open Bot
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-shield-green/10 text-shield-green text-sm font-medium mb-8 border border-shield-green/20">
            <ShieldIcon className="w-4 h-4" />
            Protecting Singapore job seekers
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Is that job listing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shield-green to-emerald-300">
              legit?
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Paste any job listing URL or text into our Telegram bot. Get an AI-powered scam risk report in under 10 seconds — with MOM licence checks, salary benchmarks, and red flag analysis built for Singapore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-shield-green text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-2xl shadow-shield-green/30 animate-pulse-glow"
            >
              <TelegramIcon className="w-6 h-6" />
              Try ClearHire Free
            </a>
            <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors font-medium">
              See how it works ↓
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo Section ── */}
      <section className="py-20 px-6 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See It In Action</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Click through to see how ClearHire analyses different types of job listings.</p>
          </div>
          <RiskDemo />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Three steps. Ten seconds. Peace of mind.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative bg-dark-card border border-dark-border rounded-2xl p-8 text-center hover:border-shield-green/30 transition-all group">
                <div className="w-14 h-14 mx-auto mb-5 bg-shield-green/10 rounded-2xl flex items-center justify-center text-shield-green group-hover:bg-shield-green/20 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-slate-600 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Check ── */}
      <section className="py-20 px-6 bg-gradient-to-b from-dark-bg to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Check</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Every listing is analysed across multiple dimensions to give you a complete picture.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checks.map((check, i) => (
              <div key={i} className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-shield-green/20 transition-all">
                <div className="mb-4">{check.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{check.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{check.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SG Context ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block text-6xl mb-6">🇸🇬</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Singapore</h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            ClearHire isn't a generic scam checker. It's trained on Singapore-specific signals — MOM employment agency licences, local salary ranges, CPF and NRIC red flags, and common scam tactics targeting Singaporean job seekers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { emoji: "🏛️", label: "MOM EA Registry" },
              { emoji: "💵", label: "SG Salary Data" },
              { emoji: "🪪", label: "NRIC/CPF Alerts" },
              { emoji: "🗣️", label: "Local Context" },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-dark-border rounded-xl p-4">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="text-sm font-medium text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Don't get scammed.
            <br />
            <span className="text-shield-green">Get ClearHire.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Free to use. No account needed. Just open Telegram and paste any job listing.
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-shield-green text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-400 transition-all shadow-2xl shadow-shield-green/30"
          >
            <TelegramIcon className="w-7 h-7" />
            Open @ClearHireBot
          </a>
          <p className="text-sm text-slate-500 mt-6">
            If you've encountered a scam, report it to{" "}
            <a href="https://www.scamalert.sg" target="_blank" rel="noopener noreferrer" className="text-shield-green hover:underline">
              ScamAlert.sg
            </a>{" "}
            or call the Anti-Scam Helpline at 1800-722-6688.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-dark-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-shield-green/20 rounded-lg flex items-center justify-center">
              <ShieldIcon className="w-4 h-4 text-shield-green" />
            </div>
            <span className="text-sm text-slate-400">
              ClearHire — Powered by{" "}
              <a href="https://fractionalpartners.asia" target="_blank" rel="noopener noreferrer" className="text-shield-green hover:underline">
                Fractional Partners Asia
              </a>
            </span>
          </div>
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Fractional Partners Asia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

