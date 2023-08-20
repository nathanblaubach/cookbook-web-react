import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, distinctUntilChanged, switchMap } from 'rxjs';

import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { Category } from 'src/app/models/category';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  // Display data
  categories$: Observable<Category[]> | undefined;
  recipes$: Observable<Recipe[]> | undefined;

  // Filter Controls
  searchTerms = new BehaviorSubject<string>('');
  categorySelections = new BehaviorSubject<number[]>([]);
  combinedFilters = combineLatest([this.searchTerms, this.categorySelections]);
  showFilters: boolean = false; // This needs to be done in a much better way

  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    this.recipes$ = this.combinedFilters.pipe(
      distinctUntilChanged(),
      switchMap(([searchTerm, categorySelection]) => this.recipeService.getMatchingRecipes(searchTerm, categorySelection))
    );
  }

  onSearchTermChange(searchTerm: string): void {
    this.searchTerms.next(searchTerm);
  }

  onCategorySelectionChange(categoryIdToToggle: number): void {
    const categorySelection = this.categorySelections.getValue();
    const categorySelectionIndexToToggle = categorySelection.indexOf(categoryIdToToggle);
    if (categorySelectionIndexToToggle === -1) {
      categorySelection.push(categoryIdToToggle);
    } else {
      categorySelection.splice(categorySelectionIndexToToggle, 1);
    }
    this.categorySelections.next(categorySelection);
  }

  categoryIsChecked(categoryId: number): boolean {
    return this.categorySelections.getValue().includes(categoryId);
  }

}
