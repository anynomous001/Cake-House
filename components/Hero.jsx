import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-media">
        <Image
          src="/images/gallery-loaded-choco.png"
          alt="Loaded chocolate celebration cake from Tota Cake House"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      <div className="shell hero-content">
        <div className="hero-badge">Handcrafted cakes for birthdays, anniversaries, and sweet surprise moments</div>
        <h1>
          Fresh homemade cakes
          <br />
          for moments
          <br />
          that deserve
          <br />
          <span>something unforgettable.</span>
        </h1>
        <p className="hero-copy">
          From elegant floral cakes to chocolate-loaded celebration pieces, every order is baked fresh and finished
          with the personal touch that makes home celebrations feel extra special.
        </p>
        <div className="hero-cta">
          <a href="#menu" className="primary-link hero-link">
            View Our Menu
          </a>
          <a
            href="https://wa.me/916296990399"
            target="_blank"
            rel="noreferrer"
            className="secondary-link hero-link hero-link-outline"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="hero-divider" aria-hidden="true" />

        <div className="hero-meta">
          <div>
            <strong>100+</strong>
            <span>Celebrations served</span>
          </div>
          <div>
            <strong>3 Days</strong>
            <span>Advance order notice</span>
          </div>
          <div>
            <strong>2 Options</strong>
            <span>Egg &amp; eggless available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
