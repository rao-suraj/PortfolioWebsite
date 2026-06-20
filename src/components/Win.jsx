export function Win({ title, children, statusItems, style, className }) {
  return (
    <div className={`win${className ? ' ' + className : ''}`} style={style}>
      <div className="win-titlebar">
        <div className="win-tools">
          {['+', '−', '∧', '∨'].map(s => (
            <div key={s} className="win-btn">{s}</div>
          ))}
        </div>
        <span className="win-title">{title}</span>
        <div className="win-controls">
          <div className="win-circle"></div>
          <div className="win-circle"></div>
          <div className="win-circle"></div>
        </div>
      </div>
      <div className="win-body">{children}</div>
      {statusItems && (
        <div className="win-statusbar">
          {statusItems.map((s, i) => (
            <div key={i} className="win-status-cell">{s}</div>
          ))}
        </div>
      )}
    </div>
  );
}
