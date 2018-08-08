import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private url: string = 'https://webmppcapstone.blob.core.windows.net/data/itemsdata.json';

  private itemsData: any;
  private mainCategories: any;

  constructor(private _http: HttpClient) {}

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


  public getMainCategories() {
    return new Observable((observer) => {
      this._http
        .get(this.url)
        .subscribe(
          (result) => {
            console.log(result);
            this.mainCategories = result;
            observer.next(this.mainCategories);
            return observer.complete();
          },
          (error) => {
            console.log(error);
          });
    });
  }

  
}
