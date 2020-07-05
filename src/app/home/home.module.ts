import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule}  from '@angular/material/grid-list';
import {MatCardModule} from "@angular/material/card";
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule
  } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ProductComponent, CartComponent, PaymentComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule

  ],
  exports:[HomeComponent]
})
export class HomeModule { }
