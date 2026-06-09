import type { Block } from "@/lib/data";

export default function ServiceContent({ content }: { content: Block[] }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-grey">
      {content.map((block, i) => {
        if (block.type === "p") {
          return <p key={i}>{block.text}</p>;
        }
        return (
          <ul key={i} className="space-y-2.5">
            {block.items.map((item, j) => (
              <li key={j} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-orange" aria-hidden />
                <span>
                  {item.lead && <strong className="font-semibold text-charcoal">{item.lead} </strong>}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
