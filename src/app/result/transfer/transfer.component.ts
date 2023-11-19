import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  
  dataVehicle: any[] = [
    {
      vehicleImage: 'assets/transfer/1.webp',
      model: 'Toyota Camry',
      type: 'Economy',
      category: 'Sedan',
      price: '60',
      timeOfDeparture: '14:10',
      timeOfArrival: '17:10',
      duration: '02:00',
      class: '',
      departure: 'Jeddah Aeroport',
      destination: 'Jeddah Hotel',
      dateOfDeparture: '01 nov. 2023',
      dateOfArrival: '01 nov. 2023',
      nbrpassengers: '5',
      nbrbriefcases: '3',
      childseats: true,
      stops: 'Direct',
      details: {
        model: 'Toyota Camry',
        type: 'Economy',
        price: '60',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Jeddah Aeroport',
        destination: 'Jeddah Hotel',
        stops: {
          firststop: '',
          secondstop: '',
        },
        dateOfDeparture: '01 nov. 2023',
        dateOfArrival: '01 nov. 2023',
        nbrpassengers: '5',
        nbrbriefcases: '3',
      },
    },
    {
      vehicleImage: 'assets/transfer/2.webp',
      model: 'Hyundai Santa Fe',
      type: 'SUV',
      category: 'Sedan',
      price: '100',
      timeOfDeparture: '14:10',
      timeOfArrival: '17:10',
      duration: '02:00',
      departure: 'Jeddah Aeroport',
      class: '',
      destination: 'Jeddah Hotel',
      dateOfDeparture: '01 nov. 2023',
      dateOfArrival: '01 nov. 2023',
      nbrpassengers: '5',
      nbrbriefcases: '3',
      childseats: true,
      stops: 'Direct',
      details: {
        model: 'Hyundai Santa Fe',
        type: 'SUV',
        price: '100',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Jeddah Aeroport',
        destination: 'Jeddah Hotel', 
        stops: {
          firststop: '',
          secondstop: '',
        },
        dateOfDeparture: '01 nov. 2023',
        dateOfArrival: '01 nov. 2023',
        nbrpassengers: '5',
        nbrbriefcases: '3',
      },
    },
    {
      vehicleImage: 'assets/transfer/5.webp',
      model: 'Ford Transit',
      type: 'Van',
      category: 'Sedan',
      price: '180',
      timeOfDeparture: '14:10',
      timeOfArrival: '17:10',
      duration: '02:00',
      departure: 'Jeddah Aeroport',
      class: '',
      destination: 'Jeddah Hotel',
      dateOfDeparture: '01 nov. 2023',
      dateOfArrival: '01 nov. 2023',
      nbrpassengers: '5',
      nbrbriefcases: '3',
      childseats: true,
      stops: 'Direct',
      details: {
        model: 'Ford Transit',
        type: 'Van',
        price: '180',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Jeddah Aeroport',
        destination: 'Jeddah Hotel',
        stops: {
          firststop: '',
          secondstop: '',
        },
        dateOfDeparture: '01 nov. 2023',
        dateOfArrival: '01 nov. 2023',
        nbrpassengers: '5',
        nbrbriefcases: '3',
      },
    },
    {
      vehicleImage: 'assets/transfer/3.webp',
      model: 'Higer KLQ6952K',
      type: 'Bus',
      category: 'Bus',
      price: '90',
      timeOfDeparture: '14:10',
      timeOfArrival: '17:10',
      duration: '02:00',
      class: 'Economy',
      departure: 'Jeddah Aeroport',
      destination: 'Jeddah Hotel',
      dateOfDeparture: '01 nov. 2023',
      dateOfArrival: '01 nov. 2023',
      nbrpassengers: '4',
      nbrbriefcases: '3',
      childseats: false,
      stops: '2',
      details: {
        model: 'Toyota Camry',
        type: 'Economy',
        price: '60',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Jeddah Aeroport',
        destination: 'Jeddah Hotel',
        stops: {
          firststop: 'Jeddah',
          secondstop: 'Rabigh',
        },
        dateOfDeparture: '01 nov. 2023',
        dateOfArrival: '01 nov. 2023',
        nbrpassengers: '5',
        nbrbriefcases: '3',
      },
    },
    {
      vehicleImage: 'assets/transfer/4.webp',
      model: 'High Speed 2',
      type: 'Train',
      category: 'Train',
      price: '70',
      timeOfDeparture: '14:10',
      timeOfArrival: '17:10',
      duration: '02:00',
      class: 'Business',
      departure: 'Jeddah Aeroport',
      destination: 'Jeddah Hotel',
      dateOfDeparture: '01 nov. 2023',
      dateOfArrival: '01 nov. 2023',
      nbrpassengers: '4',
      nbrbriefcases: '3',
      childseats: false,
      stops: '1',
      details: {
        model: 'Toyota Camry',
        type: 'Economy',
        price: '60',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Jeddah Aeroport',
        destination: 'Jeddah Hotel',
        stops: {
          firststop: 'Jeddah',
          secondstop: 'Rabigh',
        },
        dateOfDeparture: '01 nov. 2023',
        dateOfArrival: '01 nov. 2023',
        nbrpassengers: '5',
        nbrbriefcases: '3',
      },
    },
  ];
  collapsed = true;
  selectedTransfer: string = '';
  selectedDetailTransfer: string = '';

  ngOnInit(): void {}

  constructor(private toastr: ToastrService, private router: Router) {}

  goToNextStep = () => {
    if (this.selectedTransfer != '') {
      const data = {
        flight: true,
        firstDestination: true,
        secondDestination: true,
        transfer: true,
        summary: true,
      };
      localStorage.setItem('steps', JSON.stringify(data));
      window.location.href = '/result/summary';
    } else {
      this.toastr.info('Please select a vehicle before proceeding.');
    }
  };

  checkTransfer(value: string) {
    this.selectedTransfer = value;
  }
  collapsedDetailTransfer(value: string) {
    this.selectedDetailTransfer = value;
  }
}
