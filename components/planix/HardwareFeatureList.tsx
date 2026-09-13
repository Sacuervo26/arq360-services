import { planixFeatures } from "@/data/home";

export function HardwareFeatureList() {
  return (
    <div className="planix-features">
      {planixFeatures.map((feature, index) => (
        <div key={feature.title}>
          <span>{String(index + 1).padStart(2, "0")}</span><i />
          <p>{feature.title}<small>{feature.description}</small></p>
        </div>
      ))}
    </div>
  );
}
