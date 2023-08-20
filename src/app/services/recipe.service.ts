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

  getMatchingRecipes(searchTerm: string, categoryIds: number[]): Observable<Recipe[]> {
    if (searchTerm === '' && categoryIds.length === 0) {
      return this.getAllRecipes();
    } else {
      const localeLowerCaseSearchTerm = searchTerm?.toLocaleLowerCase() ?? '';
      return of(
        this.recipes.filter(recipe => {
          return (
            localeLowerCaseSearchTerm.length === 0 ||
            recipe.name.toLocaleLowerCase().includes(localeLowerCaseSearchTerm)
          ) && (
            categoryIds == null ||
            categoryIds.length === 0 ||
            categoryIds.includes(recipe.categoryId)
          )
        })
      );
    }
  }

  getRecipe = (id: number): Observable<Recipe> => of(this.recipes.filter(recipe => recipe.id === id)[0]);
}