import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Book } from '../books-model';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    
  }


  

}
