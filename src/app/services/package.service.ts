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
        packageTheme: ['Discover', 'Adventure'],
        packagePlace: 'Makkah - Madinah',
        packageDate: '12/01/2024 - 12/01/2024',
        packagePeriod: 10,
        packageServices:'',
        packagePrice: 960,
        packageNbrRoom: 1,
        packageNbrPassengers: 1,
        packagedisponiblity: 2,
        details: {
          Type: 'Individiual stay',
          Theme: ['Discover', 'Discover2'],
          Place: 'Makkah - Madinah',
          Date: '12/01/2024 - 12/01/2024',
          Period: 10,
          Services: 'Flights and transfers included',
          Price: 960,
          NbrRoom: 1,
          NbrPassengers: 1,
          NbrNights: 5,
          description: `1 Maecenas et turpis sed nulla porttitor vestibulum eu ac dui. Mauris faucibus consectetur 
          enim pulvinar placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
          cubilia curae; Proin purus purus, vulputate et ipsum eget, dignissim malesuada magna. Ut et tincidunt 
          lacus. Fusce sed eros sem. In rutrum, sapien nec dapibus cursus, lorem tellus condimentum odio, 
          condimentum pharetra lacus mauris ac urna.`
        }
      },
      {
        _id: 2,
        packagePictures: [
          "assets/package/4.jpg",
          "assets/package/5.jpg",
          "assets/package/6.jpg"
        ],
        packageTitle: 'Spiritual Journey - Makkah & Madinah 2',
        packageRating: 4.5,
        packageType: 'Group stay',
        packageTheme: ['Adventure', 'Wellness'],
        packagePlace: 'Makkah - Madinah',
        packageDate: '12/01/2024 - 12/01/2024',
        packagePeriod: 10,
        packageServices: '',
        packagePrice: 1200,
        packageNbrRoom: 1,
        packageNbrPassengers: 1,
        packagedisponiblity: 5,
        details: {
          Type: 'Individiual stay',
          Theme: ['Adventure', 'Wellness'],
          Place: 'Makkah - Madinah',
          Date: '12/01/2024 - 12/01/2024',
          Period: 10,
          Services: 'Flights and transfers included',
          Price: 960,
          NbrRoom: 1,
          NbrPassengers: 1,
          NbrNights: 5,
          description: `2 Maecenas et turpis sed nulla porttitor vestibulum eu ac dui. Mauris faucibus consectetur 
          enim pulvinar placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
          cubilia curae; Proin purus purus, vulputate et ipsum eget, dignissim malesuada magna. Ut et tincidunt 
          lacus. Fusce sed eros sem. In rutrum, sapien nec dapibus cursus, lorem tellus condimentum odio, 
          condimentum pharetra lacus mauris ac urna.`
        }
      },
      {
        _id: 3,
        packagePictures: [
          "assets/package/1.jpg",
          "assets/package/2.jpg",
          "assets/package/3.jpg"
        ],
        packageTitle: 'Spiritual Journey - Makkah & Madinah 3',
        packageRating: 3.5,
        packageType: 'All inclusive',
        packageTheme: ['Wellness'],
        packagePlace: 'Makkah - Madinah',
        packageDate: '12/01/2024 - 12/01/2024',
        packagePeriod: 10,
        packageServices: '',
        packagePrice: 1600,
        packageNbrRoom: 1,
        packageNbrPassengers: 1,
        packagedisponiblity: 8,
        details: {
          Type: 'Individiual stay',
          Theme: ['Wellness'],
          Place: 'Makkah - Madinah',
          Date: '12/01/2024 - 12/01/2024',
          Period: 10,
          Services: 'Flights and transfers included',
          Price: 960,
          NbrRoom: 1,
          NbrPassengers: 1,
          NbrNights: 5,
          description: `3 Maecenas et turpis sed nulla porttitor vestibulum eu ac dui. Mauris faucibus consectetur 
          enim pulvinar placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
          cubilia curae; Proin purus purus, vulputate et ipsum eget, dignissim malesuada magna. Ut et tincidunt 
          lacus. Fusce sed eros sem. In rutrum, sapien nec dapibus cursus, lorem tellus condimentum odio, 
          condimentum pharetra lacus mauris ac urna.`
        }
      }
    ]
  }
}