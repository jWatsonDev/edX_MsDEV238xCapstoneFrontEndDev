import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public products;
  public activeSubcategory: string = 'Baby Care';
  public subcategoryImages: any[] = [];
  public inStockOnly: boolean = false;
  public sortByValue: number = 0;
  public allSubcategoryImagesNum: number = 0;
  public mainCategories: any;
  testing = 'Fruits';
  protected imagesData: any[]; // main categories 

  constructor(private _productService: ProductService) {}


  public ngOnInit() {
    this._productService.getMainCategories()
        .subscribe(mainCategories => this.mainCategories = mainCategories);

  }
  // products;

  // constructor(private _productService: ProductService) { }

  // ngOnInit() {
  //   this.getProducts();
  //   console.log(this.products);
  // }

  // getProducts(): void {
  //   this.products = this._productService.getItemsData();
  // }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }

}
