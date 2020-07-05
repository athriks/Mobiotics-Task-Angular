import { Component, OnInit } from '@angular/core';
import {User} from "../register/user";
import {Router } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user : User;
invalid : boolean = false
  constructor(private router:Router) {
    this.user = new User()
   }
login = ()=>{
  let a  = JSON.parse(localStorage.getItem(this.user.Email))
  if(a!=null){
    if(this.user.Email == a.Email && this.user.Password == a.Password){
      this.router.navigate(["/Home"])
      sessionStorage.setItem("key",a.UserName)
    }
    else{
      this.invalid =true
    }
  }
  else{
    this.invalid = true
  }
}

  



  ngOnInit() {
  }

}
