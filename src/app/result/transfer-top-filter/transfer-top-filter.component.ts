import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-top-filter',
  templateUrl: './transfer-top-filter.component.html',
  styleUrls: ['./transfer-top-filter.component.css']
})
export class TransferTopFilterComponent {
  firstRoad = ''
  secondRoad = ''
  thirdRoad = ''
  listTabs: any[] = [1, 2]
  showSecondRoad: boolean = false
  showThirdRoad: boolean = false
  constructor() { }

  checkRoadOne(value: any) {
    console.log(value);
    this.firstRoad = value;
  }
  checkRoadTwo(value: any) {
    console.log(value);
    if (value != this.firstRoad) {
      this.secondRoad = value;
    }
  }
  checkRoadThree(value: any) {
    console.log(value);
    if (value != this.firstRoad && value != this.secondRoad) {
      this.thirdRoad = value;
    }

  }

  addSecondRoad() {
    this.showSecondRoad = true
    this.showThirdRoad = false
  }
  addThirdRoad() {
    this.showThirdRoad = true
  }
  removeSecondRoad() {
    this.showSecondRoad = false
    this.secondRoad = ''
  }
  removeThirdRoad() {
    this.showThirdRoad = false
    this.thirdRoad = ''
  }

}
