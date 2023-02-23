import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { Category } from 'src/app/models/category';
import { Recipe } from 'src/app/models/recipe';

class CategoryFilter {
  filterCategory: Category;
  filterIsChecked: boolean;
  constructor(category: Category, isChecked: boolean) {
    this.filterCategory = category;
    this.filterIsChecked = isChecked;
  }
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
    this.recipeService.getAllRecipes().subscribe(recipes => this.recipes = recipes);
    this.categoryService.getCategories().subscribe(categories => this.categoryFilters = categories.map(category => new CategoryFilter(category, false)));
  }

  searchAndFilter(): void {
    const checkedCategories = this.categoryFilters.filter(cf => cf.filterIsChecked).map(cf => cf.filterCategory.key)
    this.recipeService.getMatchingRecipes(this.recipeSearchTerm, checkedCategories).subscribe(recipes => this.recipes = recipes);
  }
}
