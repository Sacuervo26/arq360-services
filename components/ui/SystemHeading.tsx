export function SystemHeading({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: React.ReactNode; copy?: string }) {
  return (
    <header className="system-heading">
      <div className="system-heading__index"><span>{index}</span><i />{eyebrow}</div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </header>
  );
}
