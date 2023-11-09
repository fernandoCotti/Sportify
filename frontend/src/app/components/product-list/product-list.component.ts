import { Component, HostBinding } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @HostBinding('class') classes ='row';

  products: any = [];

  constructor(private productService:ProductsService){
  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err)
    );
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe(
      res => {
        console.log();
        this.getProducts();
      },
      err => console.error(err)
    );
  }

}
