import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/reveal";
import { photos } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    links: [
      { rel: "preconnect", href: new URL(photos.awards).origin },
      { rel: "preload", as: "image", href: photos.awards, fetchPriority: "high" },
    ],
    meta: [
      { title: "Book Clement Manyathela — Speaking, Launches & Events" },
      { name: "description", content: "Booking form for Clement Manyathela: public speaking, product launch events, corporate events and panel moderation." },
      { property: "og:title", content: "Book Clement Manyathela" },
      { property: "og:description", content: "Public speaking, product launches, corporate events and panel moderation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40),
  organisation: z.string().trim().max(160),
  service: z.string().min(1, "Please choose a service"),
  event_date: z.string(),
  location: z.string().trim().max(160),
  message: z.string().trim().min(1, "Please tell us about your event").max(3000),
});

const empty = { name: "", email: "", phone: "", organisation: "", service: "", event_date: "", location: "", message: "" };
const field = "w-full border-0 border-b border-border bg-transparent py-3 outline-none transition-colors placeholder:text-muted-foreground hover:border-foreground/50 focus:border-bronze";

function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check the form"); return; }
    setError(""); setStatus("sending");
    const d = parsed.data;
    const { error } = await supabase.from("booking_requests").insert({
      ...d, phone: d.phone || null, organisation: d.organisation || null, location: d.location || null, event_date: d.event_date || null,
    });
    if (error) { setStatus("error"); setError("Something went wrong. Please try again."); return; }
    setStatus("done"); setForm(empty);
  }

  return (
    <main className="px-6 pb-28 pt-36">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-bronze animate-rise">Bookings</p>
          <h1 className="mt-4 text-6xl animate-rise [animation-delay:100ms] md:text-7xl">Book Clement<span className="text-bronze">.</span></h1>
          <p className="mt-6 max-w-sm text-muted-foreground animate-rise [animation-delay:200ms]">Public speaking, product launch events, corporate events and panel moderation. Share a few details and the team will get back to you.</p>
          <Reveal className="img-zoom mt-10 hidden aspect-[4/3] md:block"><img src={photos.awards} alt="Clement hosting an awards ceremony" loading="eager" decoding="async" fetchPriority="high" className="h-full w-full object-cover" /></Reveal>
        </div>
        <Reveal delay={150}>
          {status === "done" ? (
            <div className="rounded-2xl bg-card p-10">
              <h2 className="text-4xl">Thank you<span className="text-bronze">.</span></h2>
              <p className="mt-4 text-muted-foreground">Your booking request has been received.</p>
              <button onClick={() => setStatus("idle")} className="btn-pill mt-8 border border-border hover:bg-primary hover:text-primary-foreground">Send another</button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-6 rounded-2xl bg-card p-8 md:grid-cols-2 md:p-10">
              <input placeholder="Full name *" className={field} value={form.name} onChange={set("name")} />
              <input type="email" placeholder="Email *" className={field} value={form.email} onChange={set("email")} />
              <input placeholder="Phone" className={field} value={form.phone} onChange={set("phone")} />
              <input placeholder="Organisation" className={field} value={form.organisation} onChange={set("organisation")} />
              <select className={field} value={form.service} onChange={set("service")} aria-label="Service">
                <option value="">Service *</option>
                <option>Public Speaking</option><option>Product Launch Event</option><option>Corporate Event</option><option>Panel Moderation</option><option>MC / Host</option><option>Other</option>
              </select>
              <input type="date" aria-label="Event date" className={field} value={form.event_date} onChange={set("event_date")} />
              <input placeholder="Event location" className={`${field} md:col-span-2`} value={form.location} onChange={set("location")} />
              <textarea rows={5} placeholder="Tell us about your event *" className={`${field} md:col-span-2`} value={form.message} onChange={set("message")} />
              {error && <p className="text-sm text-destructive md:col-span-2">{error}</p>}
              <button disabled={status === "sending"} className="btn-pill justify-self-start bg-primary text-primary-foreground hover:bg-bronze disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send request →"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </main>
  );
}
