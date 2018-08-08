import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private url: string = 'https://webmppcapstone.blob.core.windows.net/data/itemsdata.json';

  private itemsData: any;
  private imagesData: any;
  private currentProduct: any; 

  constructor(private _http: HttpClient) {}

  setCurrenProduct(product) {
    this.currentProduct = product; 
  }

  getCurrentProduct() {
    return this.currentProduct;
  }

  public getData() {
    return new Observable((observer) => {
      this._http
        .get(this.url)
        .subscribe(
          (result) => {
            console.log(result);
            this.itemsData = result;
            observer.next(this.itemsData);
            return observer.complete();
          },
          (error) => {
            console.log(error);
          });
    });
  }

  public getSlides(itemsData) {
    let slides = [];
    let allImages = this.getAllItems(itemsData);
    for (let i = 0; i < 3; i++) {
      slides.push(allImages[i]);
    }

    return slides;

  }

  private getAllItems(itemsData) {
    let allImages = [];
        let i = 0;

        for (let itemD of Object.keys(itemsData)) {
            let subcategories = itemsData[itemD].subcategories;

          for (let subcategorie of Object.keys(subcategories)) {
            let items = subcategories[subcategorie].items;

            for (let item of Object.keys(items)) {
              items[item].id = i;
              allImages.push(items[item]);

              i++;
            }
          }
        }

        this.imagesData = allImages;
        return this.imagesData;
  }

}
