export function Dialog({ onYes, onNo }) {
  return (
    <div className="dialog-overlay" onClick={onNo}>
      <div className="dialog-win" onClick={e => e.stopPropagation()}>
        <div className="win-titlebar">
          <div className="win-tools">
            <div className="win-btn">×</div>
          </div>
          <span className="win-title">Confirm</span>
          <div className="win-controls">
            <div className="win-circle"></div>
          </div>
        </div>
        <div className="dialog-body">
          Are you sure you want to download <strong>resume.pdf</strong>?
        </div>
        <div className="dialog-btns">
          <button className="btn-secondary" style={{padding:'6px 20px', fontSize:12}} onClick={onNo}>No</button>
          <button className="btn-primary" style={{padding:'6px 20px', fontSize:12}} onClick={onYes}>Yes</button>
        </div>
      </div>
    </div>
  );
}
