import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from 'src/app/pages/about/about.component';
import { RecipeSearchComponent } from 'src/app/pages/recipe-search/recipe-search.component';
import { RecipeDetailComponent } from 'src/app/pages/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'index', component: RecipeSearchComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
