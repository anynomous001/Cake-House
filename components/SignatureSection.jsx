import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { featuredCakes } from "../data/content";

export default function SignatureSection() {
  return (
    <section className="signature-section" id="signature">
      <div className="shell">
        <SectionHeading
          eyebrow="Legendary signatures"
          title="Celebration cakes that lead the order list."
          copy="The styles customers ask for again and again, adapted for birthdays, gifting, and custom moments."
        />

        <div className="signature-rail">
          {featuredCakes.map((item) => (
            <article key={item.title} className="signature-card">
              <div className="signature-image-wrap">
                <Image src={item.image} alt={item.title} width={640} height={840} className="signature-image" />
                {item.badge ? <span className="signature-badge">{item.badge}</span> : null}
              </div>
              <div className="signature-copy">
                <div className="signature-row">
                  <h3>{item.title}</h3>
                  <span>{item.price}</span>
                </div>
                <p>{item.description}</p>
                <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="signature-button">
                  Add to Order
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
