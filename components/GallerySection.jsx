import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { galleryCards } from "../data/content";

export default function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="shell">
        <SectionHeading
          eyebrow="Celebration gallery"
          title={<>A Gallery of <em>Sweet Celebrations</em></>}
          copy="A mix of elegant floral cakes, playful birthday styles, and chocolate-heavy showstoppers."
        />

        <div data-anim-stagger className="gallery-grid">
          {galleryCards.map((item) => (
            <a
              key={item.title}
              href="https://wa.me/916296990399"
              target="_blank"
              rel="noreferrer"
              className={`gallery-card ${item.className ?? ""}`}
            >
              <Image src={item.image} alt={item.title} width={800} height={960} className="gallery-card-image" />
              <div className="gallery-card-overlay">
                <span className="gallery-card-title">{item.title}</span>
                <span className="gallery-card-cta">Tap to order</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
