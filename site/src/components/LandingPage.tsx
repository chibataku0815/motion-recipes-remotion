import { recipes } from "../data/recipes";
import { SiteShell, withBase } from "./SiteShell";

export const LandingPage = () => {
  return (
    <SiteShell
      eyebrow="GitHub Pages Gallery"
      title="Motion studies that stay readable."
      summary="Gallery-first previews for short motion techniques translated into Remotion. Browse the motion first, then drop into code and technical notes only when you need depth."
      actions={
        <>
          <a className="button" href="https://github.com/chibataku0815/motion-recipes-remotion">
            Open repository
          </a>
          <a className="button-secondary" href="https://github.com/chibataku0815/motion-recipes-remotion/tree/main/docs/recipes">
            Read technical docs
          </a>
        </>
      }
    >
      <section className="section">
        <div className="section-header">
          <div>
            <h2>Recipes</h2>
            <p className="lede">
              Still-first cards keep the index scannable. Each recipe detail page
              carries the main video, stills, parameter list, and direct GitHub links.
            </p>
          </div>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <a
              key={recipe.slug}
              className="recipe-card"
              href={withBase(`recipes/${recipe.slug}/`)}
            >
              <img
                alt={`${recipe.title} still`}
                src={withBase(recipe.stillPaths[1] ?? recipe.stillPaths[0])}
              />
              <div className="card-body">
                <div className="card-topline">
                  <span className="status-pill">{recipe.status}</span>
                  <span>{recipe.slug}</span>
                </div>
                <h3>{recipe.title}</h3>
                <p>{recipe.tagline}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="insight-grid">
          <article className="insight-panel">
            <h3>Why this exists</h3>
            <p className="body-copy">
              This repo is not a template dump. Each study isolates one motion
              idea, one rendering choice, and one set of reusable parameters.
            </p>
          </article>
          <article className="insight-panel">
            <h3>What stays in the repo</h3>
            <p className="body-copy">
              Full code, technical docs, and rendered previews stay in GitHub.
              The site exists to make the browsing experience legible.
            </p>
          </article>
          <article className="insight-panel">
            <h3>What stays out</h3>
            <p className="body-copy">
              No source-frame comparison boards, no original project files, and
              no redistribution of proprietary assets from source tutorials.
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
};
