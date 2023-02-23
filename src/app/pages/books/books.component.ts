import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookServiceService } from 'src/app/shared/book-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  public anyBook:Book
  public arrayBooks:Book[]
  

  constructor (public BooksService: BookServiceService) {

    this.anyBook = new Book()    

    this.arrayBooks = this.generateArrayBooks(100)

    this.BooksService.Books = this.generateArrayBooksService(100)

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

  // Usando un service

  generateArrayBooksService(count:number):Book[] {
    let newArr:Book[] = []
    let i:number = 0
    while (i < count) {
      newArr.push(new Book())
      i++
    }

    return newArr

  }

  searchById(searchById:HTMLInputElement) {
    console.log(searchById.value);
    
    if (searchById.value === '') {
      this.BooksService.Books = this.arrayBooks
    } else {
      let found = this.BooksService.Books.filter(book => book.id_book === parseInt(searchById.value))
      this.BooksService.Books = found
      return found
    }
    
  }

  deleteCard(id_book) {
    if (confirm('¿Esta seguro de eliminarlo?')) {
      this.BooksService.delete(id_book)
    }
  }



  
  
}

