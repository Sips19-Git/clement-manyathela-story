import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { experience, education, photos } from "@/lib/content";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Experience — Clement Manyathela" },
      { name: "description", content: "Career of Clement Manyathela: Radio 702, eNCA, e.tv, Eyewitness News, ANN7, Power FM, SABC News Online and Pretoria News." },
      { property: "og:title", content: "Experience — Clement Manyathela" },
      { property: "og:description", content: "From Pretoria News to Radio 702: a career in broadcast journalism." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <main>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink text-ink-foreground">
        <img src={photos.fieldInterview} alt="Clement interviewing a guest on an outside broadcast for Radio 702" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-16">
          <p className="eyebrow text-bronze animate-rise">Career</p>
          <h1 className="mt-4 text-6xl animate-rise [animation-delay:120ms] md:text-8xl">Experience<span className="text-bronze">.</span></h1>
        </div>
      </section>
      <section className="px-6 py-24">
        <ol className="relative mx-auto max-w-5xl border-l border-bronze/60">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.role + e.org} delay={(i % 3) * 80} className="group relative pb-14 pl-10">
              <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border border-bronze bg-background transition-all duration-300 group-hover:scale-150 group-hover:bg-bronze" />
              <div className="card-lift grid gap-4 rounded-xl p-6 hover:bg-card md:grid-cols-[12rem_1fr]">
                <p className="eyebrow pt-2 text-muted-foreground">{e.period}</p>
                <div>
                  <h2 className="text-3xl transition-colors group-hover:text-bronze">{e.role}</h2>
                  <p className="mt-2 font-medium">{e.org}{e.type ? ` · ${e.type}` : ""}</p>
                  <p className="text-sm text-muted-foreground">{e.place}</p>
                  {e.body && <p className="mt-3 max-w-xl text-muted-foreground">{e.body}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mx-auto mt-10 max-w-5xl border-t border-border pt-14">
          <p className="eyebrow text-bronze">Education</p>
          <h2 className="mt-4 text-4xl">{education.school}</h2>
          <p className="mt-2 text-muted-foreground">{education.degree} · {education.period}</p>
        </Reveal>
      </section>
    </main>
  );
}
