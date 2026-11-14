import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Clement Manyathela" },
      { name: "description", content: "Shows, interviews, events and highlights from Clement Manyathela." },
      { property: "og:title", content: "Work — Clement Manyathela" },
      { property: "og:description", content: "Shows, interviews, events and highlights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});

const items = [
  { tag: "Radio", title: "The Morning Conversation", body: "Live weekday talk radio on news, politics and society." },
  { tag: "Interviews", title: "In the Hot Seat", body: "Long-form interviews with leaders and newsmakers." },
  { tag: "Events", title: "Host & Moderator", body: "Summits, awards ceremonies and corporate panels." },
  { tag: "Speaking", title: "Keynotes", body: "On media, trust and the art of listening." },
];

function Work() {
  return (
    <main className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow text-bronze">Selected work</p>
        <h1 className="mt-4 text-6xl md:text-8xl">Work<span className="text-bronze">.</span></h1>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {items.map((i) => (
            <article key={i.title} className="grid gap-4 py-10 md:grid-cols-[10rem_1fr_1fr]">
              <span className="eyebrow text-muted-foreground">{i.tag}</span>
              <h2 className="text-3xl">{i.title}</h2>
              <p className="text-muted-foreground">{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
