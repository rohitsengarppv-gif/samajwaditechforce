"use client";

import { useEffect, useMemo, useState } from "react";

const MAINTENANCE_WINDOW_MS = 2 * 60 * 60 * 1000; // 2 hours
const BULLETS = [
  "Creating New Things",
  "Updating user experience",
  "Adding new features",
];

type ThemeMode = "light" | "dark";

function getTargetTime() {
  return Date.now() + MAINTENANCE_WINDOW_MS;
}

function getRemaining(target: number) {
  const diff = Math.max(target - Date.now(), 0);
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { diff, hours, minutes, seconds };
}

export default function MaintenancePage() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [target] = useState(() => getTargetTime());
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRemaining(getRemaining(target));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [target]);

  const countdownLabel = useMemo(() => {
    const pad = (value: number) => String(value).padStart(2, "0");
    return `${pad(remaining.hours)}:${pad(remaining.minutes)}:${pad(
      remaining.seconds
    )}`;
  }, [remaining]);

  const progressPercent = useMemo(() => {
    const elapsed = MAINTENANCE_WINDOW_MS - remaining.diff;
    const percent = Math.min(Math.max((elapsed / MAINTENANCE_WINDOW_MS) * 100, 0), 100);
    return Number.isNaN(percent) ? 0 : percent;
  }, [remaining.diff]);

  const handleToggleTheme = () => {
    const nextTheme: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className="maintenance-page">
      <div className="gradient-blob gradient-blob-1" />
      <div className="gradient-blob gradient-blob-2" />
      <div className="gradient-blob gradient-blob-3" />

      <header className="maintenance-header">
        <div className="logo-mark" aria-label="NovaCloud logo">
          <span className="logo-orb" />
          <span className="logo-text">Samajwaditechforce</span>
        </div>
        <button type="button" className="theme-toggle" onClick={handleToggleTheme}>
          <span className="toggle-icon" role="img" aria-label="Theme icon">
            {theme === "dark" ? "🌙" : "☀️"}
          </span>
          <span className="toggle-label">{theme === "dark" ? "Dark" : "Light"} mode</span>
        </button>
      </header>

      <main className="maintenance-shell">
        <section className="maintenance-hero">
          <span className="status-pill">
            <span className="status-dot" /> Maintenance in progress
          </span>
          <h1>We&apos;re Making Things Better!</h1>
          <p className="hero-lead">
            Hold tight! We&apos;re currently performing scheduled maintenance to improve your
            experience. We&apos;ll be back shortly. Thank you for your patience.
          </p>
          <p className="hero-secondary">
            We&apos;re working behind the scenes to boost performance, polish the UI, and roll out
            fresh capabilities.
          </p>
          <ul className="hero-list">
            {BULLETS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
         
          <p className="hero-thanks">Thanks for your support and patience 🙌</p>
        </section>

        <section className="maintenance-panel" aria-label="Maintenance live status">
          <div className="panel-visual">
            <div className="visual-laptop">
              <div className="laptop-screen">
                <div className="screen-line screen-line-1" />
                <div className="screen-line screen-line-2" />
                <div className="screen-line screen-line-3" />
              </div>
              <div className="laptop-base" />
              <div className="gear gear-lg" />
              <div className="gear gear-sm" />
              <div className="tool-wrench" />
              <div className="particle particle-1" />
              <div className="particle particle-2" />
              <div className="particle particle-3" />
            </div>
          </div>

          <div className="status-card">
            <div className="status-card-header">
              <div>
                <p className="status-title">Scheduled maintenance</p>
                <p className="status-subtitle">Your workspace is safe</p>
              </div>
              <span className="status-badge">Live update</span>
            </div>
            <div className="countdown-block">
              <span className="countdown-label">Estimated time remaining</span>
             
            </div>
            <div className="progress-track">
              <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
            </div>
            <div className="status-footer">
              <div>
                <p className="status-footnote">We&apos;re upgrading servers and rolling out tools.</p>
                
              </div>
             
            </div>
          </div>
        </section>
      </main>

      <footer className="maintenance-footer">
        <div>
          © {new Date().getFullYear()} Samajwaditechforce ·
        
        </div>
        <div className="footer-socials">
          <a href="#" aria-label="X" className="footer-icon">
            X
          </a>
          <a href="#" aria-label="LinkedIn" className="footer-icon">
            in
          </a>
          <a href="#" aria-label="GitHub" className="footer-icon">
            GH
          </a>
        </div>
      </footer>
    </div>
  );
}
