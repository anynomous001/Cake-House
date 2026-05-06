import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { featuredCakes } from "../data/content";

export default function SignatureSection() {
  return (
    <section className="signature-section" id="signature">
      <div className="shell">
        <SectionHeading
          eyebrow="Legendary signatures"
          title={<>Our <em>Signature</em> Cakes</>}
          copy="The cakes customers ask for first: expressive decoration, premium finishes, and that homemade warmth in every slice."
        />

        <div data-anim="fade-up" className="signature-rail">
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
