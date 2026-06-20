function FolderIcon({ shipped }) {
  return (
    <svg viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 10 Q2 6 6 6 L20 6 L24 10 L46 10 Q50 10 50 14 L50 38 Q50 42 46 42 L6 42 Q2 42 2 38 Z"
        fill={shipped ? '#F0B040' : '#FAF6ED'} stroke="#2D3142" strokeWidth="2"
      />
      <path d="M2 14 L50 14" stroke="#2D3142" strokeWidth="2"/>
      <text x="26" y="32" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700" fontSize="9" fill="#2D3142">
        {shipped ? 'DONE' : 'WIP'}
      </text>
    </svg>
  );
}

export function ProjectCard({ title, desc, shipped, live, demo, git }) {
  return (
    <div className="project-card">
      <div className="project-folder-icon">
        <FolderIcon shipped={shipped} />
      </div>
      <div className="project-card-right">
        <div className="project-name">{title}</div>
        <p className="project-desc">{desc}</p>
        <div className="project-badges">
          <span className={`badge ${shipped ? 'badge-shipped' : 'badge-wip'}`}>
            {shipped ? '✓ SHIPPED' : '⧖ IN_PROGRESS'}
          </span>
          {live && <a href={live} target="_blank" rel="noopener noreferrer" className="badge badge-link">⬡ LIVE</a>}
          {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="badge badge-link">▶ DEMO</a>}
          {git && <a href={git} target="_blank" rel="noopener noreferrer" className="badge badge-link">⌥ GITHUB</a>}
        </div>
      </div>
    </div>
  );
}
