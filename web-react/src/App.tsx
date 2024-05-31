import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css'

import { Search } from './pages/Search';
import { ViewRecipe } from './pages/recipes/ViewRecipe';
import { AddRecipe } from './pages/recipes/AddRecipe';
import { About } from './pages/About';
import { CookbookRepository } from './data/cookbook-repository';
import { RecipeUseCases } from './use-cases/recipe-use-cases';

const recipeUseCases: RecipeUseCases = new RecipeUseCases(CookbookRepository.loadFromJson());

const router = createBrowserRouter([
  { path: "/", element: <Search recipeUseCases={recipeUseCases} /> },
  { path: "recipes", element: <Search recipeUseCases={recipeUseCases} /> },
  { path: "recipes/add", element: <AddRecipe recipeUseCases={recipeUseCases} /> },
  { path: "recipes/:id", element: <ViewRecipe recipeUseCases={recipeUseCases} /> },
  { path: "about", element: <About /> }
]);

export function App() {
  return <RouterProvider router={router} />;
}
