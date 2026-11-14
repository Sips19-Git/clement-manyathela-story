import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-portrait.jpg";
import aboutImg from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clement Manyathela — Broadcaster & Journalist" },
      { name: "description", content: "Official portfolio of Clement Manyathela: radio host, journalist, MC and conversation-maker." },
      { property: "og:title", content: "Clement Manyathela — Broadcaster & Journalist" },
      { property: "og:description", content: "Radio host, journalist, MC and conversation-maker." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { title: "Broadcasting", body: "Daily live radio shaping the national conversation." },
  { title: "Interviews", body: "Hard questions asked with fairness, curiosity and care." },
  { title: "Speaking & MC", body: "Hosting summits, panels and gala events with presence." },
];

function Index() {
  return (
    <main>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt="Clement Manyathela in studio" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 animate-rise">
          <p className="eyebrow text-bronze">Broadcaster · Journalist</p>
          <h1 className="mt-4 max-w-2xl text-6xl leading-[0.95] md:text-8xl">
            Asking the questions<span className="text-bronze">.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-foreground/80">
            Conversations that inform, challenge and move South Africa forward.
          </p>
        </div>
      </section>

      <section className="-mt-8 rounded-t-[2rem] bg-background px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow text-muted-foreground">Intro</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl md:text-5xl">
            Turning every microphone into a meeting place for honest conversation.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <div className="rule-bronze mx-auto w-10" />
                <h3 className="mt-5 text-2xl">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-5xl md:text-6xl">The<br />Voice<span className="text-bronze">.</span></h2>
            <p className="mt-6 text-muted-foreground">
              A storyteller at heart, Clement has built a reputation for incisive, empathetic
              journalism — from breaking news to deeply human stories.
            </p>
            <Link to="/about" className="eyebrow mt-8 inline-block border-b border-bronze pb-1">Read his story</Link>
          </div>
          <img src={aboutImg} alt="Portrait of Clement" loading="lazy" width={832} height={1280} className="aspect-[4/5] w-full object-cover object-top" />
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-ink-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-xl text-3xl md:text-4xl">Booking an interview, event or collaboration?</h2>
          <Link to="/contact" className="eyebrow rounded-full bg-bronze px-7 py-3 text-accent-foreground">Get in touch</Link>
        </div>
      </section>
    </main>
  );
}
