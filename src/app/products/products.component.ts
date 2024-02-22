import { Component, OnInit } from '@angular/core';
import { IProducto } from '../models/product.model';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: IProducto[] = [];

  constructor(private _apiService: ApiServiceService ) {}

   ngOnInit(): void {
      this._apiService.getAllProducts().subscribe((productos: IProducto[]) =>{
        console.log(productos);
        this.productList = productos;
      })
   }
}
