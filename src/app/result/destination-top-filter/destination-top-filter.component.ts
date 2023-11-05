import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-top-filter',
  templateUrl: './destination-top-filter.component.html',
  styleUrls: ['./destination-top-filter.component.css']
})
export class DestinationTopFilterComponent {

  order = "increment"

  starRatings: any[] = []
  pensions: any[] = []
  themes: any[] = []
  policies: any[] = []
  views: any[] = []


  sortOrder(value: string) {
    if (value === "decrement") {
      this.order = "increment"
    }
    if (value === "increment") {
      this.order = "decrement"
    }
  }

  checkStarRatings(value: string) {
    if (!this.starRatings.includes(value)) {
      this.starRatings.push(value);
    }
    else {
      const index = this.starRatings.indexOf(value)
      this.starRatings.splice(index, 1);
    }
    console.log(this.starRatings);

  }

  checkPensions(value: string) {
    if (!this.pensions.includes(value)) {
      this.pensions.push(value);
    }
    else {
      const index = this.pensions.indexOf(value)
      this.pensions.splice(index, 1);
    }
    console.log(this.pensions);

  }

  checkThemes(value: string) {
    if (!this.themes.includes(value)) {
      this.themes.push(value);
    }
    else {
      const index = this.themes.indexOf(value)
      this.themes.splice(index, 1);
    }
    console.log(this.themes);

  }
  checkPolicies(value: string) {
    if (!this.policies.includes(value)) {
      this.policies.push(value);
    }
    else {
      const index = this.policies.indexOf(value)
      this.policies.splice(index, 1);
    }
    console.log(this.policies);

  }

  checkViews(value: string) {
    if (!this.views.includes(value)) {
      this.views.push(value);
    }
    else {
      const index = this.views.indexOf(value)
      this.views.splice(index, 1);
    }
    console.log(this.views);

  }
}
