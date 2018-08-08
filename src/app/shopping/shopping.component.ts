import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { OrderModule, OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public allItems: any; 
  public currentMainCategoryIdx: number; 
  public currentMainCategory: string; 
  public currentSubCategories: any;
  public currentItems: any;  
  public inStockOnly: boolean = false; 
  public order: string = 'name';

  constructor(
    private _dataService: DataService, 
    private _cartService: CartService,
    private orderPipe: OrderPipe
  ) { }

  setProduct(product) {
    this._dataService.setCurrenProduct(product); 
  }

  setOrder(value) {
    this.order = value;
  }

  checkItemInStock(subcategories) {
    return subcategories.items.length > 0;
  }
  setInStock() {
    this.inStockOnly = !this.inStockOnly;
  }

  ngOnInit() {
    this._dataService.getData()
    .subscribe((data) => {
      this.allItems = data;
      // console.log(this.allItems[0]);
    }); 
  }

  setMainCategory(idx, category) {
    // console.log(idx + ' - ' + category);
    this.currentMainCategoryIdx = idx; 
    this.currentMainCategory = category; 
    this.currentSubCategories = this.allItems[this.currentMainCategoryIdx];
    // console.log(this.currentSubCategories);
  }

  setSubItems(idx, currentItems) {
    this.currentItems = currentItems[idx];
    // console.log(this.currentItems);
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
