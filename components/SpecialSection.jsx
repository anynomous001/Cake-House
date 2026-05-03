import SectionHeading from "./SectionHeading";
import { specialReasons } from "../data/content";

export default function SpecialSection() {
  return (
    <section className="special-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Why customers love us"
          title="What makes Tota Cake House feel personal."
          center
        />

        <div className="special-grid">
          {specialReasons.map((item) => (
            <article key={item.title} className="special-card">
              <div className="special-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
