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
        <SectionHeading eyebrow="The menu" title="Choose a flavor, then build the celebration around it." center />

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

        <div className="menu-grid">
          {filtered.map((item) => (
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
  );
}
