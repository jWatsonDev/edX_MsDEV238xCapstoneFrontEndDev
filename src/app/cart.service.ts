import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  protected itemsInCart: any[] = [];
  protected itemQuantities: number[] = [];

  addItem(item) {
    this.itemsInCart.push(item); // console.log(this.itemsInCart);
    let idx = this.itemsInCart.indexOf(item);
    // if (this.itemQuantities[idx] === null) {
    //   console.log('no value');
    // }
    // this.itemQuantities[idx]++;
    // console.log(this.itemQuantities[idx])
  }

  addToQuantity(item) {
    let idx = this.itemsInCart.indexOf(item);
    if (this.itemQuantities[idx] === undefined) {
      this.itemQuantities[idx] = 1; 
      console.log('Item added to cart.' + this.itemQuantities[idx]);
    } else {
      this.itemQuantities[idx]++;
      console.log('Item already in cart: ' + this.itemQuantities[idx]);
    }
  }

  checkIfInCart(item) {
    return this.itemsInCart.includes(item); 
  }

  deleteItem(idx) {
    this.itemsInCart.splice(idx, 1);
    this.itemQuantities.splice(idx, 1);
  }

  getNumberOfItems(item) {
    let idx = this.itemsInCart.indexOf(item);
    return this.itemQuantities[idx];
  }

  subtractItem(item) {
    let idx = this.itemsInCart.indexOf(item);
    if (this.itemQuantities[idx] === 1) {
      this.deleteItem(idx); 
    } else {
      this.itemQuantities[idx]--; 
    }
    console.log(this.itemQuantities[idx]);
  }

  getItems() {
    return this.itemsInCart;
  }
  constructor() { }
}
