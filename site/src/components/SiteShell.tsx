import type { PropsWithChildren, ReactNode } from "react";

const repoUrl = "https://github.com/chibataku0815/motion-recipes-remotion";

export const withBase = (pathname = "") => {
  const trimmed = pathname.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL;
  return trimmed ? `${base}${trimmed}` : base;
};

type SiteShellProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  summary: string;
  actions?: ReactNode;
}>;

export const SiteShell = ({
  eyebrow,
  title,
  summary,
  actions,
  children,
}: SiteShellProps) => {
  return (
    <div className="site-shell">
      <div className="site-grid" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href={withBase()}>
          Motion Recipes
        </a>
        <nav className="topbar-links" aria-label="Global">
          <a href={withBase()}>Gallery</a>
          <a href={repoUrl}>GitHub</a>
        </nav>
      </header>
      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="hero-summary">{summary}</p>
            {actions ? <div className="hero-actions">{actions}</div> : null}
          </div>
        </section>
        {children}
      </main>
      <footer className="footer">
        <p>Short motion techniques translated into Remotion.</p>
        <div className="footer-links">
          <a href={repoUrl}>Open repository</a>
          <a href={`${repoUrl}/tree/main/docs/recipes`}>Technical docs</a>
        </div>
      </footer>
    </div>
  );
};
