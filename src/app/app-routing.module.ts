import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title:'Home'},
  {path:'list',component:ProductListComponent,title:'Product list'},
  { path: 'userlist', component: UserFormComponent, title: 'User List' },
  {path:'product-details/:id',component: ProductDetailsComponent, title:'Product Details'},
  { path:'login', component: LoginComponent, title:'Login'},
  { path:'register', component: RegisterComponent, title:'Register'},
  { path: 'cart/:id', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
