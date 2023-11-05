import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer-first-filter',
  templateUrl: './transfer-first-filter.component.html',
  styleUrls: ['./transfer-first-filter.component.css']
})
export class TransferFirstFilterComponent {

  order = "increment"
  vehicleTypes: any[] = []
  themes: any[] = []
  vehicleSpecs: any[] = []
  sortOrder(value: string) {
    if (value === "decrement") {
      this.order = "increment"
    }
    if (value === "increment") {
      this.order = "decrement"
    }
  }

  checkVehicleTypes(value: any) {
    console.log(value);
    if (!this.vehicleTypes.includes(value)) {
      this.vehicleTypes.push(value);
    }
    else {
      const index = this.vehicleTypes.indexOf(value)
      this.vehicleTypes.splice(index, 1);
    }
    console.log(this.vehicleTypes);
  }

  checkThemes(value: any) {
    console.log(value);
    if (!this.themes.includes(value)) {
      this.themes.push(value);
    }
    else {
      const index = this.themes.indexOf(value)
      this.themes.splice(index, 1);
    }
    console.log(this.themes);
  }

  checkVehicleSpecs(value: any) {
    console.log(value);
    if (!this.vehicleSpecs.includes(value)) {
      this.vehicleSpecs.push(value);
    }
    else {
      const index = this.vehicleSpecs.indexOf(value)
      this.vehicleSpecs.splice(index, 1);
    }
    console.log(this.vehicleSpecs);
  }
}
