import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  loading = false

  skeletons: any[] = [1, 2, 3]
  dataFlight: any[] = []
  returnFlights: any[] = []
  collapsed = true;
  selectedDetailDeparture: string = ''
  selectedDetailReturn: string = ''
  selectedFlight: string = '';
  selectedFlightBack: string = '';
  showDetailsDeparture: any
  showDetailsReturn: any
  counterValue = 0;
  targetValue = 100;
  durationInSeconds = 4;

  constructor(private toastr: ToastrService, private router: Router) { };

  ngOnInit(): void {
    this.loading = true
    this.startCounter(this.durationInSeconds)
    setTimeout(() => {
      this.dataFlight = [
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
            baggage: "1 piece of checked baggage (per ad.)",
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
                baggage: "1 piece of checked baggage (per ad.)",
                timeOfDeparture: "14:10",
                timeOfArrival: "17:10",
                duration: "02:00",
                departure: "Istanbul (IST)",
                destination: "Jeddah (JED)",
                dateOfDeparture: "01 nov. 2023",
                flightNumber: "TUR0606",
              }
            },
            {
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
                baggage: "1 piece of checked baggage (per ad.)",
                timeOfDeparture: "14:10",
                timeOfArrival: "17:10",
                duration: "02:00",
                departure: "Istanbul (IST)",
                destination: "Jeddah (JED)",
                dateOfDeparture: "01 nov. 2023",
                flightNumber: "TUR0606",
              }
            },
            {
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
                baggage: "1 piece of checked baggage (per ad.)",
                timeOfDeparture: "14:10",
                timeOfArrival: "17:10",
                duration: "02:00",
                departure: "Istanbul (IST)",
                destination: "Jeddah (JED)",
                dateOfDeparture: "01 nov. 2023",
                flightNumber: "TUR0606",
              }
            },
          ]
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
            baggage: "1 piece of checked baggage (per ad.)",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            flightNumber: "TUR0606",
          }
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
            baggage: "1 piece of checked baggage (per ad.)",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            flightNumber: "TUR0606",
          }
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
            baggage: "1 piece of checked baggage (per ad.)",
            timeOfDeparture: "14:10",
            timeOfArrival: "17:10",
            duration: "02:00",
            departure: "Istanbul (IST)",
            destination: "Jeddah (JED)",
            dateOfDeparture: "01 nov. 2023",
            flightNumber: "TUR0606",
          }
        },
      ]
      this.loading = false
    }, this.durationInSeconds * 1000)
    this.counterValue = 0
  }
  startCounter(value: any) {
    const interval$ = interval((value * 1000) / this.targetValue);
    interval$
      .pipe(
        take(this.targetValue + 1) // +1 to include the target value
      )
      .subscribe(() => {
        this.counterValue++;
      });

  }
  goToNextStep = () => {
    if (this.selectedFlight != '') {
      if (this.showDetailsReturn) {
        const data = {
          flight: true,
          firstDestination: true,
          secondDestination: false,
          transfer: false,
          summary: false,
        }
        localStorage.setItem('steps', JSON.stringify(data))
        window.location.href = '/result/first-destination'
      }
      else {
        this.toastr.info("Please select a return flight before proceeding.")
      }
    } else {
      this.toastr.info("Please select a departure flight before proceeding.")
    }
  }
  clearData() {
    this.showDetailsDeparture = null
    this.showDetailsReturn = null
    this.selectedFlight = '';
    this.selectedFlightBack = '';
    this.returnFlights = []
  }

  checkFlight(value: any) {
    this.loading = true
    this.selectedFlight = value;
    this.startCounter(this.durationInSeconds / 2)
    setTimeout(() => {
      const flightFound = this.dataFlight.find((flight: any) => flight._id === this.selectedFlight)
      this.showDetailsDeparture = flightFound
      this.returnFlights = flightFound.flightReturns
      this.loading = false
    }, (this.durationInSeconds / 2) * 1000 )
    this.counterValue = 0
  }
  checkFlightBack(value: any) {
    this.selectedFlightBack = value;
    this.showDetailsReturn = this.showDetailsDeparture.flightReturns[value]
  }
  collapsedDetailDeparture(value: any) {
    this.selectedDetailDeparture = value
  }
  collapsedDetailReturn(value: any) {
    this.selectedDetailReturn = value
  }

}

