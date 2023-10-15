import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, distinctUntilChanged, switchMap, of } from 'rxjs';

import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { Category } from 'src/app/models/category';
import { Recipe } from 'src/app/models/recipe';

interface SelectableCategory extends Category {
  selected: boolean;
}

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  showFilters: boolean = false;

  searchTerms: BehaviorSubject<string> = new BehaviorSubject<string>('');
  categoryIdSelections: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  categories$: Observable<Category[]> | undefined;
  categoryFilters$: Observable<SelectableCategory[]> | undefined;
  recipes$: Observable<Recipe[]> | undefined;

  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {

    this.categories$ = this.categoryService.getAll();

    this.categoryFilters$ = combineLatest([this.categories$, this.categoryIdSelections])
      .pipe(switchMap(([categories$, categoryIdSelection]) => of(
        categories$.map(category => {
          const selectableCategory: SelectableCategory = {
            id: category.id,
            name: category.name,
            selected: categoryIdSelection.includes(category.id)
          };
          return selectableCategory;
        })
      )));

    this.recipes$ = combineLatest([this.searchTerms, this.categoryIdSelections])
      .pipe(
        distinctUntilChanged(),
        switchMap(([searchTerm, categoryIdSelection]) => this.recipeService.getByQuery(searchTerm, categoryIdSelection))
      );

  }

  onSearchTermChange(searchTerm: string): void {
    this.searchTerms.next(searchTerm);
  }

  onCategorySelectionChange(categoryIdToToggle: number): void {
    const categorySelection = this.categoryIdSelections.getValue();
    const categorySelectionIndexToToggle = categorySelection.indexOf(categoryIdToToggle);
    if (categorySelectionIndexToToggle === -1) {
      categorySelection.push(categoryIdToToggle);
    } else {
      categorySelection.splice(categorySelectionIndexToToggle, 1);
    }
    this.categoryIdSelections.next(categorySelection);
  }

}
