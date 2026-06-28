import { author, description, name } from "../../package.json";

const isInIframe = window.self !== window.top;

export function UI() {
  if (isInIframe) return null;

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 p-6 text-white select-none">
      <h1 className="text-lg font-semibold tracking-tight">{name}</h1>
      <p className="mt-1 max-w-xs text-sm text-white/60">{description}</p>
      <a
        href={`mailto:${author.email}`}
        className="mt-2 text-xs text-white/40 underline cursor-pointer pointer-events-auto"
      >
        by {author.name} ({author.email})
      </a>
    </div>
  );
}
