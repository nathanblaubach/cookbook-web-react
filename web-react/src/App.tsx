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

const repository: CookbookRepository = CookbookRepository.loadFromJson();
const recipeUseCases: RecipeUseCases = new RecipeUseCases(repository);

const router = createBrowserRouter([
  { path: "/", element: <Search recipeUseCases={recipeUseCases} /> },
  { path: "recipes", element: <Search recipeUseCases={recipeUseCases} /> },
  { path: "recipes/add", element: <AddRecipe recipeUseCases={recipeUseCases} /> },
  { path: "recipes/:id", element: <ViewRecipe recipeUseCases={recipeUseCases} /> },
  { path: "about", element: <About /> }
])

export const App = () => (<RouterProvider router={router} />);
