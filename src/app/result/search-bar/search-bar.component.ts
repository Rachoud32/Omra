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
        this.updateDataBsTarget(val.url);
      }
    });
    
  }

  updateDataBsTarget(url: string): void {
    // Determine the value for data-bs-target based on the route
    let dataBsTargetValue = '';
    let ariaControls = '';
  
    if (url === '/result/flight') {
      dataBsTargetValue = '#flightfilter';
      ariaControls = 'flightfilter';
    } else if (url === '/result/first-destination' || url === '/result/second-destination') {
      dataBsTargetValue = '#destinationfilter';
      ariaControls = 'destinationfilter';
    } else if (url === '/result/first-transfer') {
      dataBsTargetValue = '#transferfilter';
      ariaControls = 'transferfilter';
    } 
  
    // Update the value in the DOM
    const element = document.getElementById('filter-btn'); // Replace with your element's ID or query selector
    if (element) {
      element.setAttribute('data-bs-target', dataBsTargetValue);
      element.setAttribute('aria-controls', ariaControls);
    }
  }

}
