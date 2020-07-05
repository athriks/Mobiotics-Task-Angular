import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/item.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

product= [];
items=[];
count =0 ;
Search:String;
 
constructor(private service :ProductService,private router : Router , private service1 :ItemService) { }

ngOnInit() {
    //  from ajax call to product.json
     this.service.getDataFromApi()
                 .subscribe((data)=>this.product=data )
                  console.log(this.product)
                  console.log("hello")
    //  this.product=this.service.getDataFromApi();
    //  this.count = this.service1.cartCount ;
            }
    //price filter below 10k
    //   price1=()=>{
    //    this.product =this.product.filter((prod)=>{
    //     return prod.price <=10000;
    //              }) }
    // //price filter above 10k
    //   price2=()=>{
    //    this.product =this.product.filter((prod)=>{
    //     return prod.price >10000;
    //              }) }
    // // brand samsung 
    // brand1=()=>{
    //    this.product=this.product.filter((prod)=>{
    //      console.log(prod)
    //     return prod.brand == "samsung";
    //              }) }
    // brand2=()=>{
    //   this.product=this.product.filter((prod)=>{
    //     console.log(prod)
    //    return prod.brand == "one plus";
    //             })
    // }           

    // TO Serach bar : filter return array ,forEach return nothing
      ab=()=>{
      this.product = this.product.filter((prod)=>{
      return prod.BrandName.toLocaleLowerCase().split(" ").join("").includes(this.Search.toLocaleLowerCase().split(" ").join(""))
             })
              }
    // to add to the cart 
      Add=(ptr)=> {
      // add a condtion :
      let index  =this.service1.Cartitems.findIndex((data)=> data.BrandName == ptr.BrandName)
      if( index !== -1){
         this.service1.Cartitems[index].Quantity ++;
      }
      else{
       
      this.items.push(ptr)
      this.postDataToService(this.items)
      this.count = this.items.length;
      this.service1.Cartcount = this.count;
      }      
    }
                   
    
     // to send added data to cart
     postDataToService=(items)=>{
         this.service1.PostDataToCart(items);
                                }
     // this.router.navigate(["/Home/Cart"])
     Buy=(ptr)=>{
      this.items.push(ptr)
      this.postDataToService(this.items)
      this.router.navigate(["/Home/Cart"])
      }
  }

  
      

