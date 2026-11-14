import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { photos, services, interviewees, tagline } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clement Manyathela — Broadcaster, Moderator & MC" },
      { name: "description", content: "Award-winning radio and television broadcaster, host of The Clement Manyathela Show on Radio 702, panel moderator and MC." },
      { property: "og:title", content: "Clement Manyathela — Broadcaster, Moderator & MC" },
      { property: "og:description", content: "Host of The Clement Manyathela Show on Radio 702. Book Clement for speaking, launches and corporate events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { n: "9+", l: "Years in broadcast journalism" },
  { n: "702", l: "Weekday host on Radio 702" },
  { n: "3", l: "Newsrooms: radio, TV & print" },
];

function Index() {
  return (
    <main>
      <section className="relative flex min-h-screen items-end overflow-hidden bg-ink text-ink-foreground">
        <img src={photos.sikuvile} alt="Clement Manyathela hosting the Sikuvile Journalism Awards" className="absolute inset-0 h-full w-full scale-105 object-cover opacity-60 animate-rise" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24">
          <p className="eyebrow text-bronze animate-rise">{tagline}</p>
          <h1 className="mt-5 max-w-3xl text-6xl leading-[0.95] animate-rise [animation-delay:120ms] md:text-8xl">
            Conversations that move a nation<span className="text-bronze">.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink-foreground/80 animate-rise [animation-delay:240ms]">
            Host of <em>The Clement Manyathela Show</em> on Radio 702 — and one of South Africa's most sought-after interviewers, speakers and MCs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-rise [animation-delay:360ms]">
            <Link to="/contact" className="btn-pill bg-bronze text-accent-foreground hover:bg-ink-foreground hover:text-ink">Book Clement</Link>
            <Link to="/about" className="btn-pill border border-ink-foreground/40 hover:bg-ink-foreground hover:text-ink">His story</Link>
          </div>
        </div>
      </section>

      <section className="-mt-8 relative rounded-t-[2rem] bg-background px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-10 text-center md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 120} className="card-lift rounded-2xl p-6">
              <p className="font-display text-6xl text-bronze">{s.n}</p>
              <p className="eyebrow mt-3 text-muted-foreground">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <Reveal className="img-zoom aspect-[4/5]">
            <img src={photos.studio} alt="Clement in the Radio 702 studio" loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-bronze">On air</p>
            <h2 className="mt-4 text-5xl md:text-6xl">The Clement<br />Manyathela Show<span className="text-bronze">.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground">Weekdays on Radio 702, Clement leads honest, wide-ranging conversations with newsmakers, experts and listeners. He also anchors <em>Face The Nation</em> on SABC News.</p>
            <Link to="/work" className="eyebrow link-underline mt-8 inline-block pb-1">View experience →</Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-bronze">Services</p>
              <h2 className="mt-4 text-5xl md:text-6xl">Book Clement for<span className="text-bronze">.</span></h2>
            </div>
            <Link to="/contact" className="btn-pill bg-primary text-primary-foreground hover:bg-bronze">Make a booking</Link>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <Link to="/contact" className="group card-lift block bg-card">
                  <div className="img-zoom aspect-[4/3]"><img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" /></div>
                  <div className="p-7">
                    <h3 className="text-2xl transition-colors group-hover:text-bronze">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground">{s.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink py-20 text-ink-foreground">
        <Reveal className="mx-auto mb-10 max-w-6xl px-6">
          <p className="eyebrow text-bronze">In conversation with</p>
        </Reveal>
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-4xl md:text-6xl hover:[animation-play-state:paused]">
          {[...interviewees, ...interviewees].map((n, i) => (
            <span key={i} className="flex items-center gap-12 transition-colors hover:text-bronze">{n}<span className="text-bronze">✦</span></span>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><p className="eyebrow text-bronze">Moments</p><h2 className="mt-4 text-5xl md:text-6xl">On stage & on air<span className="text-bronze">.</span></h2></Reveal>
          <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
            {[
              [photos.keynote, "row-span-2"], [photos.panelBw, ""], [photos.van702, ""],
              [photos.heritage, "row-span-2"], [photos.hydrogen, "col-span-2"], [photos.awards, ""], [photos.moderating, "col-span-2"],
            ].map(([src, cls], i) => (
              <Reveal key={i} delay={(i % 4) * 90} className={`img-zoom ${cls}`}>
                <img src={src} alt="Clement Manyathela at work" loading="lazy" className="h-full w-full object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
