import { metrics } from "@/data/metrics";

export function MetricsBar() {
  return (
    <section className="metrics" aria-label="Indicadores del sistema">
      {metrics.map((metric, index) => (
        <article key={metric.label} className="metric">
          <div className="metric__index">0{index + 1}</div>
          <div>
            <span className="metric__label">+ {metric.label}</span>
            <strong>{metric.value}</strong>
            <span className="metric__suffix">{metric.suffix}</span>
          </div>
          <span className="metric__signal" aria-hidden="true" />
        </article>
      ))}
    </section>
  );
}
