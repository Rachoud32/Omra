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
  showSecondRoad: boolean = false
  showThirdRoad: boolean = false
  constructor() { }

  checkRoadOne(value: any) {
    console.log(value);
    this.firstRoad = value;
  }
  checkRoadTwo(value: any) {
    console.log(value);
    this.secondRoad = value;
  }
  checkRoadThree(value: any) {
    console.log(value);
    this.thirdRoad = value;
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
