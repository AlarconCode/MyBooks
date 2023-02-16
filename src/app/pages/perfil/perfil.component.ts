import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public myUser:Usuario

  constructor() {
    this.myUser = new Usuario( 1, 'Raquel', 'Sánchez', 'raquel@email.com', 'www.rachel.es')
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showName() {
    console.log(this.myUser.name);
    
  }

  changeData(
    newData1:HTMLInputElement, newData2:HTMLInputElement, newData3:HTMLInputElement, newData4:HTMLInputElement) 
  
  {
    console.log(newData1.value);
    this.myUser.name = newData1.value
    this.myUser.surname = newData2.value
    this.myUser.email = newData3.value
    this.myUser.url = newData4.value
    
  }


}
