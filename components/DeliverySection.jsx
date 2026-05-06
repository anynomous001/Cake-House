import SectionHeading from "./SectionHeading";
import { deliveryCards } from "../data/content";

export default function DeliverySection() {
  return (
    <section className="delivery-section" id="delivery">
      <div className="shell">
        <SectionHeading eyebrow="We deliver" title={<>Fresh Cakes Across Your <em>Celebration Zone</em></>} center />
        <div className="delivery-action-wrap">
          <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="delivery-action">
            Order on WhatsApp
          </a>
        </div>

        <div data-anim-stagger className="delivery-grid">
          {deliveryCards.map((item, index) => (
            <article key={item.title} className="delivery-card">
              <span className="delivery-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="delivery-icon-wrap">
                <div className="delivery-icon">{item.icon}</div>
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
