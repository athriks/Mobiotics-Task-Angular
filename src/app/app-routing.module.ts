import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component'  ;
import {LoginComponent} from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {SecurityGuard}    from "./security.guard"            
import { ProductComponent } from './home/product/product.component';
import { CartComponent } from './home/cart/cart.component';
import {PaymentComponent} from "./home/payment/payment.component"
const routes: Routes = [
  {
    path : "Login" , component:LoginComponent
  },
  {
    path : "Register" , component:RegisterComponent
  },
  {
    path : "Home" , component:HomeComponent,
    children :[{
      path : "Product" , component:ProductComponent
    },
  {
      path :  "Cart" , component:CartComponent
  },
  {
    path: "Payment" , component:PaymentComponent
  }
] ,
  canActivate:[SecurityGuard]
  },
  {
    path : "**" , redirectTo:"Login"
  },
  
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
