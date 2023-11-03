import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  SearchBar: boolean = true;
  category: string = '';
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if ((val.url == '/' || val.url == '/result/payment') || (val.url == '/' || val.url == '/result/motamar-informations') || (val.url == '/' || val.url == '/result/summary')) {
          this.SearchBar = false;
        } else {
          this.SearchBar = true;
        }
        if (val.url === "/result/flight") {
          this.category = 'flight(s)'
        }
        if (val.url === '/result/first-destination' || val.url === '/result/second-destination') {
          this.category = 'room(s)'
        }
        if (val.url === "/result/first-transfer") {
          this.category = 'vehicle(s)'
        }
      }
    });
  }

}
