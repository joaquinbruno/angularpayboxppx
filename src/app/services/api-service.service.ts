import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseURL = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(): Observable<IProducto[]>{
     return this._httpClient.get<IProducto[]>(`${this.baseURL}`)
  }

  public getProductById(id: number): Observable<IProducto[]>{
    return this._httpClient.get<IProducto[]>(`${this.baseURL}/${id}`)
  }
}
