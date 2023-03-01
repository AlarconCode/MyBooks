import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string
  public logging:boolean

  constructor(private http:HttpClient) { 

    this.url = 'http://localhost:4000'
    this.logging = false

  }

  register(user:Usuario) {

    return this.http.post(this.url + '/registro', user)

  }

  login(user:Usuario) {

    return this.http.post(this.url + '/login', user)

  }

}
