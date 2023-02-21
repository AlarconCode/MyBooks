import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"", component: RegisterComponent},
  {path:"home", component: RegisterComponent},
  {path:"registro", component: RegisterComponent},
  {path:"perfil", component: PerfilComponent},
  {path:"books", component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
