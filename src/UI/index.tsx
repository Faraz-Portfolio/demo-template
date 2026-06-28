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
      <a
        href="https://farazzshaikh.com/demos/"
        className="pointer-events-auto mt-3 block w-fit rounded-md border border-white/20 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10"
      >
        View all demos →
      </a>
    </div>
  );
}
