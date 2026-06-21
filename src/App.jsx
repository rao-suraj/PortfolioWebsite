import { useState } from 'react';
import { Win } from './components/Win';
import { ProjectCard } from './components/ProjectCard';
import { Dialog } from './components/Dialog';
import { skillIcons } from './data/skillIcons';

export default function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleResume(e) {
    e.preventDefault();
    setShowDialog(true);
  }

  function confirmResume() {
    setShowDialog(false);
    window.open('https://drive.google.com/file/d/16wR6lMgIpZm94vgnempekDKx7FGv5men/view?usp=sharing', '_blank');
  }

  function handleClear() {
    setFrom('');
    setSubject('');
    setMessage('');
  }

  function handleSend() {
    const body = message + (from ? '\n\nFrom: ' + from : '');
    const mailto = `mailto:surajrao250@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, '_blank');
  }

  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo">_raosuraj</a>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#work">work</a>
          <a href="#contact">contact</a>
          <a href="#" className="nav-resume" onClick={handleResume}>resume.pdf ↓</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="hero">
          <div className="hero-left">
            <div className="hero-pill">· SOFTWARE DEVELOPER ·</div>
            <h1 className="hero-headline">
              Hi, I'm<br />_raosuraj.<span className="cursor"></span>
            </h1>
            <p className="hero-sub">
              2 years of experience building software including apps, websites, and AI applications.
            </p>
            <div className="hero-btns">
              <a href="#work" className="btn-primary">▶ VIEW WORK</a>
              <a href="#contact" className="btn-secondary">SAY HI</a>
            </div>
          </div>
          <div className="hero-right">
            <picture>
              <source srcSet="/assets/PC_TRANSPARENT.webp" type="image/webp" />
              <img
                src="/assets/PC_TRANSPARENT.png"
                alt="Vintage PC monitor"
                fetchPriority="high"
                width="760"
                height="760"
              />
            </picture>
          </div>
        </section>

        <div className="sections">

          <section id="about">
            <Win title="readme.txt — Notepad" statusItems={['Ready', 'Ln 6, Col 14', 'INS']}>
              <p style={{fontFamily:'var(--sans)', fontSize:15, lineHeight:1.75, color:'var(--navy)', marginBottom:16}}>
                Experience in building scalable and high-performance applications, including IoT apps, fintech apps, and chatbots across domains like fintech and healthcare. Working with technologies such as Flutter, Express, Gin, LangChain, CrewAI, and Docker has helped me build high-quality, scalable systems.
              </p>
              <p style={{fontFamily:'var(--sans)', fontSize:15, lineHeight:1.75, color:'var(--navy)'}}>
                Built products like IndusInd Money CRM and the Findola Capital Mutual Fund App, gaining experience in developing features used by thousands of users.
              </p>
            </Win>
          </section>

          <section id="skills">
            <Win title="Toolbox" statusItems={['19 items', 'Ready']}>
              <div className="skills-grid">
                {Object.entries(skillIcons).map(([name, svg]) => (
                  <div key={name} className="skill-icon">
                    <div className="skill-icon-art">{svg}</div>
                    <span className="skill-label">{name}</span>
                  </div>
                ))}
              </div>
            </Win>
          </section>

          <section id="work">
            <Win title="Folder — selected.project" statusItems={['3 objects', 'Ready']}>
              <div className="projects-grid">
                <ProjectCard
                  title="ChatIt"
                  desc="Bus ticket booking system built on WhatsApp — zero app install, low cost, fast. Search routes, pick seats, and pay entirely through chat. Handles FAQs conversationally so users never leave the interface they already use."
                  shipped={false}
                />
                <ProjectCard
                  title="auto_silent.apk"
                  desc="Flutter app that automates silent mode and media control scheduling using AlarmManager and WorkManager. Leverages Flutter platform channels to integrate Android native APIs with robust permission handling."
                  shipped={true}
                  demo="https://github.com/rao-suraj/AutoSilentAppFlutter"
                  git="https://github.com/rao-suraj/AutoSilentAppFlutter"
                />
                <ProjectCard
                  title="ai_task_planner.exe"
                  desc="Multi-agent AI system that transforms project requirements into actionable task plans using CrewAI. Features WebSocket real-time streaming, structured validation, and guardrails for production-safe outputs."
                  shipped={true}
                  live="https://v0-pan-chatbot.vercel.app/"
                />
              </div>
            </Win>
          </section>

          <section id="experience">
            <Win title="changelog.md" statusItems={['Ln 1, Col 1', 'INS']}>
              <div className="exp-tree">
                <div className="exp-entry">
                  <div className="exp-main">├ v3.0 — Sep 2024–Present — Full Stack Developer @ Mindstack Technologies</div>
                  <div className="exp-lines">
                    <div className="exp-line">│ ├ Designed and implemented CRM system for Reliance Security — project architecture, DB schema, user management, auth/authz, logging, and security</div>
                    <div className="exp-line">│ ├ Built PoC for MRPL (Mangalore Refinery and Petrochemicals Ltd) — optimized LLM pipeline for internal use</div>
                    <div className="exp-line">│ ├ Redesigned UI and led FP-to-BSE migration for Miles Mutual Fund App (v2) — eliminated legacy bottlenecks</div>
                    <div className="exp-line">│ ├ Built External Funds module for Findola Capitals — improved user retention by 7% via MFCentral + Razorpay</div>
                    <div className="exp-line">│ └ Improved KYC onboarding completion by 20% using Firebase Analytics and Microsoft Clarity</div>
                  </div>
                </div>
                <div className="exp-entry">
                  <div className="exp-main">├ v2.0 — Jun 2024–Jul 2024 — Founding Flutter Engineer @ Rosette Smart Life</div>
                  <div className="exp-lines">
                    <div className="exp-line">│ ├ Led end-to-end app development lifecycle — delivered all features within deadlines</div>
                    <div className="exp-line">│ ├ Built core BLE infrastructure for smart hydration IoT device — 88% connection stability</div>
                    <div className="exp-line">│ └ Owned Play Store & App Store deployment pipeline — build configs, signing, and release management</div>
                  </div>
                </div>
                <div className="exp-entry">
                  <div className="exp-main">└ v1.0 — Sep 2023–May 2024 — Flutter Developer Intern @ Rosette Smart Life</div>
                  <div className="exp-lines">
                    <div className="exp-line">  ├ Built custom UI animations using AnimatedBuilder and TickerProviderStateMixin</div>
                    <div className="exp-line">  ├ Developed reminder feature and notification system via Firebase Cloud Messaging</div>
                    <div className="exp-line">  └ Architected scalable Flutter app using MVVM, Cubit, getIt, and Dio for REST API integration</div>
                  </div>
                </div>
              </div>
            </Win>
          </section>

          <section id="contact">
            <Win title="send_mail.exe" statusItems={['Ready', 'Secure']}>
              <div className="mail-form">
                <div>
                  <label className="mail-label">Mail To: surajrao250@gmail.com</label>
                </div>
                <div>
                  <label className="mail-label">From:</label>
                  <input className="mail-input" type="email" placeholder="your@email.com" value={from} onChange={e => setFrom(e.target.value)} />
                </div>
                <div>
                  <label className="mail-label">Subject:</label>
                  <input className="mail-input" type="text" placeholder="Let's build something..." value={subject} onChange={e => setSubject(e.target.value)} />
                </div>
                <div>
                  <label className="mail-label">Message:</label>
                  <textarea className="mail-textarea" placeholder="Hi Suraj, I wanted to reach out about..." value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <div className="mail-footer">
                  <button className="btn-secondary" style={{fontSize:13}} onClick={handleClear}>Clear</button>
                  <button className="btn-primary" style={{fontSize:13}} onClick={handleSend}>▶ SEND</button>
                </div>
              </div>
            </Win>
          </section>

        </div>
      </main>

      <footer>
        <span>© 1990–2026 _raosuraj</span>
        <div className="footer-links">
          <a href="https://github.com/rao-suraj" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://www.linkedin.com/in/rao--suraj" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
        <span className="footer-counter">visitors: 000247</span>
      </footer>

      {showDialog && (
        <Dialog onYes={confirmResume} onNo={() => setShowDialog(false)} />
      )}
    </>
  );
}
