export default function Contact() {
  return (
    <div className="grid-2">
      <div className="card">
        <h3 className="cardTitle">Message</h3>
        <p className="muted">
          Easiest: link your email + LinkedIn below. If you want a working form,
          you can connect EmailJS or a simple backend endpoint later.
        </p>

        <div className="contactRow">
          <span className="contactLabel">Email</span>
          <a className="contactValue" href="mailto:huynh.vu2201@email.com">
            huynh.vu2201@email.com
          </a>
        </div>

        <div className="contactRow">
          <span className="contactLabel">LinkedIn</span>
          <a className="contactValue" href="https://linkedin.com" target="_blank" rel="noreferrer">
            linkedin.com/in/your-handle
          </a>
        </div>

        <div className="contactRow">
          <span className="contactLabel">GitHub</span>
          <a className="contactValue" href="https://github.com/hh0122" target="_blank" rel="noreferrer">
            github.com/hh0122
          </a>
        </div>
      </div>

      <div className="card">
        <h3 className="cardTitle">Availability</h3>
        <p className="muted">
          Open to junior/full-stack roles and contract work. I like building:
        </p>
        <ul className="bullets">
          <li>Social apps (feeds, posts, profiles)</li>
          <li>Business websites (services, booking, SEO basics)</li>
          <li>Interactive web games (smooth UI + performance)</li>
        </ul>

        <a className="btn" href="#projects">
          Browse projects
        </a>
      </div>
    </div>
  );
}
