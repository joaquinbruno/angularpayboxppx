import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { IProducto } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 constructor(
   private _route: ActivatedRoute,
   private _apiService: ApiServiceService
 ){}

 product?: IProducto
 productList: IProducto[] = []


 ngOnInit(): void {
   this._route.params.subscribe({
    next: (params: Params) => {
       this._apiService.getProductById(Number(params['productId'])).subscribe({
           next: (data: any) => {
            this.product = data; 
            console.log(this.product)
           },
           error: (error: any)=>{
            console.log(error)
           }
       })
    }

   })
 }
}
