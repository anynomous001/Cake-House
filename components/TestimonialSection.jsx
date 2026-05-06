import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/content";

export default function TestimonialSection() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="testimonial-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Customer love"
          title={<>Real Words from <em>Real Celebrations</em></>}
          copy="Freshness, design accuracy, and responsive service are the things people mention most."
          center
        />
      </div>

      <div className="testimonial-marquee-wrap">
        <div className="testimonial-track">
          {doubled.map((item, i) => (
            <article key={i} className="testimonial-card">
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
