import { Component } from '@angular/core';
import { Product } from '@project/api-interfaces';

@Component({
  selector: 'project-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  public productsList: Product[] = []

  addNewProduct(product: Product){
    this.productsList = [...this.productsList, product]
  }

  addNewProductList(productList: Product[]){
    this.productsList = productList
  }

}
