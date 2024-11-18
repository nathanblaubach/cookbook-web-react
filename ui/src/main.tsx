import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';
import {JsonRecipeRepository} from './features/recipes/adapters/repository/json-recipe-repository.ts';
import {AboutPage} from './pages/AboutPage.tsx';
import {RecipeFormPage} from './pages/recipes/RecipeFormPage.tsx';
import {RecipePage} from './pages/recipes/RecipePage.tsx';
import {RecipeSearchPage} from './pages/recipes/RecipeSearchPage.tsx';
import {RecipeUseCases} from './features/recipes/recipe-use-cases.ts';
import {FileJsonRecipeReader} from './infrastructure/file-json-recipe-reader.ts';

const recipeRepository: JsonRecipeRepository = new JsonRecipeRepository(new FileJsonRecipeReader());
const recipeUseCases: RecipeUseCases = new RecipeUseCases(recipeRepository);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={createBrowserRouter([
            {path: "/", element: <RecipeSearchPage recipeUseCases={recipeUseCases}/>},
            {path: "recipes", element: <RecipeSearchPage recipeUseCases={recipeUseCases}/>},
            {path: "recipes/add", element: <RecipeFormPage recipeRepository={recipeRepository}/>},
            {path: "recipes/:id", element: <RecipePage recipeRepository={recipeRepository}/>},
            {path: "about", element: <AboutPage/>}
        ])}/>
    </React.StrictMode>
);
