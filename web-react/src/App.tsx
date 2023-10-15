import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css'

import Search     from './pages/Search';
import ViewRecipe from './pages/recipes/ViewRecipe';
import AddRecipe  from './pages/recipes/AddRecipe';
import About      from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "recipes",
    element: <Search />,
  },
  {
    path: "recipes/add",
    element: <AddRecipe />,
  },
  {
    path: "recipes/:id",
    element: <ViewRecipe />,
  },
  {
    path: "about",
    element: <About />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
