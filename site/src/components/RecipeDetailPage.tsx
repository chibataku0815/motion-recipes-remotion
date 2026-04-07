import type { RecipePageData } from "../data/recipes";
import { SiteShell, withBase } from "./SiteShell";

type RecipeDetailPageProps = {
  recipe: RecipePageData;
};

export const RecipeDetailPage = ({ recipe }: RecipeDetailPageProps) => {
  return (
    <SiteShell
      eyebrow="Recipe Detail"
      title={recipe.title}
      summary={recipe.summary}
      actions={
        <>
          <a className="button" href={recipe.githubCodeUrl}>
            View code on GitHub
          </a>
          <a className="button-secondary" href={recipe.githubDocUrl}>
            Read technical doc
          </a>
          <a className="button-ghost" href={withBase()}>
            Back to gallery
          </a>
        </>
      }
    >
      <section className="section split-grid">
        <div className="video-shell">
          <video
            controls
            playsInline
            preload="metadata"
            poster={withBase(recipe.stillPaths[0])}
          >
            <source src={withBase(recipe.previewVideoPath)} type="video/mp4" />
          </video>
        </div>
        <aside className="detail-panel">
          <div className="detail-meta">
            <span className="status-pill">{recipe.status}</span>
            <span>{recipe.tagline}</span>
          </div>
          <h3>Technique summary</h3>
          <p className="detail-copy">{recipe.technique}</p>
          <ul className="mono-list" aria-label="Parameters to tweak">
            {recipe.parameters.map((parameter) => (
              <li key={parameter}>{parameter}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="section">
        <div className="meta-grid">
          <article className="insight-panel">
            <h3>Core primitives</h3>
            <ul>
              {recipe.corePrimitives.map((primitive) => (
                <li key={primitive}>{primitive}</li>
              ))}
            </ul>
          </article>
          <article className="insight-panel">
            <h3>What differs from the source inspiration</h3>
            <p className="body-copy">{recipe.inspiration.note}</p>
          </article>
          <article className="insight-panel">
            <h3>Links</h3>
            <div className="section-actions">
              <a className="text-link" href={recipe.githubCodeUrl}>
                View code on GitHub
              </a>
              <a className="text-link" href={recipe.githubDocUrl}>
                Read technical doc
              </a>
              <a
                className="text-link"
                href="https://github.com/chibataku0815/motion-recipes-remotion"
              >
                Open repository
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2>Still gallery</h2>
            <p className="lede">
              The landing page stays still-first for scanability, while this page
              keeps the main video and supporting frames together.
            </p>
          </div>
        </div>
        <div className="still-grid">
          {recipe.stillPaths.map((stillPath) => (
            <figure key={stillPath} className="still-tile">
              <img alt={`${recipe.title} still`} src={withBase(stillPath)} />
            </figure>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="insight-panel">
          <h3>Inspiration</h3>
          <p className="body-copy">{recipe.inspiration.label}</p>
          {recipe.inspiration.url ? (
            <p className="body-copy">
              <a className="text-link" href={recipe.inspiration.url}>
                Open referenced source
              </a>
            </p>
          ) : null}
        </div>
      </section>
    </SiteShell>
  );
};
