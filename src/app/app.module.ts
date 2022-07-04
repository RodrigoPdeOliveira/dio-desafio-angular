import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { BooksListComponent } from './core/components/books-list/books-list.component';
import { BookCardComponent } from './core/components/book-card/book-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BookInfoComponent } from './core/components/book-info/book-info.component';
import { SliceWordsPipe } from './shared/pipes/slice-words.pipe';
import { HomePageComponent } from './core/components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BooksListComponent,
    BookCardComponent,
    BookInfoComponent,
    SliceWordsPipe,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
