import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Clement Manyathela" },
      { name: "description", content: "The story behind Clement Manyathela, broadcaster and journalist." },
      { property: "og:title", content: "About Clement Manyathela" },
      { property: "og:description", content: "The story behind the voice." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="relative bg-background pt-28">
      <div className="pointer-events-none absolute inset-y-0 left-6 w-px bg-bronze/70 md:left-12" />
      <p className="text-center font-display text-xl text-bronze">Clement Manyathela</p>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-10 pb-16 pt-6 md:grid-cols-2 md:px-16">
        <img src={portrait} alt="Clement Manyathela, full-length portrait" width={832} height={1280} className="mx-auto w-full max-w-md animate-rise" />
        <div className="pb-10 animate-rise [animation-delay:150ms]">
          <h1 className="text-7xl leading-[0.85] md:text-9xl">about<br />me.</h1>
          <div className="rule-bronze my-10 w-full max-w-sm" />
          <div className="max-w-md space-y-6 text-lg leading-relaxed">
            <p>I'm Clement, a broadcaster and journalist passionate about conversations that help people understand their country, their communities and each other.</p>
            <p>With years behind the microphone, I've interviewed leaders, activists and everyday South Africans — always chasing clarity over noise.</p>
            <p>Beyond radio, I host events, moderate panels and speak on media, leadership and the power of listening.</p>
            <p>This is where I share my work, my thinking and the stories that matter.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
