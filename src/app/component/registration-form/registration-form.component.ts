import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  public user:Usuario
  public regForm:FormGroup

  constructor(private userService: UserService, private fb:FormBuilder) {

    this.buildForm()

  }

  userRegister() {

    console.log(this.regForm.value);
    this.user = this.regForm.value
    

    this.userService.register(this.user)
    .subscribe((data:any) => {

      console.log(data);
      
    })

  }

  private buildForm() {

    this.regForm = this.fb.group({
      name: [, Validators.required],
      surname: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      photo: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(8)]]
    })

  }

}
