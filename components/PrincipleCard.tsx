import Reveal from "./Reveal";

export default function PrincipleCard({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <Reveal delay={index * 0.07} className="border-t hairline pt-6">
      <p className="font-display text-2xl font-light text-charcoal">{title}</p>
      <p className="mt-3 text-sm font-light leading-relaxed text-charcoal/65">
        {body}
      </p>
    </Reveal>
  );
}
