import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-media">
        <Image
          src="/images/hero-poster.png"
          alt="Tota Cake House featured cake"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      <div className="shell hero-content">
        <div className="hero-badge">Fresh homemade cakes since the first celebration</div>
        <h1>
          Maslandapur&apos;s custom cake house, <span>baked with late-night energy.</span>
        </h1>
        <p>
          Fresh homemade cakes, custom designs, eggless options, and celebration-ready delivery for Maslandapur and
          Barasat.
        </p>
        <div className="hero-cta">
          <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="primary-link hero-link">
            Start Order
          </a>
          <a href="#menu" className="secondary-link hero-link">
            Explore Menu
          </a>
        </div>
        <div className="hero-meta">
          <div>
            <strong>Rs. 289+</strong>
            <span>Mini cakes</span>
          </div>
          <div>
            <strong>3 Days</strong>
            <span>Advance order</span>
          </div>
          <div>
            <strong>Egg / Eggless</strong>
            <span>Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
