import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.API_URI}/allProducts`);
  }
  

  getProduct(id:string){
    return this.http.get(`${this.API_URI}/allProducts/${id}`);
  }

  saveProduct(product: Product){
    return this.http.post(`${this.API_URI}/allProducts`, product);
  }

  deleteProduct(id:string){
    return this.http.delete(`${this.API_URI}/allProducts/${id}`);
  }

  updatePrduct(id:string, updatedProduct:Product){
    return this.http.put(`${this.API_URI}/allProducts/${id}`, updatedProduct);
  }
}
