export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-widest3 text-rustic">
      {children}
    </p>
  );
}
