'use client';

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { faqs } from "../data/content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="faq-section" id="faq">
      <div className="shell">
        <SectionHeading eyebrow="FAQ" title="Helpful answers before you place the order." center />
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={item.q} className={`faq-item${openIndex === i ? " is-open" : ""}`}>
              <button className="faq-summary" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">{openIndex === i ? "−" : "+"}</span>
              </button>
              <div className="faq-body">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
