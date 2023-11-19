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
  vehicleduration: any[] = []
  selectedVehicleDurations: any[] = []

  durationTransfer: any[] = ["1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h","24h","48h","72h","96h","120h"]

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

  checkVehicleDuration(value: any) {
    console.log(value);
    if (!this.selectedVehicleDurations.includes(value)) {
      this.selectedVehicleDurations.push(value);
    }
    else {
      const index = this.selectedVehicleDurations.indexOf(value)
      this.selectedVehicleDurations.splice(index, 1);
    }
    console.log(this.selectedVehicleDurations);
  }
}
