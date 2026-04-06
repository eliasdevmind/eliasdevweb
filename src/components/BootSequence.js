function BootSequence({ isBooting, onSkip }) {
  return (
    <div className={`boot-sequence${isBooting ? ' is-active' : ''}`} aria-hidden={!isBooting}>
      <div className="boot-panel">
        <span className="boot-label">Portfolio System</span>
        <strong>Initializing command interface...</strong>
        <div className="boot-progress">
          <span className="boot-bar" />
        </div>
        <div className="boot-lines">
          <span>loading module // front-end</span>
          <span>loading module // back-end</span>
          <span>loading module // automation</span>
        </div>
        <button className="boot-skip" type="button" onClick={onSkip}>
          skip intro
        </button>
      </div>
    </div>
  );
}

export default BootSequence;
