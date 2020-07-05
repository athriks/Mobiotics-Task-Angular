import { Component, OnInit } from '@angular/core';
import {Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
UserName : string;

  constructor(private router:Router) {
    this.router.navigate(['Home/Product'])
this.UserName = sessionStorage.getItem("key")
   }
   navToCart=()=>{
     this.router.navigate(["Home/Cart"])
   }
   Prod =()=>{
    this.router.navigate(['Home/Product'])   }
  ngOnInit() {
  }
  Logout=()=>{
    sessionStorage.removeItem("key")
    this.router.navigate(["Login"])
  }

}
