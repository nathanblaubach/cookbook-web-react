import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];

  constructor() {
    this.categories = require("./categories.json");
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}
