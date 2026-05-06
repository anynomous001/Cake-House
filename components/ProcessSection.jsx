import { processSteps } from "../data/content";

export default function ProcessSection() {
  return (
    <section className="process-section" id="how-to-order">
      <div className="shell">
        <div className="process-layout">
          <div data-anim="slide-left" className="process-intro">
            <p className="process-eyebrow">Simple & sweet</p>
            <h2>How to Order</h2>
            <p className="process-intro-copy">
              Ordering is easy. Pick a cake style you love, share your details on WhatsApp, and we will
              guide you through pricing, confirmation, and fresh delivery.
            </p>

            <a
              href="https://wa.me/916296990399"
              target="_blank"
              rel="noreferrer"
              className="process-chat-link"
            >
              <span aria-hidden="true">💬</span>
              Chat Now
            </a>
          </div>

          <div data-anim-stagger className="process-list" aria-label="How to order steps">
            {processSteps.map((item) => (
              <article key={item.step} className="process-step">
                <span className="process-step-number">{item.step}</span>
                <div className="process-step-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="process-step-copy">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
