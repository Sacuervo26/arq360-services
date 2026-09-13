import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function TechButton({ href, children, variant = "secondary" }: Props) {
  return (
    <Link className={`tech-button tech-button--${variant}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true" className="tech-button__arrow">↗</span>
    </Link>
  );
}
