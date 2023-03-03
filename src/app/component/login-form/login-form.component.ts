import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { BookServiceService } from 'src/app/shared/book-service.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public user:Usuario
  constructor(public userService:UserService, public router:Router) {}
  
  public userLogin(email:string, password:string) {
    
    this.userService.login(new Usuario(0, '', '', email, '', password))
    .subscribe((data:any) => {
      
      if (data.result == 'Los datos no existen') {
        
        console.log(data.result);

      } else {

        this.userService.logging = true
        this.user = data.result[0]       
        this.userService.setUserLogging(this.user)                    
        this.router.navigateByUrl('/books')
     
      }
      
    })

  }

}
