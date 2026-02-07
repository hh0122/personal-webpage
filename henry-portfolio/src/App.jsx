import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import ProjectsGrid from "./components/ProjectsGrid.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { projects } from "./data/projects.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesTag = tag === "All" ? true : p.tags.includes(tag);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.highlights.join(" ").toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [query, tag]);

  return (
    <div className="page">
      <Navbar />

      <main>
        <Hero />

        <Section
          id="about"
          title="About me"
          subtitle="Full-stack developer with a builder mindset — I like shipping real products and improving them fast."
        >
          <div className="grid-2">
            <div className="card">
              <h3 className="cardTitle">Quick intro</h3>
              <p className="muted">
                I’m Henry Huynh — a Fullstack bootcamp graduate who builds modern
                web apps with React, Node/Express, and databases. I enjoy
                creating products that feel clean, fast, and easy to use.
              </p>
              <ul className="bullets">
                <li>Frontend: React, HTML, CSS, JavaScript</li>
                <li>Backend: Node.js, Express</li>
                <li>DB: PostgreSQL (and ORMs like Prisma)</li>
                <li>Focus: UI/UX, features that users actually need</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="cardTitle">What I’m building</h3>
              <p className="muted">
                These projects reflect what I love: social apps, business sites,
                and interactive game-like experiences.
              </p>
              <div className="pillRow">
                <span className="pill">Travel Bug</span>
                <span className="pill">Facial / Lash Website</span>
                <span className="pill">Swipe Rhythm</span>
              </div>
              <p className="muted small">
                Tip: swap the text here with your exact stack + links when ready.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="A few things I’ve built — search or filter to explore."
        >
          <div className="toolbar">
            <input
              className="input"
              placeholder="Search projects (ex: auth, posts, game, booking...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search projects"
            />

            <div className="chipGroup" role="tablist" aria-label="Project tags">
              {allTags.map((t) => (
                <button
                  key={t}
                  className={`chip ${tag === t ? "chipActive" : ""}`}
                  onClick={() => setTag(t)}
                  role="tab"
                  aria-selected={tag === t}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <ProjectsGrid items={filtered} />
        </Section>

        <Section
          id="skills"
          title="Skills"
          subtitle="Tools and technologies I use to ship projects."
        >
          <Skills />
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Want to collaborate or hire me? Let’s talk."
        >
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
