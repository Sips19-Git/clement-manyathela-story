import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { photos, interviewees, education } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Clement Manyathela" },
      { name: "description", content: "From Vaalbank, Mpumalanga to Radio 702: the story of broadcaster Clement Manyathela." },
      { property: "og:title", content: "About Clement Manyathela" },
      { property: "og:description", content: "From Vaalbank, Mpumalanga to Radio 702 and SABC's Face The Nation." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="relative bg-background pt-28">
      <div className="pointer-events-none absolute left-6 top-0 h-[1100px] w-px bg-bronze/70 md:left-12" />
      <p className="text-center font-display text-xl text-bronze animate-rise">Clement Manyathela</p>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-10 pb-24 pt-8 md:grid-cols-2 md:px-16">
        <div className="img-zoom mx-auto w-full max-w-md animate-rise">
          <img src={photos.heritage} alt="Clement Manyathela in traditional attire at a podium" className="aspect-[3/4] w-full object-cover" />
        </div>
        <div className="animate-rise [animation-delay:150ms]">
          <h1 className="text-7xl leading-[0.85] md:text-9xl">about<br />me.</h1>
          <div className="rule-bronze my-10 w-full max-w-sm" />
          <div className="max-w-md space-y-6 text-lg leading-relaxed">
            <p>I'm Clement — originally from Vaalbank, Mpumalanga, and a proud alumnus of the University of Pretoria, where I earned a Bachelor of Arts in Journalism.</p>
            <p>I've worked in broadcast journalism for more than nine years, many of them reporting on politics — from weekend reporting at the Pretoria News while studying, to SABC News Online, Power FM, Eyewitness News and hosting The Morning Show on e.tv.</p>
            <p>Today I host <em>The Clement Manyathela Show</em> on weekdays on Radio 702 and anchor <em>Face The Nation</em> on SABC News.</p>
            <p>Facilitating conversations with some of the world's most celebrated public figures has made me a sought-after interviewer, speaker and MC.</p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-ink-foreground">
        <Reveal className="mx-auto max-w-5xl">
          <span className="font-display text-7xl text-bronze">“</span>
          <p className="-mt-6 font-display text-3xl leading-snug md:text-5xl">
            Every great conversation begins with listening — and the courage to ask the question everyone is thinking.
          </p>
        </Reveal>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow text-bronze">Notable interviews</p>
            <h2 className="mt-4 text-5xl">He's sat across from<span className="text-bronze">.</span></h2>
            <div className="img-zoom mt-8 aspect-[2/3] w-full max-w-md rounded-lg">
              <img src={photos.liveReporting} alt="Clement Manyathela reporting live with headphones and a microphone" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <ul className="divide-y divide-border self-start border-y border-border">
            {interviewees.map((n, i) => (
              <Reveal as="li" key={n} delay={i * 50} className="interview-row group relative flex items-center justify-between gap-4 py-5 font-display text-xl transition-colors duration-300 hover:z-10 hover:text-bronze md:text-2xl">
                <span className="interview-name min-w-0 flex-1">{n}</span>
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-bronze" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <Reveal className="img-zoom aspect-[4/3]"><img src={photos.panelBw} alt="Clement moderating a panel" loading="lazy" className="h-full w-full object-cover" /></Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-bronze">Education</p>
            <h2 className="mt-4 text-4xl md:text-5xl">{education.school}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{education.degree} · {education.period}</p>
            <Link to="/contact" className="btn-pill mt-10 bg-primary text-primary-foreground hover:bg-bronze">Book Clement</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
