import Reveal from "./Reveal";

export default function ProcessStep({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <Reveal delay={index * 0.06} className="flex items-baseline gap-6 border-b border-offwhite/15 py-6">
      <span className="font-display text-lg font-light text-wood">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="text-sm uppercase tracking-widest2 text-offwhite">{title}</p>
        <p className="mt-1 text-sm font-light text-offwhite/55">{body}</p>
      </div>
    </Reveal>
  );
}
