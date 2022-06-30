import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Product } from '@project/api-interfaces';
import { CrudProductService } from '../../services/crud-product/crud-product.service';
import { CrudCartService } from '../../services/crud-cart/crud-cart.service';

@Component({
  selector: 'project-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges{

  @Input() public products: Product[] = []
  @Output() public newProductList = new EventEmitter<Product[]>();

  constructor(private serviceProduct: CrudProductService, private serviceCart: CrudCartService) {}

  ngOnInit(){
    this.serviceProduct.getAll().subscribe( (products) => {
      this.newProductList.emit(products)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.products = changes['products'].currentValue
  }

  addToCart(id: number){
    console.log(id)
    this.serviceCart.create({productId: id}).subscribe( () => {
      console.log("added to cart")
    })
  }
}
