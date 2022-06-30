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
    this.productsList.push(product)
    //Without the following line, it does not detect change and child isn't updated
    this.productsList = [...this.productsList]
  }

  addNewProductList(productList: Product[]){
    this.productsList = productList
  }

}
