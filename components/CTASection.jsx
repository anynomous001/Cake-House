export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="shell">
        <div data-anim="fade-up" className="cta-card">
          <p className="section-eyebrow">Ready to order</p>
          <h2>Your Perfect Cake Is <em>One Message Away</em>.</h2>
          <p>
            Join the families ordering from Tota Cake House for birthdays, anniversaries, baby showers, and sweet
            surprise gifting.
          </p>
          <div className="cta-actions">
            <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="primary-link">
              Order on WhatsApp
            </a>
            <a href="tel:6296990399" className="secondary-link">
              Call 6296990399
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
