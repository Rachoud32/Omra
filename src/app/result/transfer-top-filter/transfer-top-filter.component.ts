import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-top-filter',
  templateUrl: './transfer-top-filter.component.html',
  styleUrls: ['./transfer-top-filter.component.css']
})
export class TransferTopFilterComponent implements OnInit {
  @Output() sendDataToParent: EventEmitter<any> = new EventEmitter();


  listTabs: any[] = []
  filteredTabs: any[] = []
  showSecondRoad: boolean = false
  showThirdRoad: boolean = false
  constructor() { }
  ngOnInit(): void {
    const flightDepartureData = JSON.parse(localStorage.getItem('flightDepartureData') || '')
    const flightReturnData = JSON.parse(localStorage.getItem('flightReturnData') || '')
    const hotelFirstDestination = JSON.parse(localStorage.getItem('hotelFirstDestination') || '')
    const hotelSecondDestination = JSON.parse(localStorage.getItem('hotelSecondDestination') || '')

    this.listTabs.push(
      { departure: flightDepartureData.airport, destination: hotelFirstDestination.hotelName },
      { departure: hotelFirstDestination.hotelName, destination: hotelSecondDestination.hotelName },
      { departure: hotelSecondDestination.hotelName, destination: flightReturnData.airport },
    )
  }
  addTab(value: any) {
    console.log(value);
    const tab = this.listTabs.find((tab: any) => tab === value)
    const tabIndex = this.listTabs.indexOf(tab)
    this.listTabs.splice(tabIndex, 1)
    this.filteredTabs.push(tab)
  }
  removeTab(value: any) {
    const tabIndex = this.filteredTabs.indexOf(value)
    this.listTabs.push(value)
    this.filteredTabs.splice(tabIndex, 1)
  }

  tabFilter(selectedFilter: any) {
    console.log(selectedFilter);

    this.sendDataToParent.emit(selectedFilter);
  }
}
