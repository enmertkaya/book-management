import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {Observable} from 'rxjs';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books$: Observable<Book[]>;
  
  constructor(private store: Store<AppState>){
    this.books$ = store.pipe(select('book'));
  }

  addBook(id: string, title:string, author:string){
    this.store.dispatch(AddBook({id,title,author}));
  }
    
  resetFields(bookId: HTMLInputElement, bookTitle: HTMLInputElement, bookAuthor: HTMLInputElement) {
    bookId.value = '';
    bookTitle.value = '';
    bookAuthor.value = '';
  }

  removeBook(bookId: string){
    this.store.dispatch(RemoveBook({bookId}));
  }

}
