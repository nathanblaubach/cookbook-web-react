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

  getAll(): Observable<Recipe[]> {
    console.log("RecipeService.getAll Called");
    return of(this.recipesAll());
  }

  getByQuery(searchTerm: string, categoryIds: number[]): Observable<Recipe[]> {
    console.log("RecipeService.getByQuery Called");
    return of(searchTerm === '' && categoryIds.length === 0
      ? this.recipesAll()
      : this.recipesFiltered(searchTerm?.toLocaleLowerCase() ?? '', categoryIds)
    );
  }

  getById(id: number): Observable<Recipe> {
    console.log("RecipeService.getById Called");
    return of(this.recipe(id));
  }

  // The logic below will be moved to the api when created, and the above functions will call endpoints rather than the above

  private recipesAll = (): Recipe[] => this.recipes;

  private recipesFiltered = (localeLowerCaseSearchTerm: string, categoryIds: number[]): Recipe[] => this.recipes.filter(recipe => {
    return (
      localeLowerCaseSearchTerm.length === 0 ||
      recipe.name.toLocaleLowerCase().includes(localeLowerCaseSearchTerm)
    ) && (
      categoryIds == null ||
      categoryIds.length === 0 ||
      categoryIds.includes(recipe.categoryId)
    );
  });

  private recipe = (id: number): Recipe => this.recipes.filter(recipe => recipe.id === id)[0];
}