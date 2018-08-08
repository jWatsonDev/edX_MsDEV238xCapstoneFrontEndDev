import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: any; 

  constructor(
    private _dataService: DataService,
    private _cartService: CartService
  ) { }

  ngOnInit() {
    this.product = this._dataService.getCurrentProduct();
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
  
  subtractItem(item) {
    this._cartService.subtractItem(item);
  }

  getNumOfItems(item) {
    return this._cartService.getNumberOfItems(item); 
  }

}
