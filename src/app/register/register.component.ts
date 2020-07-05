import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , FormControl , Validators} from "@angular/forms"
import {User} from "./user"
import {Router} from "@angular/router";
import{ConfirmPass} from'./validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user :User;
edata:any;
  constructor( private router : Router , private builder : FormBuilder)  {
    this.user = new User()
   }
   regform = this.builder.group({
    UserName :['',[Validators.required, Validators.minLength(6)]],
    Email :['',[]],
    MobileNumber :['',[Validators.required, Validators.minLength(10)]],
    Password :['' ,Validators.minLength(5)],
    confirmPassword :['',Validators.minLength(5)],
   },{
     validator: ConfirmPass
   })



  Signup=()=>{
    console.log(this.user)
  localStorage.setItem(this.user.Email,JSON.stringify(this.user))
  // this.PostDataToService(this.user)
  this.router.navigate(['Login'])
    }

  ngOnInit() {
  }

}
