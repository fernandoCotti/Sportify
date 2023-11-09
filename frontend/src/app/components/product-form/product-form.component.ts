import { Component, HostBinding } from '@angular/core';

import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  @HostBinding('class') classes ='row';

  product:any = {
    id: 0,
    productName: '',
    description: '',
    image: '',
    created_at: new Date()
  }


  constructor(private productService: ProductsService, private router:Router, private activeroute:ActivatedRoute){ }

  ngOnInit(){
    const params = this.activeroute.snapshot.params;
    if(params['id']){
      this.productService.getProduct(params['id']).subscribe(
        res => {
          this.product = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  edit: boolean= false;


  saveProduct(){
    delete this.product.created_at;
    delete this.product.id;
    this.productService.saveProduct(this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['./products']);
      },
      err => console.error(err)
    );
  }

  updateProduct(){
    delete this.product.created_at;
    this.productService.updatePrduct(this.product.id, this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['./products']);
      },
      err => console.error(err)
    );
  }

}
