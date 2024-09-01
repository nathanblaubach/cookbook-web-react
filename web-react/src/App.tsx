import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { RecipeSearchPage } from './pages/recipes/RecipeSearchPage';
import { RecipePage } from './pages/recipes/RecipePage';
import { RecipeFormPage } from './pages/recipes/RecipeFormPage';
import { AboutPage } from './pages/AboutPage';
import { RecipeRepository } from './data/recipe-repository';
import { RecipeUseCases } from './use-cases/recipe-use-cases';

export function App() {
  const recipeRepository: RecipeRepository = RecipeRepository.loadFromJson();
  const recipeUseCases: RecipeUseCases = new RecipeUseCases(recipeRepository);
  const router = createBrowserRouter([
    { path: "/", element: <RecipeSearchPage recipeUseCases={recipeUseCases} /> },
    { path: "recipes", element: <RecipeSearchPage recipeUseCases={recipeUseCases} /> },
    { path: "recipes/add", element: <RecipeFormPage recipeRepository={recipeRepository} /> },
    { path: "recipes/:id", element: <RecipePage recipeRepository={recipeRepository} /> },
    { path: "about", element: <AboutPage /> }
  ]);
  return <RouterProvider router={router} />;
}
