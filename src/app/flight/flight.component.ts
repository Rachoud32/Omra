import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  dataFlight: any[] = [
    {
      flightImage: "assets/flight/tunisair.svg",
      class: "Economic",
      price: "1200",
      timeOfDeparture: "14:10",
      timeOfArrival: "17:10",
      duration: "02:00",
      departure: "Sfax (SFA)",
      destination: "Jeddah (JED)",
      dateOfDeparture: "01 nov. 2023",
      dateOfArrival: "01 nov. 2023",
      stops: "Direct",
      flightNumber: "TUN123",
      details: {
        class: "First",
        baggage: "1 piece of checked baggage (per ad.)",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Sfax (SFA)",
        destination: "Jeddah (JED)",
        dateOfDeparture: "01 nov. 2023",
        flightNumber: "TUN123",
      },
      flightReturns: [
        {
          flightImage: "assets/flight/tunisair.svg",
          class: "Economic",
          price: "1200",
          timeOfDeparture: "14:10",
          timeOfArrival: "17:10",
          duration: "02:00",
          departure: "Sfax (SFA)",
          destination: "Jeddah (JED)",
          dateOfDeparture: "01 nov. 2023",
          dateOfArrival: "01 nov. 2023",
          stops: "Direct",
          flightNumber: "TUN123",
          details: {
            class: "First",
            baggage: "1 piece of checked baggage (per ad.)",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Sfax (SFA)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            flightNumber: "TUN123",
          }
        },
        {
          flightImage: "assets/flight/qatar-airways.svg",
          class: "Business",
          price: "1200",
          timeOfDeparture: "14:10",
          timeOfArrival: "17:10",
          duration: "02:00",
          departure: "Sfax (SFA)",
          destination: "Jeddah (JED)",
          dateOfDeparture: "01 nov. 2023",
          dateOfArrival: "01 nov. 2023",
          stops: "Direct",
          flightNumber: "TUN123",
          details: {
            class: "First",
            baggage: "1 piece of checked baggage (per ad.)",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Sfax (SFA)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            flightNumber: "TUN123",
          }
        },
        {
          flightImage: "assets/flight/saudi-airlines.svg",
          class: "First",
          price: "1200",
          timeOfDeparture: "14:10",
          timeOfArrival: "17:10",
          duration: "02:00",
          departure: "Sfax (SFA)",
          destination: "Jeddah (JED)",
          dateOfDeparture: "01 nov. 2023",
          dateOfArrival: "01 nov. 2023",
          stops: "Direct",
          flightNumber: "TUN123",
          details: {
            class: "First",
            baggage: "1 piece of checked baggage (per ad.)",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Sfax (SFA)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            flightNumber: "TUN123",
          }
        },
      ]
    },
    {
      flightImage: "assets/flight/qatar-airways.svg",
      class: "Business",
      price: "1500",
      timeOfDeparture: "14:10",
      timeOfArrival: "17:10",
      duration: "02:00",
      departure: "Sfax (SFA)",
      destination: "Jeddah (JED)",
      dateOfDeparture: "01 nov. 2023",
      dateOfArrival: "01 nov. 2023",
      stops: "Direct",
      flightNumber: "TUN123",
      details: {
        class: "First",
        baggage: "1 piece of checked baggage (per ad.)",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Sfax (SFA)",
        destination: "Jeddah (JED)",
        dateOfDeparture: "01 nov. 2023",
        flightNumber: "TUN123",
      }
    },
    {
      flightImage: "assets/flight/saudi-airlines.svg",
      class: "First",
      price: "1000",
      timeOfDeparture: "14:10",
      timeOfArrival: "17:10",
      duration: "02:00",
      departure: "Sfax (SFA)",
      destination: "Jeddah (JED)",
      dateOfDeparture: "01 nov. 2023",
      dateOfArrival: "01 nov. 2023",
      stops: "1 stop",
      flightNumber: "TUN123",
      details: {
        class: "First",
        baggage: "1 piece of checked baggage (per ad.)",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Sfax (SFA)",
        destination: "Jeddah (JED)",
        dateOfDeparture: "01 nov. 2023",
        flightNumber: "TUN123",
      }
    },
    {
      flightImage: "assets/flight/air-france.svg",
      class: "Economic",
      price: "1200",
      timeOfDeparture: "14:10",
      timeOfArrival: "17:10",
      duration: "02:00",
      departure: "Sfax (SFA)",
      destination: "Jeddah (JED)",
      dateOfDeparture: "01 nov. 2023",
      dateOfArrival: "01 nov. 2023",
      stops: "2 stops",
      flightNumber: "TUN123",
      details: {
        class: "First",
        baggage: "1 piece of checked baggage (per ad.)",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Sfax (SFA)",
        destination: "Jeddah (JED)",
        dateOfDeparture: "01 nov. 2023",
        flightNumber: "TUN123",
      }
    },
  ]
  collapsed = true;
  selectedDetailDeparture: string = ''
  selectedDetailReturn: string = ''
  selectedFlight: string = '';
  selectedFlightBack: string = '';

  constructor(private toastr: ToastrService, private router: Router) { };

  ngOnInit(): void {

  }
  goToNextStep = () => {
    if (this.selectedFlight != '') {
      const data = {
        flight: true,
        firstDestination: true,
        secondDestination: false,
        transfer: false,
        summary: false,
      }
      localStorage.setItem('steps', JSON.stringify(data))
      window.location.href = '/result/first-destination'
    } else {
      this.toastr.info("Please select a flight before proceeding.")
    }
  }

  checkFlight(value: string) {
    this.selectedFlight = value;
  }
  checkFlightBack(value: string) {
    this.selectedFlightBack = value;
  }
  collapsedDetailDeparture(value: string) {
    this.selectedDetailDeparture = value
  }
  collapsedDetailReturn(value: string) {
    this.selectedDetailReturn = value
  }
}

