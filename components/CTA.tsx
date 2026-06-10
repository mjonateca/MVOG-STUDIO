import Link from "next/link";

export default function CTA({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline";
}) {
  const styles = {
    dark: "bg-charcoal text-offwhite hover:bg-tropical",
    light: "bg-offwhite text-charcoal hover:bg-stone",
    outline:
      "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-offwhite",
  };
  return (
    <Link
      href={href}
      className={`inline-block px-8 py-3.5 text-[11px] uppercase tracking-widest2 transition-colors duration-300 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
