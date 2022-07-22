import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CadastroprodutoComponent } from './cadastroproduto/cadastroproduto.component';
import { ListaprodutoComponent } from './listaproduto/listaproduto.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastroproduto', component:     CadastroprodutoComponent },
  { path: 'listaproduto', component: ListaprodutoComponent },
  { path: '', redirectTo: 'main-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
