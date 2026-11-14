import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border/60 bg-card/85 px-6 py-3 backdrop-blur">
        <Link to="/" className="font-display text-lg">
          Clement<span className="text-bronze">.</span>
        </Link>
        <ul className="flex gap-5 text-sm">
          {nav.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                activeOptions={{ exact: true }}
                className="text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
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
    <footer className="border-t border-bronze/60 bg-background">
      <div className="eyebrow flex flex-wrap items-center justify-center gap-6 py-6 text-foreground">
        <span>Voice.</span><span className="text-bronze">✦</span>
        <span>Truth.</span><span className="text-bronze">✦</span>
        <span>Conversation.</span>
      </div>
      <p className="pb-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Clement Manyathela</p>
    </footer>
  );
}
