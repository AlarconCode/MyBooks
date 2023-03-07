import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public user:Usuario
  public loginForm:FormGroup
  constructor(public userService:UserService, public router:Router, private fb:FormBuilder) {

    this.buildForm()
    
  }
  
  public userLogin() {
    
    this.user = this.loginForm.value    

    this.userService.login(new Usuario(0, '', '', this.user.email, '', this.user.password))
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

  private buildForm() {

    this.loginForm = this.fb.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(8)]]
    })

  }

}
