import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;
  public sliders: any;
  public toggleSlider: any;
  public sliderIdx: number = 0;

  constructor(
    private _dataService: DataService
  ) {}

  public ngOnInit() { 
    this._dataService.getData()
    .subscribe((data) => {
      this.data = data;
      this.sliders = this._dataService.getSlides(data);
      // console.log(this.sliders);
    }); 
    this.toggleSlider = false;
  }

  toggleCarousel() {
    this.toggleSlider = (this.sliderIdx % 2 === 0) ? 3000 : false; 
    this.sliderIdx ++;
    console.log('toggleSlider() - ' + this.toggleSlider);
  }
}
