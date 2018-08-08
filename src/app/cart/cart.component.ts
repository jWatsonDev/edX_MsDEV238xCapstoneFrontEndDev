import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public itemsInCart: any;
  public orderInProcess: boolean = true; 

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this.itemsInCart = this._cartService.getItems();
    console.log(this.itemsInCart);
  }

  orderNow() {
    this.orderInProcess = false;
  }

  removeItem(idx) {
    this._cartService.deleteItem(idx); 
  }

  getNumOfItems(item) {
    return this._cartService.getNumberOfItems(item); 
  }

  checkItem(item) {
    return this._cartService.checkIfInCart(item);
  }

  addItemToCart(item) {
    if (this.checkItem(item)) {
      this._cartService.addToQuantity(item);
    } else {
      this._cartService.addItem(item);
      this._cartService.addToQuantity(item);
    }
  }

  getTotalPrice(item) {
    return (this._cartService.getNumberOfItems(item)) * (item.price);
  }

  getSubTotal() {
    let subTotal: number = 0; 
    for (let item of this._cartService.getItems()) {
      subTotal += this.getTotalPrice(item);
    }
    return subTotal;
  }

  subtractItem(item) {
    this._cartService.subtractItem(item);
  }
}
