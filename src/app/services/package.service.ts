import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class packageService {
    constructor() { }
    dataPackages() {
        return [
          {
            _id: 1,
            packagePictures: [
                "assets/package/1.jpg",
                "assets/package/2.jpg",
                "assets/package/3.jpg"
            ],
            packageTitle: 'Spiritual Journey - Makkah & Madinah',
            packageRating: 4,
            packageType: 'Individiual stay',
            packageTheme: 'Discover',
            packagePlace: 'Makkah - Madinah',
            packageDate: '12/01/2024 - 12/01/2024',
            packagePeriod: 10,
            packageServices: 'Flights and transfers included',
            packagePrice: 350,
            packageNbrRoom: 1,
            packageNbrPassengers: 1
          },
          {
            _id: 2,
            packagePictures: [
                "assets/package/1.jpg",
                "assets/package/2.jpg",
                "assets/package/3.jpg"
            ],
            packageTitle: 'Spiritual Journey - Makkah & Madinah 2',
            packageRating: 4,
            packageType: 'Individiual stay',
            packageTheme: 'Discover',
            packagePlace: 'Makkah - Madinah',
            packageDate: '12/01/2024 - 12/01/2024',
            packagePeriod: 10,
            packageServices: 'Flights and transfers included',
            packagePrice: 350,
            packageNbrRoom: 1,
            packageNbrPassengers: 1
          },
          {
            _id: 3,
            packagePictures: [
                "assets/package/1.jpg",
                "assets/package/2.jpg",
                "assets/package/3.jpg"
            ],
            packageTitle: 'Spiritual Journey - Makkah & Madinah 3',
            packageRating: 4,
            packageType: 'Individiual stay',
            packageTheme: 'Discover',
            packagePlace: 'Makkah - Madinah',
            packageDate: '12/01/2024 - 12/01/2024',
            packagePeriod: 10,
            packageServices: 'Flights and transfers included',
            packagePrice: 350,
            packageNbrRoom: 1,
            packageNbrPassengers: 1
          }
        ]
    }    
}