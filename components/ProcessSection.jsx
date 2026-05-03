import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/content";

export default function ProcessSection() {
  return (
    <section className="process-section" id="how-to-order">
      <div className="shell">
        <SectionHeading eyebrow="Simple & sweet" title="How to Order" center />

        <div className="process-grid">
          {processSteps.map((item) => (
            <article key={item.step} className="process-card">
              <div className="process-top">
                <div className="process-icon">{item.icon}</div>
                <span className="process-step">{item.step}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="process-cta">
          <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="primary-link">
            Chat Now
          </a>
        </div>
      </div>
    </section>
  );
}
