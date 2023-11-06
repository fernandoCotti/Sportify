import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: any = [];

  constructor(private productService:ProductsService){
  }

  ngOnInit(){
    this.productService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err)
    );
  }

}
