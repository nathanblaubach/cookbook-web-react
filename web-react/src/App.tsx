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

const repository: CookbookRepository = CookbookRepository.loadFromJson();

const router = createBrowserRouter([
  { path: "/", element: <Search repository={repository} /> },
  { path: "recipes", element: <Search repository={repository} /> },
  { path: "recipes/add", element: <AddRecipe repository={repository} /> },
  { path: "recipes/:id", element: <ViewRecipe repository={repository} /> },
  { path: "about", element: <About /> }
])

export const App = () => (<RouterProvider router={router} />);
