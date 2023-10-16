import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.css']
})
export class SidebarFilterComponent {
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
