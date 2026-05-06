export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <h3>Tota Cake House</h3>
          <p>Fresh, homemade cakes with custom designs for every celebration.</p>
          <div className="footer-socials">
            <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="tel:6296990399">Call</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#signature">Signatures</a>
          <a href="#gallery">Gallery</a>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer">
            WhatsApp: 6296990399
          </a>
          <a href="tel:6296990399">Phone: 6296990399</a>
          <span>Maslandapur, Kolkata</span>
        </div>

        <div className="footer-column">
          <h4>Order Info</h4>
          <span>3-day advance orders</span>
          <span>Egg &amp; Eggless options</span>
          <span>Custom designs available</span>
          <span>Delivery: Maslandapur &amp; Barasat</span>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>© 2026 Tota Cake House. All rights reserved.</p>
        <p className="footer-script-tagline">Made with love, baked with happiness.</p>
      </div>
    </footer>
  );
}
