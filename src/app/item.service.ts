import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
Cartitems:any =[];
Cartcount = 0;
amt ; 
  constructor() { }

  PostDataToCart=(items)=>{
    console.log(items)
    this.Cartitems = items;
  }
}
