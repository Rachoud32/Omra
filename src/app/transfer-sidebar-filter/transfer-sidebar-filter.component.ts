import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-transfer-sidebar-filter',
  templateUrl: './transfer-sidebar-filter.component.html',
  styleUrls: ['./transfer-sidebar-filter.component.css']
})
export class TransferSidebarFilterComponent {
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
