import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  
  @Input()
  pageType!: string

  @Input()
  book!: Book

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
  }

}
