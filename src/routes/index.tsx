import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { photos, services, interviewees, tagline } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preconnect", href: new URL(photos.hero).origin },
      { rel: "preload", as: "image", href: photos.hero, fetchPriority: "high" },
    ],
    meta: [
      { title: "Clement Manyathela — Broadcaster, Moderator & MC" },
      { name: "description", content: "Award-winning radio and television broadcaster, host of The Clement Manyathela Show on Radio 702, panel moderator and MC." },
      { property: "og:title", content: "Clement Manyathela — Broadcaster, Moderator & MC" },
      { property: "og:description", content: "Host of The Clement Manyathela Show on Radio 702. Book Clement for speaking, launches and corporate events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: photos.hero },
      { name: "twitter:image", content: photos.hero },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="home-cover relative min-h-[100svh] overflow-hidden bg-ink text-ink-foreground sm:min-h-[800px] lg:min-h-[720px]">
        <img src={photos.hero} loading="eager" decoding="async" fetchPriority="high" alt="Clement Manyathela smiling in a blue suit at a corporate event" className="absolute inset-0 h-full w-full object-cover object-[50%_center] animate-rise lg:object-center" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/15 to-ink/95 sm:hidden" />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-ink/85 via-ink/45 to-ink/10 sm:block lg:from-ink/90 lg:via-ink/35" />
        <div className="relative flex min-h-[inherit] w-full flex-col items-start px-5 pb-10 pt-24 sm:px-8 sm:pb-8 lg:px-14 lg:pb-12 lg:pt-28">
          <p className="mt-auto max-w-[240px] text-sm font-medium sm:mt-0 uppercase leading-relaxed text-bronze animate-rise sm:max-w-[480px] sm:text-lg lg:max-w-[520px] lg:text-xl">{tagline}</p>
          <h1 className="mt-3 w-full max-w-[280px] text-[40px] leading-[1] animate-rise [animation-delay:120ms] sm:max-w-[540px] sm:text-[80px] lg:text-[88px] xl:text-[96px]">
            Conversations that move a nation<span className="text-bronze">.</span>
          </h1>
          <div className="w-full pt-6 sm:contents">
          <p className="max-w-[520px] text-base leading-relaxed sm:mt-5 text-ink-foreground/90 animate-rise [animation-delay:240ms] sm:max-w-[360px] sm:text-xl lg:max-w-[520px]">
            Host of <em>The Clement Manyathela Show</em> on Radio 702 — and one of South Africa's most sought-after interviewers, speakers and MCs.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap animate-rise [animation-delay:360ms] lg:mt-auto lg:pt-6">
            <Link to="/contact" className="btn-pill justify-center bg-bronze text-accent-foreground hover:bg-ink-foreground hover:text-ink">Book Clement</Link>
            <Link to="/about" className="btn-pill justify-center border border-ink-foreground/60 bg-transparent text-ink-foreground hover:bg-ink-foreground hover:text-ink">His story</Link>
          </div>
          </div>
        </div>
      </section>

      <section className="relative bg-background px-6 pt-24 pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <Reveal className="img-zoom aspect-[4/5]">
            <img src={photos.studio} alt="Clement in the Radio 702 studio" loading="eager" decoding="async" fetchPriority="low" className="h-full w-full object-cover" />
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
                  <div className="img-zoom aspect-[4/3]"><img src={s.img} alt={s.title} loading="eager" decoding="async" fetchPriority="low" className="h-full w-full object-cover" /></div>
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

      <section className="overflow-hidden bg-ink py-5 text-ink-foreground">
        <Reveal className="mx-auto mb-3 max-w-6xl px-6">
          <p className="eyebrow text-bronze">In conversation with</p>
        </Reveal>
        <div className="flex w-max animate-marquee gap-6 whitespace-nowrap font-display text-sm md:text-base hover:[animation-play-state:paused]">
          {[...interviewees, ...interviewees].map((n, i) => (
            <span key={i} className="flex items-center gap-6 transition-colors hover:text-bronze">{n}<span className="size-1 shrink-0 rounded-full bg-bronze" /></span>
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
              [photos.podiumSide, "row-span-2"], [photos.miningWeekWide, "col-span-2"], [photos.businessSmile, ""],
              [photos.noExcuse, "row-span-2"], [photos.programmeDirector, "col-span-2"], [photos.miningWeek, ""],
              [photos.classroom, "row-span-2"], [photos.galaHost, "row-span-2"],
            ].map(([src, cls], i) => (
              <Reveal key={i} delay={(i % 4) * 90} className={`img-zoom ${cls}`}>
                <img src={src} alt="Clement Manyathela at work" loading="eager" decoding="async" fetchPriority="low" className="h-full w-full object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
