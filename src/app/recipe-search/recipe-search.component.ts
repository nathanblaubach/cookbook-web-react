import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Category } from '../category';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { CategoryService } from '../category.service';

interface CategoryFilter {
  filterCategory: Category,
  filterIsChecked: boolean
}

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  recipeSearchTerm = "";
  recipes: Recipe[] = [];

  showFilters: boolean = false;
  categoryFilters: CategoryFilter[] = [];

  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
    this.categoryService.getCategories().subscribe(
      categories => this.categoryFilters = categories.map((category) => {
        return {
          filterCategory: category,
          filterIsChecked: false
        }
      })
    );
  }

  search(): void {
    const checkedCategories = this.categoryFilters.filter(cf => cf.filterIsChecked).map(cf => cf.filterCategory.key)
    this.recipeService.getMatchingRecipes(this.recipeSearchTerm, checkedCategories).subscribe(recipes => this.recipes = recipes);
  }
}
