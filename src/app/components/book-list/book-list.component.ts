import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service/book-service.service';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookServiceService) { }

  ngOnInit() {
    this.bookService.getAllBooksByGenre()
        .subscribe(allBooks => {
          this.books = allBooks.books;
          console.log(allBooks);
      }, e=> console.log(e));
    }
}
