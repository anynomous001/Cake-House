import SectionHeading from "./SectionHeading";
import { specialReasons } from "../data/content";

export default function SpecialSection() {
  return (
    <section className="special-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Why customers love us"
          title={<>What Makes Us <em>Special</em></>}
          center
        />

        <div data-anim-stagger className="special-grid">
          {specialReasons.map((item, index) => (
            <article key={item.title} className="special-card">
              <span className="special-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="special-icon-wrap">
                <div className="special-icon">{item.icon}</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
