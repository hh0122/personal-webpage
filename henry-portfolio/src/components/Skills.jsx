const groups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Auth (JWT/sessions)"],
  },
  {
    title: "Database & Tools",
    items: ["PostgreSQL", "Prisma/ORM", "Git/GitHub", "Vite", "Deployment"],
  },
];

export default function Skills() {
  return (
    <div className="grid">
      {groups.map((g) => (
        <div className="card" key={g.title}>
          <h3 className="cardTitle">{g.title}</h3>
          <ul className="bullets">
            {g.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
