import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public user:Usuario
  constructor(private userService:UserService) {}
  
  public userLogin(email:string) {
    console.log(email);
    
    this.userService.login(new Usuario(0, '', '', email, ''))
    .subscribe((data:any) => {
      
      if (data.result == 'Los datos no existen') {
        
        console.log(data.result);

      } else {

        this.userService.logging = true
        this.user = data.result[0]      

      }   
      

    })

  }

}
