function BootSequence({ isBooting, onSkip }) {
  return (
    <div className={`boot-sequence${isBooting ? ' is-active' : ''}`} aria-hidden={!isBooting}>
      <div className="boot-panel">
        <span className="boot-label">Portfolio system</span>
        <strong>Inicializando interface estrategica...</strong>
        <div className="boot-progress">
          <span className="boot-bar" />
        </div>
        <div className="boot-lines">
          <span>loading module // interface.react</span>
          <span>loading module // systems.api</span>
          <span>loading module // automation.python</span>
        </div>
        <button className="boot-skip" type="button" onClick={onSkip}>
          entrar
        </button>
      </div>
    </div>
  );
}

export default BootSequence;
