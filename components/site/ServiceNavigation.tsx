"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { services } from "@/data/services";

export function ServiceNavigation({ current, packageName }: { current?: string; packageName?: string }) {
  const router = useRouter();
  const currentLabel = packageName ?? services.find(item => item.slug === current)?.title;
  return <section className="service-context page-container" aria-label="Explorador de servicios">
    <nav className="breadcrumbs" aria-label="Ruta de navegación"><Link href="/">INICIO</Link><span>/</span><Link href="/servicios">SERVICIOS</Link>{currentLabel && <><span>/</span><b>{currentLabel}</b></>}</nav>
    <div className="service-context__desktop"><Link href="/servicios">TODOS</Link>{services.map(item => <Link className={item.slug === current ? "is-active" : ""} href={`/servicios/${item.slug}`} key={item.slug}>{item.title}</Link>)}</div>
    <label className="service-context__mobile">EXPLORAR SERVICIOS<select value={current ? `/servicios/${current}` : "/servicios"} onChange={event => router.push(event.target.value)}><option value="/servicios">Todos los servicios</option>{services.map(item => <option value={`/servicios/${item.slug}`} key={item.slug}>{item.title}</option>)}</select></label>
  </section>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs page-container breadcrumbs--standalone" aria-label="Ruta de navegación"><Link href="/">INICIO</Link>{items.map(item => <span className="breadcrumbs__item" key={`${item.label}-${item.href ?? "current"}`}><i>/</i>{item.href ? <Link href={item.href}>{item.label}</Link> : <b>{item.label}</b>}</span>)}</nav>;
}
