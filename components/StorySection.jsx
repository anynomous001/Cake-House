import Image from "next/image";

export default function StorySection() {
  return (
    <section className="story-section" id="about">
      <div className="shell story-layout">
        <div className="story-copy">
          <p className="section-eyebrow">Our little cake house</p>
          <h2>Fresh cakes, custom finishes, and a warm home-bakery touch.</h2>
          <p>
            Tota Cake House is built around celebrations that feel personal. Every order is made fresh, shaped around
            your idea, and packed carefully so it reaches the moment looking beautiful.
          </p>
          <p>
            We keep the process simple: message us on WhatsApp, confirm the details, and let us prepare something
            sweet for birthdays, anniversaries, baby welcomes, and family gatherings.
          </p>
        </div>

        <div className="story-aside">
          <div className="story-aside-card">
            <Image src="/images/logo.png" alt="Tota Cake House logo" width={220} height={220} />
            <ul>
              <li>Fresh daily baking</li>
              <li>Custom design support</li>
              <li>Maslandapur and Barasat delivery</li>
              <li>Made with love, baked with happiness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
