import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWA from "../../components/FloatingWA";
import { extendedGalleryCards } from "../../data/content";

export const metadata = {
  title: "Cake Gallery | Tota Cake House",
  description: "Browse our full collection of custom cakes — birthdays, anniversaries, baby showers, and more. Handcrafted with love in Maslandapur.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="gallery-page">

        <section className="gallery-page-hero">
          <div className="shell">
            <Link href="/" className="gallery-back-link">← Back to Home</Link>
            <h1>Our <em>Cake Gallery</em></h1>
            <p>Every celebration deserves something beautiful. Browse our full collection of custom cakes — each one baked fresh and finished with care.</p>
          </div>
        </section>

        <section className="gallery-page-grid-section">
          <div className="shell">
            <div className="gallery-grid gallery-page-full-grid">
              {extendedGalleryCards.map((item) => (
                <a
                  key={item.title}
                  href="https://wa.me/916296990399"
                  target="_blank"
                  rel="noreferrer"
                  className={`gallery-card ${item.className ?? ""}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={960}
                    className="gallery-card-image"
                  />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-title">{item.title}</span>
                    <span className="gallery-card-cta">Tap to order</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="gallery-page-cta">
              <p>Like what you see? Order your custom cake on WhatsApp.</p>
              <a
                href="https://wa.me/916296990399"
                target="_blank"
                rel="noreferrer"
                className="primary-link"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
