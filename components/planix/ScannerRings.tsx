export function ScannerRings({ compact = false }: { compact?: boolean }) {
  return <div className={`scanner-rings ${compact ? "scanner-rings--compact" : ""}`} aria-hidden="true"><i /><i /><i /><b /></div>;
}
