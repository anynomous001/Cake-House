import Image from "next/image";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Signatures", href: "#signature" },
  { label: "Order", href: "#how-to-order" },
  { label: "Gallery", href: "#gallery" },
  { label: "Delivery", href: "#delivery" }
];

const featuredCakes = [
  {
    title: "Floral Birthday Cake",
    price: "From Rs. 599",
    description: "Soft blush glaze with handcrafted flowers for elegant birthdays and anniversaries.",
    image: "/images/gallery-floral.png",
    badge: "Signature"
  },
  {
    title: "Chocolate Party Cake",
    price: "From Rs. 649",
    description: "A playful loaded party cake with cones, chocolate drip, and celebration toppings.",
    image: "/images/gallery-choco-party.png",
    badge: "Bestseller"
  },
  {
    title: "Classic Chocolate Cake",
    price: "From Rs. 549",
    description: "Smooth cream finish with choco toppings and a premium homemade look.",
    image: "/images/gallery-classic-choco.png"
  },
  {
    title: "Baby Shower Cake",
    price: "Custom Pricing",
    description: "Charming themed cakes for welcome celebrations and memorable family moments.",
    image: "/images/gallery-baby-shower.png"
  }
];

const menuFilters = ["All", "Birthday Cakes", "Cupcakes", "Chocolate", "Eggless", "Custom"];

const menuItems = [
  {
    title: "Mini Chocolate Cake",
    price: "Rs. 299",
    description: "Half pound chocolate cake baked fresh for quick gifting and small celebrations.",
    image: "/images/gallery-classic-choco.png"
  },
  {
    title: "Mini Butterscotch Cake",
    price: "Rs. 289",
    description: "Soft sponge with smooth cream and butterscotch flavor in a compact celebration size.",
    image: "/images/gallery-blue-birthday.png"
  },
  {
    title: "One Pound Chocolate",
    price: "Rs. 549",
    description: "Our classic family-size chocolate cake with a clean finish and rich topping detail.",
    image: "/images/gallery-oreo.png"
  },
  {
    title: "Mango / Strawberry Cake",
    price: "Rs. 449",
    description: "Fresh fruity flavor options for birthdays, home parties, and sweet surprise gifting.",
    image: "/images/gallery-engagement.png"
  },
  {
    title: "Cupcake Box",
    price: "From Rs. 50",
    description: "Cute add-on cupcakes in chocolate, butterscotch, mango, or strawberry flavors.",
    image: "/images/menu-board.jpg"
  },
  {
    title: "Custom Birthday Cake",
    price: "From Rs. 599",
    description: "Theme cakes, floral cakes, and personalized celebration styles based on your idea.",
    image: "/images/gallery-loaded-choco.png"
  }
];

const specialReasons = [
  {
    title: "Fresh Homemade",
    copy: "Baked fresh daily with rich ingredients and no rushed commercial feel.",
    icon: "🌾"
  },
  {
    title: "Custom Designs",
    copy: "From simple cream cakes to detailed celebration themes built around your reference.",
    icon: "🎨"
  },
  {
    title: "Budget-Friendly",
    copy: "Premium-looking cakes at approachable prices, starting from Rs. 289.",
    icon: "💛"
  },
  {
    title: "Made with Love",
    copy: "Every order is prepared carefully for birthdays, anniversaries, and family moments.",
    icon: "❤️"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Browse Our Menu",
    copy: "Explore flavors and styles. Choose a preset cake or share a custom idea.",
    icon: "📋"
  },
  {
    step: "02",
    title: "Message on WhatsApp",
    copy: "Send your date, flavor, size, and design request. We reply quickly.",
    icon: "💬"
  },
  {
    step: "03",
    title: "We Confirm & Price",
    copy: "Availability, pricing, and finishing details are confirmed before baking begins.",
    icon: "✅"
  },
  {
    step: "04",
    title: "Fresh Delivery",
    copy: "Your cake is prepared fresh for pickup or delivery around Maslandapur and Barasat.",
    icon: "🚚"
  },
  {
    step: "05",
    title: "Celebrate",
    copy: "Enjoy the moment and share your celebration photos with us afterward.",
    icon: "🎉"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    detail: "Chocolate 1 Pound Cake",
    quote: "The cake looked beautiful and tasted fresh. It really made the birthday feel special."
  },
  {
    name: "Rajesh Kumar",
    detail: "Custom Birthday Cake",
    quote: "The design came out close to our reference and the delivery timing was perfect."
  },
  {
    name: "Meera Patel",
    detail: "Butterscotch Celebration Cake",
    quote: "Affordable, responsive, and consistently good. We have already ordered more than once."
  }
];

const galleryCards = [
  {
    title: "Floral Elegance",
    image: "/images/gallery-floral.png",
    className: "gallery-card-large"
  },
  {
    title: "Party Chocolate",
    image: "/images/gallery-choco-party.png"
  },
  {
    title: "Minimal Blue",
    image: "/images/gallery-blue-birthday.png"
  },
  {
    title: "Engagement Cake",
    image: "/images/gallery-engagement.png",
    className: "gallery-card-wide"
  },
  {
    title: "Oreo Drip",
    image: "/images/gallery-oreo.png"
  }
];

const deliveryCards = [
  {
    icon: "📍",
    title: "Maslandapur",
    copy: "Primary delivery area with fresh handling and reliable timing."
  },
  {
    icon: "📍",
    title: "Barasat",
    copy: "Celebration cakes delivered carefully to homes and events."
  },
  {
    icon: "⏰",
    title: "3-Day Notice",
    copy: "Minimum advance order timing helps us maintain quality and finish."
  },
  {
    icon: "🥚",
    title: "Eggless Available",
    copy: "Egg and eggless options are available across most popular cake styles."
  },
  {
    icon: "📦",
    title: "Careful Packaging",
    copy: "Each cake is packed securely to travel safely and still look beautiful."
  },
  {
    icon: "💬",
    title: "Free Consultation",
    copy: "Not sure what to order? Message us and we will help you choose."
  }
];

const faqs = [
  {
    q: "How early should I place an order?",
    a: "We recommend at least 3 days in advance, especially for custom cakes or weekend deliveries."
  },
  {
    q: "Do you make eggless cakes?",
    a: "Yes. Eggless options are available for most popular cake types."
  },
  {
    q: "Can I send my own reference design?",
    a: "Yes. Share an image or theme on WhatsApp and we will guide you on what can be created."
  },
  {
    q: "Where do you deliver?",
    a: "We mainly deliver to Maslandapur and Barasat, with nearby coverage depending on the order."
  }
];

function SectionHeading({ eyebrow, title, copy, center = false }) {
  return (
    <div className={`section-heading${center ? " section-heading-center" : ""}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-main" id="home">
      <header className="site-header">
        <div className="shell site-header-inner">
          <a href="#home" className="brand-lockup">
            <span className="brand-wordmark">Tota Cake House</span>
          </a>

          <nav className="site-nav">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-actions">
            <a href="tel:6296990399" className="icon-button" aria-label="Call Tota Cake House">
              ☎
            </a>
            <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="primary-link">
              Order Now
            </a>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-media">
          <Image
            src="/images/gallery-loaded-choco.png"
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

      <section className="signature-section" id="signature">
        <div className="shell">
          <SectionHeading
            eyebrow="Legendary signatures"
            title="Celebration cakes that lead the order list."
            copy="The styles customers ask for again and again, adapted for birthdays, gifting, and custom moments."
          />

          <div className="signature-rail">
            {featuredCakes.map((item) => (
              <article key={item.title} className="signature-card">
                <div className="signature-image-wrap">
                  <Image src={item.image} alt={item.title} width={640} height={840} className="signature-image" />
                  {item.badge ? <span className="signature-badge">{item.badge}</span> : null}
                </div>
                <div className="signature-copy">
                  <div className="signature-row">
                    <h3>{item.title}</h3>
                    <span>{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                  <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="signature-button">
                    Add to Order
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="shell">
          <SectionHeading eyebrow="The menu" title="Choose a flavor, then build the celebration around it." center />

          <div className="menu-filters">
            {menuFilters.map((item, index) => (
              <button key={item} className={`menu-filter${index === 0 ? " is-active" : ""}`} type="button">
                {item}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {menuItems.map((item) => (
              <article key={item.title} className="menu-item">
                <div className="menu-item-thumb">
                  <Image src={item.image} alt={item.title} width={240} height={240} />
                </div>
                <div className="menu-item-copy">
                  <div className="menu-item-row">
                    <h3>{item.title}</h3>
                    <span>{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                  <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="menu-item-link">
                    Add
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="menu-footer">
            <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="secondary-link">
              View Full Menu on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="special-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Why customers love us"
            title="What makes Tota Cake House feel personal."
            center
          />

          <div className="special-grid">
            {specialReasons.map((item) => (
              <article key={item.title} className="special-card">
                <div className="special-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <section className="process-section" id="how-to-order">
        <div className="shell">
          <SectionHeading eyebrow="Simple & sweet" title="How to Order" center />

          <div className="process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="process-card">
                <div className="process-top">
                  <div className="process-icon">{item.icon}</div>
                  <span className="process-step">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="process-cta">
            <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="primary-link">
              Chat Now
            </a>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Customer love"
            title="Real words from real celebrations."
            copy="Freshness, design accuracy, and responsive service are the things people mention most."
          />

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p>{item.quote}</p>
                <div className="testimonial-meta">
                  <strong>{item.name}</strong>
                  <span>{item.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <section className="delivery-section" id="delivery">
        <div className="shell">
          <SectionHeading eyebrow="We deliver" title="Fresh cakes across your celebration zone." center />

          <div className="delivery-grid">
            {deliveryCards.map((item) => (
              <article key={item.title} className="delivery-card">
                <div className="delivery-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="shell">
          <SectionHeading eyebrow="FAQ" title="Helpful answers before you place the order." center />
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell">
          <div className="cta-card">
            <p className="section-eyebrow">Ready to order</p>
            <h2>Your perfect cake is one message away.</h2>
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
            <span>Egg & Eggless options</span>
            <span>Custom designs available</span>
            <span>Delivery: Maslandapur & Barasat</span>
          </div>
        </div>

        <div className="shell footer-bottom">
          <p>© 2024 Tota Cake House. All rights reserved.</p>
          <p>Made with love, baked with happiness.</p>
        </div>
      </footer>

      <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="floating-wa">
        WhatsApp
      </a>
    </main>
  );
}
