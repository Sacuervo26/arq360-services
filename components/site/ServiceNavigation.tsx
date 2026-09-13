import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs page-container breadcrumbs--standalone" aria-label="Ruta de navegación">
      <Link href="/">INICIO</Link>
      {items.map((item) => <span className="breadcrumbs__item" key={`${item.label}-${item.href ?? "current"}`}><i>/</i>{item.href ? <Link href={item.href}>{item.label}</Link> : <b>{item.label}</b>}</span>)}
    </nav>
  );
}
