import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  public Books:Book[]
  constructor() { }

  getAll():Book[] {
    return this.Books
  }

  getOne(id_book:number):Book {
    let theBook = this.Books.find(book => book.id_book === id_book)
    return theBook
  }

  add(book:Book):void {
    this.Books.push(book)
  }

  delete(id_book:number):boolean {
    
    let bookIndex = this.Books.findIndex(book => book.id_book === id_book)
    let boolean = this.Books.splice(bookIndex, 1)
    if (boolean != null) {
      return true
    } else {
      return false
    }
  }



}
