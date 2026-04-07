import { RecipeDetailPage } from "./components/RecipeDetailPage";
import { recipeBySlug } from "./data/recipes";
import { renderPage } from "./render-page";

renderPage(<RecipeDetailPage recipe={recipeBySlug["echo-text-train"]} />);
