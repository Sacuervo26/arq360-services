export function HeroHud() {
  return (
    <div className="hero-hud" aria-hidden="true">
      <div className="hud-bracket hud-bracket--tl" />
      <div className="hud-bracket hud-bracket--tr" />
      <div className="hud-bracket hud-bracket--bl" />
      <div className="hud-capture">
        <span>CAPTURANDO</span>
        <div className="capture-dial"><strong>100</strong><small>%</small></div>
      </div>
      <div className="hud-output">
        <span>NUBE DE PUNTOS</span>
        <span>PLANOS</span>
        <span>MEDICIONES</span>
        <span>CAD / DWG</span>
        <span>RECORRIDO VIRTUAL</span>
      </div>
      <div className="hud-coordinates">
        <span>05.7150° N</span>
        <span>72.9333° W</span>
        <b>COLOMBIA</b>
      </div>
      <div className="hud-mode">CAMPO LiDAR <i /> ACTIVO</div>
      <div className="reticle"><i /><i /></div>
    </div>
  );
}
