import { Component } from '@angular/core';
import { DisplayCart } from '@project/api-interfaces';

@Component({
  selector: 'project-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{

  public cart: DisplayCart[] = []

  addNewCart(cart: DisplayCart[]){
    this.cart = cart
  }

  removeFromCart(removedItemProductId: number){
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].product.id === removedItemProductId){
        if(this.cart[i].quantity === 1){
          //Remove item
          this.cart.splice(i,1)
        } else{
          //Decrease quantity
          this.cart[i].quantity --
        }
      }
      //Without the following line, it does not detect change and child isn't updated
      this.cart = [...this.cart]
    }
  }
}
