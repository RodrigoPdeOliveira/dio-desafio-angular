import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css'],
})
export class BookInfoComponent implements OnInit {

  pageType = 'infoPage'

  book!: Book;

  constructor(private booksService: BooksService, private router: Router) {}

  getBookById() {
    this.booksService.getBooks().subscribe((books: Book[]) => {
      const id = this.getId();
      for (let book of books) {
        if (book.isbn == id) {
          this.book = book;
        }
      }
    });
  }

  getId() {
    const url = this.router.url;
    const splitUrl = url.split('/');
    const id = splitUrl[splitUrl.length - 1];
    return id;
  }

  ngOnInit(): void {
    this.getBookById();
  }
}
