import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "src/app/item.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data :any=[];
  amount=0;
    constructor(private router:Router,private service2 :ItemService) { 
      
    }
  
  pay =()=>{
   this.service2.amt= this.amount;
    this.router.navigate(["Home/Payment"])
    
  
  }
  remove=(item)=>{
    let index = this.data.indexOf(item)
  this.data.splice(index,1)
  this.service2.Cartcount--;
  this.calc();
  }
    ngOnInit() {
      this.data=this.service2.Cartitems
      console.log(this.data)
      this.calc();
      
    }
    //to calculate amount
    calc=()=>{
      this.amount= 0;
      this.service2.Cartitems.forEach((items)=>
      this.amount +=  items.Quantity * items.Price ) 
    }
  
     add=(ptr)=>{
  
      if(ptr.Quantity >=1){
        ptr.Quantity++;
      }
   this.calc();
     }
  
        minus=(ptr)=>{
        if(ptr.Quantity <= 1){
          ptr.Quantity = 1;
        }
        else{
          ptr.Quantity--;
        }
        this.calc();
      }
}
