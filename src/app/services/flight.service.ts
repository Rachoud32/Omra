import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }

  flightData() {
    return [
      {
        _id: 1,
        flightImage: "assets/flight/turkish-airlines.svg",
        class: "Economic",
        price: "1200",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Istanbul (IST)",
        destination: "Jeddah (JED)",
        dateOfDeparture: "01 nov. 2023",
        dateOfArrival: "01 nov. 2023",
        stops: "Direct",
        flightNumber: "TUR0606",
        details: {
          class: "First",
          luggage: "1 piece of checked luggage (per ad.)",
          timeOfDeparture: "14:10",
          timeOfArrival: "17:10",
          duration: "02:00",
          departure: "Istanbul (IST)",
          destination: "Jeddah (JED)",
          dateOfDeparture: "01 nov. 2023",
          flightNumber: "TUR0606",
        },
        flightReturns: [
          {
            _id: 1,
            flightImage: "assets/flight/turkish-airlines.svg",
            class: "Economic",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Jeddah (JED)",
            destination: "Istanbul (IST)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Jeddah (JED)",
              destination: "Istanbul (IST)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          },
          {
            _id: 2,
            flightImage: "assets/flight/qatar-airways.svg",
            class: "Business",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Jeddah (JED)",
            destination: "Qatar (Qat)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Jeddah (JED)",
              destination: "Qatar (Qat)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          },
          {
            _id: 3,
            flightImage: "assets/flight/air-france.svg",
            class: "First",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Jeddah (JED)",
            destination: "France (FRA)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Jeddah (JED)",
              destination: "France (FRA)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          },
        ],
        airport: 'Jeddah Airport'
      },
      {
        _id: 2,
        flightImage: "assets/flight/qatar-airways.svg",
        class: "Business",
        price: "1500",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Istanbul (IST)",
        destination: "Jeddah (JED)",
        dateOfDeparture: "01 nov. 2023",
        dateOfArrival: "01 nov. 2023",
        stops: "Direct",
        flightNumber: "TUR0606",
        details: {
          class: "First",
          luggage: "1 piece of checked luggage (per ad.)",
          timeOfDeparture: "14:10",
          timeOfArrival: "17:10",
          duration: "02:00",
          departure: "Istanbul (IST)",
          destination: "Jeddah (JED)",
          dateOfDeparture: "01 nov. 2023",
          flightNumber: "TUR0606",
        },
        flightReturns: [
          {
            _id: 1,
            flightImage: "assets/flight/turkish-airlines.svg",
            class: "Economic",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Al Ula Airport'
          },
          {
            _id: 2,
            flightImage: "assets/flight/qatar-airways.svg",
            class: "Business",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          },
          {
            _id: 3,
            flightImage: "assets/flight/saudi-airlines.svg",
            class: "First",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          },
        ],
        airport: 'Jeddah Airport'
      },
      {
        _id: 3,
        flightImage: "assets/flight/saudi-airlines.svg",
        class: "First",
        price: "1000",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Istanbul (IST)",
        destination: "Jeddah (JED)",
        dateOfDeparture: "01 nov. 2023",
        dateOfArrival: "01 nov. 2023",
        stops: "1 stop",
        flightNumber: "TUR0606",
        details: {
          class: "First",
          luggage: "1 piece of checked luggage (per ad.)",
          timeOfDeparture: "14:10",
          timeOfArrival: "17:10",
          duration: "02:00",
          departure: "Istanbul (IST)",
          destination: "Jeddah (JED)",
          dateOfDeparture: "01 nov. 2023",
          flightNumber: "TUR0606",
        },
        flightReturns: [
          {
            _id: 1,
            flightImage: "assets/flight/turkish-airlines.svg",
            class: "Economic",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          },
          {
            _id: 2,
            flightImage: "assets/flight/qatar-airways.svg",
            class: "Business",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          },
          {
            _id: 3,
            flightImage: "assets/flight/saudi-airlines.svg",
            class: "First",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          }
        ],
        airport: 'Jeddah Airport'
      },
      {
        _id: 4,
        flightImage: "assets/flight/air-france.svg",
        class: "Economic",
        price: "1200",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Istanbul (IST)",
        destination: "Jeddah (JED)",
        dateOfDeparture: "01 nov. 2023",
        dateOfArrival: "01 nov. 2023",
        stops: "2 stops",
        flightNumber: "TUR0606",
        details: {
          class: "First",
          luggage: "1 piece of checked luggage (per ad.)",
          timeOfDeparture: "14:10",
          timeOfArrival: "17:10",
          duration: "02:00",
          departure: "Istanbul (IST)",
          destination: "Jeddah (JED)",
          dateOfDeparture: "01 nov. 2023",
          flightNumber: "TUR0606",
        },
        flightReturns: [
          {
            _id: 1,
            flightImage: "assets/flight/turkish-airlines.svg",
            class: "Economic",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          },
          {
            _id: 2,
            flightImage: "assets/flight/qatar-airways.svg",
            class: "Business",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          },
          {
            _id: 3,
            flightImage: "assets/flight/saudi-airlines.svg",
            class: "First",
            price: "1200",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            dateOfArrival: "01 nov. 2023",
            stops: "Direct",
            flightNumber: "TUR0606",
            details: {
              class: "First",
              luggage: "1 piece of checked luggage (per ad.)",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01 nov. 2023",
              flightNumber: "TUR0606",
            },
            airport: 'Jeddah Airport'
          }
        ],
        airport: 'Jeddah Airport'
      },
    ]
  }
}
