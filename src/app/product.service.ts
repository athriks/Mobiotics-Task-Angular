import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map,filter,flatMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

// getDataFromApi=()=>{
// let observabele = this.http.get("");
// return observabele;
// }
getDataFromApi=()=>{
let observabele = this.http.get("/assets/product.json")
                      .pipe(map((data)=>data['products']))
                            // flatMap((data2)=>(data2)),
                            // filter((data3)=>data3["price"]>4000)) 
  return observabele;
}

// getDataFromApi1=()=>{
//   let observabele = this.http.get("/assets/product.json")
//                         .pipe(map((data)=>data['products']),
//                               flatMap((data2)=>(data2)),
//                               filter((data3)=>data3["price"]<=1000)) 
//     return observabele;
//   }
}