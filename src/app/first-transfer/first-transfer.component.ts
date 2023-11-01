import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-first-transfer',
  templateUrl: './first-transfer.component.html',
  styleUrls: ['./first-transfer.component.css']
})
export class FirstTransferComponent implements OnInit {
  dataVehicle: any[] = [
    {
      vehicleImage: "assets/transfer/1.webp",
      model: "Toyota Camry",
      type: "Economy",
      price: "60",
      timeOfDeparture: "14:10",
      timeOfArrival: "17:10",
      duration: "02:00",
      class: "",
      departure: "Jeddah Aeroport",
      destination: "Jeddah Hotel",
      dateOfDeparture: "01 nov. 2023",
      dateOfArrival: "01 nov. 2023",
      nbrpassengers: "5",
      nbrbriefcases: "3",
      stops: "Direct",
      details: {
        model: "Toyota Camry",
        type: "Economy",
        price: "60",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Jeddah Aeroport",
        destination: "Jeddah Hotel",
        dateOfDeparture: "01 nov. 2023",
        dateOfArrival: "01 nov. 2023",
        nbrpassengers: "5",
        nbrbriefcases: "3",
      },
    },
    { vehicleImage: "assets/transfer/2.webp",
      model: "Hyundai Santa Fe",
      type: "SUV",
      price: "100",
      timeOfDeparture: "14:10",
      timeOfArrival: "17:10",
      duration: "02:00",
      departure: "Jeddah Aeroport",
      class: "",
      destination: "Jeddah Hotel",
      dateOfDeparture: "01 nov. 2023",
      dateOfArrival: "01 nov. 2023",
      nbrpassengers: "5",
      nbrbriefcases: "3",
      stops: "Direct",
      details: {
        model: "Hyundai Santa Fe",
        type: "SUV",
        price: "100",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Jeddah Aeroport",
        destination: "Jeddah Hotel",
        dateOfDeparture: "01 nov. 2023",
        dateOfArrival: "01 nov. 2023",
        nbrpassengers: "5",
        nbrbriefcases: "3",
      },
    }, 
    { vehicleImage: "assets/transfer/3.webp",
      model: "Bus",
      type: "Bus",
      price: "90",
      timeOfDeparture: "14:10",
      timeOfArrival: "17:10",
      duration: "02:00",
      class: "",
      departure: "Jeddah Aeroport",
      destination: "Jeddah Hotel",
      dateOfDeparture: "01 nov. 2023",
      dateOfArrival: "01 nov. 2023",
      nbrpassengers: "4",
      nbrbriefcases: "3",
      stops: "2 stops",
      details: {
        model: "Toyota Camry",
        type: "Economy",
        price: "60",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Jeddah Aeroport",
        destination: "Jeddah Hotel",
        dateOfDeparture: "01 nov. 2023",
        dateOfArrival: "01 nov. 2023",
        nbrpassengers: "5",
        nbrbriefcases: "3",
      },
    }, 
    { vehicleImage: "assets/transfer/4.webp",
      model: "High-Speed Rail",
      type: "Train",
      price: "70",
      timeOfDeparture: "14:10",
      timeOfArrival: "17:10",
      duration: "02:00",
      class: "",
      departure: "Jeddah Aeroport",
      destination: "Jeddah Hotel",
      dateOfDeparture: "01 nov. 2023",
      dateOfArrival: "01 nov. 2023",
      nbrpassengers: "4",
      nbrbriefcases: "3",
      stops: "1 stop",
      details: {
        model: "Toyota Camry",
        type: "Economy",
        price: "60",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Jeddah Aeroport",
        destination: "Jeddah Hotel",
        dateOfDeparture: "01 nov. 2023",
        dateOfArrival: "01 nov. 2023",
        nbrpassengers: "5",
        nbrbriefcases: "3",
      },
    },   
]    
  collapsed = true;
  selectedTransfer: string = '';
  selectedDetailTransfer: string ='';
  

  ngOnInit(): void {

  }

  constructor(private toastr: ToastrService, private router: Router) { };

  goToNextStep = () => {
    if (this.selectedTransfer != '') {
      const data = {
        flight: true,
        firstDestination: true,
        secondDestination: true,
        transfer: true,
        summary: true,
      }
      localStorage.setItem('steps', JSON.stringify(data))
      window.location.href = '/result/summary';
    } else {
      this.toastr.info("Please select a vehicle before proceeding.")
    }
  }

  checkTransfer(value: string) {
    this.selectedTransfer = value;
  }
  collapsedDetailTransfer(value: string) {
    this.selectedDetailTransfer = value
  }
}
