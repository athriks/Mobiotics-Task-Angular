import { Component, OnInit } from '@angular/core';
import {ItemService} from "src/app/item.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  AmountPayble;
  constructor(private  service3 :ItemService , private router :Router) { }

  pay=(amnt) =>{

    window.alert("You Have paid"+ amnt +" succesfully");
    this.router.navigate(["Home/Product"]);
  }

  ngOnInit() {
    this.AmountPayble = this.service3.amt;
  }
 
}
