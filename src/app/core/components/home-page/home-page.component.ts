import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  book!: Book

  pageType = 'homePage'

  constructor(private booksService: BooksService) { }

  getRandomBook() {
    this.booksService.getBooks().subscribe((books: Book[]) => {
      const jsonObj: Array<any> = books
      const randIndex: number = Math.floor(Math.random() * jsonObj.length)
      const randBook: Book = books[randIndex]
      this.book = randBook
      console.log(this.book)
    })
  }

  ngOnInit(): void {
    this.getRandomBook()
  }

}
