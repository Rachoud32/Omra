import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }
  vehiclesData() {
    return [
      {
        _id: 1,
        vehicleImage: 'assets/transfer/1.webp',
        model: 'Toyota Camry',
        class: 'Economy',
        type: 'Sedan',
        price: '60',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Jeddah Airport',
        destination: 'Swissôtel Al Maqam Makkah',
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
          departure: 'Jeddah Airport',
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
        _id: 2,
        vehicleImage: 'assets/transfer/1.webp',
        model: 'Toyota Camry',
        class: 'Economy',
        type: 'Sedan',
        price: '60',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Swissôtel Al Maqam Makkah',
        destination: 'Pullman Zamzam Madinah',
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
          departure: 'Swissôtel Al Maqam Makkah',
          destination: 'Pullman Zamzam Madinah',
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
        _id: 3,
        vehicleImage: 'assets/transfer/1.webp',
        model: 'Toyota Camry',
        class: 'Economy',
        type: 'Sedan',
        price: '60',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Pullman Zamzam Madinah',
        destination: 'Jeddah Airport',
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
          departure: 'Jeddah Airport',
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
        _id: 4,
        vehicleImage: 'assets/transfer/3.webp',
        model: 'Higer KLQ6952K',
        class: 'Economy',
        type: 'Bus',
        price: '90',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Pullman Zamzam Madinah',
        destination: 'Jeddah Airport',
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
          departure: 'Pullman Zamzam Madinah',
          destination: 'Jeddah Airport',
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
        _id: 5,
        vehicleImage: 'assets/transfer/2.webp',
        model: 'Hyundai Santa Fe',
        class: 'VIP',
        type: 'SUV',
        price: '100',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Jeddah Airport',
        destination: 'Swissôtel Al Maqam Makkah',
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
          departure: 'Jeddah Airport',
          destination: 'Swissôtel Al Maqam Makkah',
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
        _id: 6,
        vehicleImage: 'assets/transfer/2.webp',
        model: 'Hyundai Santa Fe',
        class: 'VIP',
        type: 'SUV',
        price: '100',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Swissôtel Al Maqam Makkah',
        destination: 'Pullman Zamzam Madinah',
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
          departure: 'Swissôtel Al Maqam Makkah',
          destination: 'Pullman Zamzam Madinah',
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
        _id: 7,
        vehicleImage: 'assets/transfer/2.webp',
        model: 'Hyundai Santa Fe',
        class: 'VIP',
        type: 'SUV',
        price: '100',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Pullman Zamzam Madinah',
        destination: 'Jeddah Airport',
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
          departure: 'Pullman Zamzam Madinah',
          destination: 'Jeddah Airport',
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
        _id: 8,
        vehicleImage: 'assets/transfer/5.webp',
        model: 'Ford Transit',
        class: 'Van',
        type: 'Sedan',
        price: '180',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Swissôtel Al Maqam Makkah',
        destination: 'Pullman ZamZam Makkah',
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
          departure: 'Jeddah Airport',
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
        _id: 9,
        vehicleImage: 'assets/transfer/3.webp',
        model: 'Higer KLQ6952K',
        class: 'Economy',
        Type: 'Bus',
        price: '90',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Jeddah Airport',
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
          departure: 'Jeddah Airport',
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
        _id: 10,
        vehicleImage: 'assets/transfer/4.webp',
        model: 'High Speed 2',
        class: 'Business',
        type: 'Train',
        price: '70',
        timeOfDeparture: '14:10',
        timeOfArrival: '17:10',
        duration: '02:00',
        departure: 'Jeddah Airport',
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
          departure: 'Jeddah Airport',
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
  }
}
