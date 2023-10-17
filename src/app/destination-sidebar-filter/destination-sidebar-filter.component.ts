import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-destination-sidebar-filter',
  templateUrl: './destination-sidebar-filter.component.html',
  styleUrls: ['./destination-sidebar-filter.component.css']
})
export class DestinationSidebarFilterComponent {
  circleIcons = {
    empty: '../assets/circle-empty.svg',
    half: '../assets/circle-half.svg',
    full: '../assets/circle-full.svg',
  };

  value: number = 0;
  highValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000
  };
}
