import SectionHeading from "./SectionHeading";
import { deliveryCards } from "../data/content";

export default function DeliverySection() {
  return (
    <section className="delivery-section" id="delivery">
      <div className="shell">
        <SectionHeading eyebrow="We deliver" title="Fresh cakes across your celebration zone." center />

        <div className="delivery-grid">
          {deliveryCards.map((item) => (
            <article key={item.title} className="delivery-card">
              <div className="delivery-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
