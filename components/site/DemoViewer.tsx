"use client";
import { getIguideEmbedUrl, iguideDemos } from "@/data/demos";

export function DemoViewer({ demoId }: { demoId: string }) {
  const demo = iguideDemos.find((item) => item.id === demoId);
  if (!demo) return null;
  return <div className="site-demo"><div><span><i /> DEMOSTRACIÓN INTERACTIVA</span><b>{demo.label}</b></div><iframe src={getIguideEmbedUrl(demo.url)} title={`Demostración iGUIDE — ${demo.title}`} loading="lazy" allow="fullscreen; accelerometer; gyroscope" allowFullScreen /></div>;
}
