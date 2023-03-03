import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string
  public logging:boolean
  public userLogging:Usuario

  constructor(private http:HttpClient) { 

    this.url = 'http://localhost:4000'
    this.logging = false
    this.userLogging = null

  }

  register(user:Usuario) {

    return this.http.post(this.url + '/registro', user)

  }

  login(user:Usuario) {

    return this.http.post(this.url + '/login', user)

  }

  setUserLogging(user:Usuario) {
    this.userLogging = user 
  }

  getUserLogging() {
    return this.userLogging
  }

  getLogging() {
    return this.logging
  }

  getIdUserLogging() {
    return this.userLogging.id_user
  }



}
