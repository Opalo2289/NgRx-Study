import { Component, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
 
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/book.actions';
import { GoogleBooksService } from './book-list/GoogleBooks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
 
  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
 
  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
 
  constructor(private  GoogleBooksService: GoogleBooksService, private store: Store) {}
 
  ngOnInit() {
    this.GoogleBooksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}
