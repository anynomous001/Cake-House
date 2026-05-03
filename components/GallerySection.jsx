import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { galleryCards } from "../data/content";

export default function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="shell">
        <SectionHeading
          eyebrow="Celebration gallery"
          title="The visual vibe of Tota Cake House."
          copy="A mix of elegant floral cakes, playful birthday styles, and chocolate-heavy showstoppers."
        />

        <div className="gallery-grid">
          {galleryCards.map((item) => (
            <article key={item.title} className={`gallery-card ${item.className ?? ""}`}>
              <Image src={item.image} alt={item.title} width={800} height={960} className="gallery-card-image" />
              <div className="gallery-card-overlay">
                <span>{item.title}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
