import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Clement Manyathela" },
      { name: "description", content: "Bookings and enquiries for Clement Manyathela." },
      { property: "og:title", content: "Contact Clement Manyathela" },
      { property: "og:description", content: "Bookings, interviews and collaborations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const field = "w-full border-0 border-b border-border bg-transparent py-3 outline-none focus:border-bronze";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const mailto = `mailto:bookings@example.com?subject=${encodeURIComponent("Enquiry from " + form.name)}&body=${encodeURIComponent(form.message + "\n\n" + form.email)}`;
  return (
    <main className="px-6 pb-24 pt-36">
      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
        <div>
          <p className="eyebrow text-bronze">Bookings</p>
          <h1 className="mt-4 text-6xl md:text-7xl">Let's talk<span className="text-bronze">.</span></h1>
          <p className="mt-6 max-w-sm text-muted-foreground">Interviews, hosting, speaking and collaborations.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }} className="space-y-6">
          <input required placeholder="Name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea required rows={5} placeholder="Message" className={field} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="eyebrow rounded-full bg-primary px-8 py-3 text-primary-foreground">Send</button>
        </form>
      </div>
    </main>
  );
}
