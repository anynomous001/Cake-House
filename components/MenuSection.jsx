'use client';

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { menuFilters, menuItems } from "../data/content";

export default function MenuSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All" ? menuItems : menuItems.filter((item) => item.category === activeFilter);

  return (
    <section className="menu-section" id="menu">
      <div className="shell">
        <SectionHeading
          eyebrow="Fresh Homemade · Maslandapur"
          title={<>Choose a <em>Flavor</em>, Build the Celebration</>}
          center
        />

        <div className="menu-filters">
          {menuFilters.map((item) => (
            <button
              key={item}
              className={`menu-filter${activeFilter === item ? " is-active" : ""}`}
              type="button"
              onClick={() => setActiveFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div data-anim="fade-up" className="menu-grid">
          {filtered.map((item) => (
            <article key={item.title} className="menu-card">
              <div className="menu-card-side">
                <div className="menu-card-media">
                  <Image src={item.image} alt={item.title} width={280} height={280} className="menu-card-image" />
                </div>
                <span className="menu-card-price">{item.price}</span>
              </div>
              <div className="menu-card-copy">
                <div className="menu-item-row">
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
                <div className="menu-card-footer">
                  <a href="https://wa.me/916296990399" target="_blank" rel="noreferrer" className="menu-card-link">
                    Order on WhatsApp
                  </a>
                </div>
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
  );
}
