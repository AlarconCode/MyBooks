import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookServiceService } from 'src/app/shared/book-service.service';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  public anyBook:Book
  public arrayBooks:Book[]
  

  constructor (public BooksService: BookServiceService, private userService:UserService) {

   this.arrayBooks = []
   this.showBooksUserLogging()

  }

  showBooksUserLogging() {

    this.BooksService.getBookByUser()
    .subscribe((res:any) => {
      this.arrayBooks = res.result      
    })

  }

  addNewBook(title:string, author:string, price:string, photo:string) 
  {
    


    this.BooksService.addNewBookToUser(new Book(0,this.userService.getIdUserLogging(),title, author, price, photo))
    .subscribe(
      (res:any) => {
        console.log(res);
        
        Swal.fire(`El libro ${title} ha sido guardado con id ${res.result.insertId}`)

        this.arrayBooks.push(new Book(res.result.insertId,this.userService.getIdUserLogging(),title, author, price, photo))
      }
    )

  }

  searchById(id_book:number) {
        
    this.BooksService.getBookDataByIdUser(id_book)
    .subscribe(
      (res:any) => {
        this.arrayBooks = res.result
      }
    )

  }

  deleteCard(id_book:number) {
    if (confirm('¿Esta seguro de eliminarlo?')) {
      this.BooksService.deleteBook(id_book)
      .subscribe(
        (res:any) => {
          console.log(res);
          let index = id_book--
          console.log(id_book);
          
          this.arrayBooks.splice(index, 1 )
          Swal.fire(`El libro con id ${id_book} ha sido eliminado con éxito`)


        }
        
      )
    }
  }



  
  
}

