import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class BookServiceService {

  public Books:Book[]
  private url:string
  public id_user:number

  constructor(private http:HttpClient, private userService:UserService) { 

    this.id_user = this.userService.getIdUserLogging()

  }
  
  getBookByUser() {
    this.url = `http://localhost:4000/books?id_user=${this.id_user}`
    return this.http.get(this.url)
  }

  getBookDataByIdUser(id_book:number) {
    this.url = `http://localhost:4000/books?id_user=${this.id_user}&id_book=${id_book}`
    return this.http.get(this.url)
  }

  addNewBookToUser(book:Book) {
    this.url = `http://localhost:4000/books`
    return this.http.post(this.url, book)
  }

  deleteBook(id_book:number) {
    this.url = `http://localhost:4000/books`
    return this.http.delete(this.url, {body:{id_book:id_book}} )
  }

}
