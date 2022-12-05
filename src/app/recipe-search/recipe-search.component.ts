import { Component } from '@angular/core';
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
export class RecipeSearchComponent {

  private recipeSearchTerms = new Subject<string>();
  recipes$!: Observable<Recipe[]>;

  showFilters: boolean;
  categoryFilters: CategoryFilter[] = [];

  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService
  ) { 
    this.showFilters = false;
    this.categoryService.getCategories().subscribe(
      categories => this.categoryFilters = categories.map((category) => {
        return {
          filterCategory: category,
          filterIsChecked: true
        }
      })
    );
  }

  search(term: string): void {
    this.recipeSearchTerms.next(term);
  }

  ngOnInit(): void {
    this.recipes$ = this.recipeSearchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.recipeService.getMatchingRecipes(term, this.categoryFilters.filter(cf => cf.filterIsChecked).map(cf => cf.filterCategory.key))),
    );
  }
}
