'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { navLinks } from "../data/content";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="shell site-header-inner">
        <a href="#home" className="brand-lockup" onClick={() => setMobileOpen(false)}>
          <Image src="/images/logo.png" alt="Tota Cake House logo" width={42} height={42} className="brand-logo" />
          <span className="brand-wordmark">Tota Cake House</span>
        </a>

        <nav className="site-nav">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-actions">
          <a href="tel:6296990399" className="icon-button" aria-label="Call Tota Cake House">
            ☎
          </a>
          <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="primary-link">
            Order Now
          </a>
          <button
            className="hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/916296990399"
            target="_blank"
            rel="noreferrer"
            className="mobile-nav-cta"
            onClick={() => setMobileOpen(false)}
          >
            Order on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
