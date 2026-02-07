export default function ProjectCard({ project }) {
  return (
    <article className="card project">
      <div className="projectTop">
        <div>
          <h3 className="cardTitle">{project.title}</h3>
          <p className="muted">{project.description}</p>
        </div>
        <span className="badge">{project.type}</span>
      </div>

      <ul className="highlights">
        {project.highlights.map((h, idx) => (
          <li key={idx}>{h}</li>
        ))}
      </ul>

      <div className="tagRow" aria-label="Project tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="actions">
        {project.links?.live ? (
          <a className="btn btnSmall" href={project.links.live} target="_blank" rel="noreferrer">
            Live
          </a>
        ) : (
          <button className="btn btnSmall btnDisabled" disabled title="Add live link when ready">
            Live
          </button>
        )}

        {project.links?.github ? (
          <a className="btn btnSmall btnGhost" href={project.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : (
          <button className="btn btnSmall btnGhost btnDisabled" disabled title="Add GitHub link when ready">
            GitHub
          </button>
        )}
      </div>
    </article>
  );
}
