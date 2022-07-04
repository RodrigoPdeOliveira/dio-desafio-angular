import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  pageType = 'listPage'

  books!: Book[]

  constructor(private booksService: BooksService) { }

  getBooks() {
    this.booksService.getBooks().subscribe((books: Book[]) => {
      this.books = books
    })
  }

  ngOnInit(): void {
    this.getBooks()
  }

}
