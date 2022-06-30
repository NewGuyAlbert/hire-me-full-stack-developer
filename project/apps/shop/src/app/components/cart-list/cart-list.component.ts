import { Component, OnChanges, OnInit, SimpleChanges, Input, Output, EventEmitter} from '@angular/core';
import { firstValueFrom } from "rxjs";
import { DisplayCart } from '@project/api-interfaces';
import { Cart } from '@project/api-interfaces';
import { CrudCartService } from '../../services/crud-cart/crud-cart.service';
import { CrudProductService } from '../../services/crud-product/crud-product.service';

@Component({
  selector: 'project-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnChanges{

  @Input() public cart: DisplayCart[] = []
  public originalCart: Cart[] = []
  @Output() public newCart = new EventEmitter<DisplayCart[]>();
  @Output() public removedItem = new EventEmitter<number>();

  constructor(private serviceCart: CrudCartService, private serviceProduct: CrudProductService) {}

  ngOnInit(){
    this.serviceCart.getAll().subscribe( async (cart) => {
      this.originalCart = cart

      //Remove duplicates and add quantity
      const noDuplicatesCart: any = Array.from(cart.reduce( (map: any, o: any) => {
        if(map.has(o.productId)) {
          map.get(o.productId).quantity++
        } else {
          map.set(o.productId, { ...o, quantity: 1})
        }
        return map
      }, new Map()).values())

      //Add entire product details in place of productId
      for(let i = 0; i < noDuplicatesCart.length; i++){
        const product = await firstValueFrom(this.serviceProduct.read(noDuplicatesCart[i].productId))
        noDuplicatesCart[i].product = product
        delete noDuplicatesCart[i].productId
      }

      this.newCart.emit(noDuplicatesCart)
    })
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.cart = changes['cart'].currentValue
  }

  removeFromCart(productId: number){
    for(let i = 0; i < this.originalCart.length; i++){
      if(this.originalCart[i].productId === productId){
        this.serviceCart.delete(this.originalCart[i].id).subscribe( (response) => {
          console.log(response)
          if(response.affected === 1){
            this.removedItem.emit(productId)
            this.originalCart.splice(i, 1)
          }
        })
        break
      }
    }
  }
}
