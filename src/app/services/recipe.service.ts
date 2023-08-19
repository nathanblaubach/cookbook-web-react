import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Recipe } from 'src/app/models/recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[];

  constructor() {
    this.recipes = require("./recipes.json");
  }

  getAllRecipes = (): Observable<Recipe[]> => of(this.recipes);

  getMatchingRecipes = (recipeSearchTerm: string, activeCategories: number[]): Observable<Recipe[]> => of(
    this.recipes.filter(recipe => activeCategories.length === 0 || activeCategories.includes(recipe.categoryId))
                .filter(recipe => recipe.name.toUpperCase().includes(recipeSearchTerm.toUpperCase()))
  );

  getRecipe = (id: number): Observable<Recipe> => of(this.recipes.filter(recipe => recipe.id === id)[0]);
}
