import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsGrid({ items }) {
  if (!items.length) {
    return (
      <div className="empty">
        <div className="emptyTitle">No projects found</div>
        <div className="muted">Try a different search or tag.</div>
      </div>
    );
  }

  return (
    <div className="grid">
      {items.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
