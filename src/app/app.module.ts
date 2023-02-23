import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RecipeSearchComponent } from 'src/app/pages/recipe-search/recipe-search.component';
import { RecipeDetailComponent } from 'src/app/pages/recipe-detail/recipe-detail.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { NotecardComponent } from 'src/app/components/notecard/notecard.component';
import { NotecardRowComponent } from 'src/app/components/notecard-row/notecard-row.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    RecipeDetailComponent,
    AboutComponent,
    NotecardComponent,
    NotecardRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
