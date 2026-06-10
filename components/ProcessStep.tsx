import Reveal from "./Reveal";

export default function ProcessStep({
  index,
  title,
  body,
  isLast,
}: {
  index: number;
  title: string;
  body: string;
  isLast?: boolean;
}) {
  return (
    <Reveal delay={index * 0.08} className="relative flex-1 min-w-[150px]">
      {/* Línea conectora */}
      {!isLast && (
        <span className="absolute left-[calc(50%+14px)] right-[calc(-50%+14px)] top-[5px] hidden h-px bg-offwhite/20 lg:block" />
      )}
      <div className="flex flex-col items-start lg:items-center lg:text-center">
        <span className="relative z-10 h-[11px] w-[11px] rounded-full border border-wood bg-tropical" />
        <span className="mt-4 font-display text-base font-light text-wood">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="mt-1.5 text-[11px] uppercase tracking-widest2 text-offwhite">
          {title}
        </p>
        <p className="mt-1.5 max-w-[180px] text-xs font-light leading-relaxed text-offwhite/50">
          {body}
        </p>
      </div>
    </Reveal>
  );
}
