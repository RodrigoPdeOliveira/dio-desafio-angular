import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from './core/components/book-info/book-info.component';
import { BooksListComponent } from './core/components/books-list/books-list.component';
import { HomePageComponent } from './core/components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'books', component: BooksListComponent},
  { path: 'info/:isbn', component: BookInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
