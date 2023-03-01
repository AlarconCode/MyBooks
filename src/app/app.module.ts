import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './pages/books/books.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './component/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationFormComponent,
    RegisterComponent,
    PerfilComponent,
    BooksComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
