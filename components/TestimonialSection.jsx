import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/content";

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Customer love"
          title="Real words from real celebrations."
          copy="Freshness, design accuracy, and responsive service are the things people mention most."
        />

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>{item.quote}</p>
              <div className="testimonial-meta">
                <strong>{item.name}</strong>
                <span>{item.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
