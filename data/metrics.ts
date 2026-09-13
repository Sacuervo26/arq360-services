export type Metric = {
  label: string;
  value: string;
  suffix: string;
  needsVerification?: boolean;
};

export const metrics: Metric[] = [
  { label: "PRECISIÓN", value: "±1%", suffix: "EN MEDICIONES", needsVerification: true },
  { label: "EFICIENCIA", value: "5–7s", suffix: "POR ESCANEO", needsVerification: true },
  { label: "INFORMACIÓN", value: "MÚLTIPLES", suffix: "ENTREGABLES" },
  { label: "POSIBILIDADES", value: "TODOS LOS", suffix: "SECTORES" },
];
