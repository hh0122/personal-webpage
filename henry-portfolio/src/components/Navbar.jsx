import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "navScrolled" : ""}`}>
      <div className="container navInner">
        <a className="brand" href="#top" aria-label="Go to top">
          <span className="brandDot" />
          Henry Huynh
        </a>

        <nav className="navLinks" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} className="navLink" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navCtas">
          <a className="btn btnGhost" href="#projects">
            View Projects
          </a>
          <a className="btn" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
