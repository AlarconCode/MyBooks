import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import {faker} from '@faker-js/faker';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  public anyBook:Book
  public arrayBooks:Book[]

  constructor () {

    this.anyBook = new Book()    

    this.arrayBooks = this.generateArrayBooks(100)

  }

  generateArrayBooks(count:number):Book[] {
    let newArr:Book[] = []
    let i:number = 0
    while (i < count) {
      newArr.push(new Book())
      i++
    }

    return newArr

  }

  addNewBook(id_book:HTMLInputElement, title:HTMLInputElement, author:HTMLInputElement, description:HTMLInputElement, price:HTMLInputElement, photo:HTMLInputElement) 
  {
    
    let newBook:Book = {
      id_book: parseInt(id_book.value),
      title: title.value,
      author: author.value,
      description: description.value,
      price: price.value,
      photo: photo.value
    }

    this.arrayBooks.unshift(newBook)


  }

  
  
}

