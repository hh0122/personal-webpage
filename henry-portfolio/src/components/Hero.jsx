export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container heroInner">
        <div>
          <p className="kicker">Full-Stack Developer • React • JavaScript</p>
          <h1 className="h1">
            Building clean, modern web apps — from ideas to shipped products.
          </h1>
          <p className="lead">
            I create user-friendly experiences with React components, solid UI,
            and practical features like auth, dashboards, and interactive flows.
          </p>

          <div className="heroRow">
            <a className="btn" href="#projects">
              See my projects
            </a>
            <a className="btn btnGhost" href="#contact">
              Let’s connect
            </a>
          </div>

          <div className="heroStats" aria-label="Highlights">
            <div className="stat">
              <div className="statNum">3+</div>
              <div className="statLabel">Portfolio projects</div>
            </div>
            <div className="stat">
              <div className="statNum">React</div>
              <div className="statLabel">Component-based UI</div>
            </div>
            <div className="stat">
              <div className="statNum">Full-stack</div>
              <div className="statLabel">Frontend + backend</div>
            </div>
          </div>
        </div>

        <div className="heroCard" role="presentation">
          <div className="heroCardInner">
            <div className="miniTitle">Featured projects</div>
            <ul className="miniList">
  <li>
    <strong>Travel4fun</strong> — social travel app (feed, posts, profiles)
  </li>
  <li>
    <strong>Glow Ateria Site</strong> — React + Tailwind marketing site (multi-page)
  </li>
  <li>
    <strong>Swipe Rhythm</strong> — interactive rhythm game UI + structure
  </li>
</ul>

            <div className="miniNote">
              Replace this card with screenshots later (optional).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
