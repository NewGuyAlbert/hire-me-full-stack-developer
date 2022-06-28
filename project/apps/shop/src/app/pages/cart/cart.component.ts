import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
    console.log("Loaded cart page")
  }

}
