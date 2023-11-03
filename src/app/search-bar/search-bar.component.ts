import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{

  SearchBar: boolean = true;
  category: string = '';

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if ((val.url == '/' || val.url == '/result/payment') || (val.url == '/' || val.url == '/result/motamar-informations')) {
          this.SearchBar = false;
        } else {
          this.SearchBar = true;
        }
      }
    });
  }

  ngOnInit(): void {
    const path = window.location.href.split('/').pop();
    if ( path === 'flight') {
      this.category = 'flight(s)'
    } 
    if ( path === 'first-destination' || path === 'second-destination' ) {
      this.category = 'room(s)'
    } 
    if ( path === 'first-transfer') {
      this.category = 'vehicle(s)'
    } 
  }
}
