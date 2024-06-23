import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { RecipeSearchPage } from './pages/recipes/RecipeSearchPage';
import { RecipePage } from './pages/recipes/RecipePage';
import { RecipeFormPage } from './pages/recipes/RecipeFormPage';
import { AboutPage } from './pages/AboutPage';
import { CookbookRepository } from './data/cookbook-repository';
import { RecipeUseCases } from './use-cases/recipe-use-cases';

export function App() {
  const recipeUseCases: RecipeUseCases = new RecipeUseCases(CookbookRepository.loadFromJson());
  const router = createBrowserRouter([
    { path: "/", element: <RecipeSearchPage recipeUseCases={recipeUseCases} /> },
    { path: "recipes", element: <RecipeSearchPage recipeUseCases={recipeUseCases} /> },
    { path: "recipes/add", element: <RecipeFormPage recipeUseCases={recipeUseCases} /> },
    { path: "recipes/:id", element: <RecipePage recipeUseCases={recipeUseCases} /> },
    { path: "about", element: <AboutPage /> }
  ]);
  return <RouterProvider router={router} />;
}
