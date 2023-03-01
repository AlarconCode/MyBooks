import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  public user:Usuario

  constructor(private userService: UserService) {}

  userRegister(name:string, surname:string, email:string, photo:string) {


    this.userService.register(new Usuario(0, name, surname, email, photo))
    .subscribe((data:any) => {

      console.log(data);
      
    })

  }

}
