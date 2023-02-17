import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent  {

  public myUser:Usuario
  public myClass:string
  public message:string

  constructor() {
    
    this.myUser = new Usuario( 1, 'Raquel', 'Sánchez', 'raquel@email.com', 'www.rachel.es')
    this.myClass = 'noShow'
    this.message = ''

  }


  showName() {
    console.log(this.myUser.name);
    
  }

  changeData(
    newData1:HTMLInputElement, newData2:HTMLInputElement, newData3:HTMLInputElement, newData4:HTMLInputElement) 
  
  {
    
    
    if (newData1.value) this.myUser.name = newData1.value
    if (newData2.value) this.myUser.surname = newData2.value
    if (newData3.value) this.myUser.email = newData3.value
    if (newData4.value) this.myUser.url = newData4.value

    if (newData1.value || newData2.value || newData3.value || newData4.value) {
      this.myClass = 'showGreen'
      this.message = 'Usuario actualizado'
    }
    if (!newData1.value && !newData2.value && !newData3.value && !newData4.value) {
      this.myClass = 'showRed'
      this.message = 'No se han detectado cambios'
    }
  
    
  }

  cleanForm(newData1:HTMLInputElement, newData2:HTMLInputElement, newData3:HTMLInputElement, newData4:HTMLInputElement) {

    newData1.value = ''
    newData2.value = ''
    newData3.value = ''
    newData4.value = ''
    this.myClass = 'noShow'


  }


}
