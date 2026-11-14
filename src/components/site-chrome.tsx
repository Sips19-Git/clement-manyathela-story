import { Link } from "@tanstack/react-router";
import { tagline } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { siFacebook, siInstagram, siX, siYoutube, siTiktok, siThreads } from "simple-icons";
import { Linkedin } from "lucide-react";

const socials = [siFacebook, siInstagram, siX, siYoutube, siTiktok, siThreads];

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Experience" },
  { to: "/contact", label: "Book Clement" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-2 top-4 z-50 sm:inset-x-3 lg:inset-x-4">
      <nav className="grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-full border border-border/60 bg-card/85 px-3 py-3 shadow-lg backdrop-blur transition-shadow sm:flex sm:justify-between sm:px-6 md:px-10">
        <Link to="/" className="shrink-0 font-display text-lg transition-colors hover:text-bronze">
          Clement<span className="text-bronze">.</span>
        </Link>
        <ul className="flex min-w-0 flex-wrap justify-end gap-x-2 gap-y-1 text-[10px] sm:gap-4 sm:text-sm md:gap-6">
          {nav.map((n) => (
            <li key={n.to}>
              <Link to={n.to} activeOptions={{ exact: true }}
                className="link-underline text-muted-foreground hover:text-foreground data-[status=active]:text-foreground">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-24">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="eyebrow text-bronze">Let's create a moment</p>
            <h2 className="mt-5 text-5xl leading-[0.95] md:text-7xl">Clement<br />Manyathela<span className="text-bronze">.</span></h2>
            <p className="mt-6 max-w-sm text-ink-foreground/70">{tagline}</p>
            <Link to="/contact" className="btn-pill mt-8 bg-bronze text-accent-foreground hover:bg-ink-foreground hover:text-ink">Book Clement →</Link>
          </div>
          <div>
            <p className="eyebrow text-ink-foreground/50">Explore</p>
            <ul className="mt-6 space-y-3 font-display text-2xl">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="link-underline transition-colors hover:text-bronze">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-ink-foreground/50">Services</p>
            <ul className="mt-6 space-y-3 text-lg text-ink-foreground/80">
              <li>Public Speaking</li><li>Product Launch Events</li><li>Corporate Events</li><li>Panel Moderation</li>
            </ul>
            <p className="eyebrow mt-10 text-ink-foreground/50">On air</p>
            <p className="mt-3 text-ink-foreground/80">The Clement Manyathela Show<br />Weekdays · Radio 702</p>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Social media platforms">
              {socials.map((social) => (
                <Button key={social.slug} asChild variant="ghost" size="icon" className="text-ink-foreground hover:bg-ink-foreground/10 hover:text-bronze">
                  <a href={`https://www.${social.slug === "x" ? "x" : social.slug}.com/`} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${social.title}`} title={`Visit ${social.title}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={social.path} /></svg>
                  </a>
                </Button>
              ))}
              <Button asChild variant="ghost" size="icon" className="text-ink-foreground hover:bg-ink-foreground/10 hover:text-bronze">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn" title="Visit LinkedIn"><Linkedin /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-ink-foreground/15 pt-8">
          <div className="eyebrow flex flex-wrap items-center justify-center gap-6 text-ink-foreground">
            <span>Broadcaster.</span><span className="text-bronze">•</span><span>Moderator.</span><span className="text-bronze">•</span><span>MC.</span>
          </div>
          <p className="mt-6 text-center text-xs text-ink-foreground/50">© {new Date().getFullYear()} Clement Manyathela · Johannesburg, South Africa</p>
        </div>
      </div>
    </footer>
  );
}
