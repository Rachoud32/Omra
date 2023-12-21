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
          "assets/package/package-item/Umrah-1.webp",
          "assets/package/package-item/Umrah-2.webp",
          "assets/package/package-item/Umrah-3.webp",
          "assets/package/package-item/Umrah-4.webp",
          "assets/package/package-item/Umrah-5.webp"
        ],
        packageTitle: 'Journey of Faith: A Pilgrimage to Makkah',
        packageRating: 4,
        packageType: 'Individiual stay',
        packageTheme: ['Discover', 'Adventure', 'Linguistics', 'Wellness', 'Beach'],
        packagePlace: ['Makkah - Madinah - Riyadh'],
        packageDate: 'Ramadan',
        packagePeriod: 10,
        packageServices: [
          'Flights', 'Hotels', 'Transfers', 'Tours', 'Extras', 'Activities'
        ],
        packagePrice: 960,
        packageNbrRoom: 1,
        packageNbrPassengers: 1,
        packagedisponiblity: 2,
        packagebestprice: true,
        packagetoprated: true,
        packagepromo: '25% Today',
        details: {
          Type: 'Individiual stay',
          Place: 'Makkah - Madinah',
          Date: 'Ramadan',
          Period: 10,
          Services: 'Flights and transfers included',
          Price: 960,
          NbrRoom: 1,
          NbrPassengers: 1,
          NbrNights: 5,
          description: `The spiritual journey in Makkah and Madinah is a transformative pilgrimage for Muslims. Makkah, with the sacred Kaaba, 
          is the focal point of the Hajj pilgrimage, while Madinah, home to the Prophet's Mosque, offers a serene space for reflection and prayer. 
          These cities symbolize deep spiritual connection, fostering unity and a sense of profound devotion among believers.`,
          offers: [
            {
              title : 'Offer 1',
              price : '1000',
              nbrdays: '4',
              nbrnights:'3',
              departuretype:'guaranteed',
              arrangementtype:'LPD',
            },
            {
              title : 'Offer 2',
              price : '960',
              nbrdays: '5',
              nbrnights:'4',
              departuretype:'not guaranteed',
              arrangementtype:'LPD',
            },
            {
              title : 'Offer 3',
              price : '960',
              nbrdays: '5',
              nbrnights:'4',
              departuretype:'not guaranteed',
              arrangementtype:'LPD',
            },
            {
              title : 'Offer 4',
              price : '960',
              nbrdays: '5',
              nbrnights:'4',
              departuretype:'not guaranteed',
              arrangementtype:'LPD',
            },
            {
              title : 'Offer 5',
              price : '960',
              nbrdays: '5',
              nbrnights:'4',
              departuretype:'not guaranteed',
              arrangementtype:'LPD',
            },
          ] ,
        }
      },
      {
        _id: 2,
        packagePictures: [
          "assets/package/package-item/Umrah-2.webp"
        ],
        packageTitle: 'Sacred Steps: Exploring Hajj and Its Meaning',
        packageRating: 4.5,
        packageType: 'Group stay',
        packageTheme: ['Adventure', 'Wellness'],
        packagePlace: 'Makkah - Madinah',
        packageDate: 'Chawel',
        packagePeriod: 10,
        packageServices: [
          'Flights', 'Hotels', 'Transfers', 'Activities'
        ],
        packagePrice: 1200,
        packageNbrRoom: 1,
        packageNbrPassengers: 1,
        packagedisponiblity: 5,
        packagebestprice: true,
        packagetoprated: true,
        packagepromo: '',
        details: {
          Type: 'Individiual stay',
          Theme: ['Adventure', 'Wellness'],
          Place: 'Makkah - Madinah',
          Date: 'Chawel',
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
          "assets/package/package-item/Umrah-3.webp"
        ],
        packageTitle: 'In the Shadows of the Kaaba: Stories from Makkah',
        packageRating: 3.5,
        packageType: 'All inclusive',
        packageTheme: ['Wellness'],
        packagePlace: 'Makkah - Madinah',
        packageDate: 'Mouled',
        packagePeriod: 10,
        packageServices: [
          'Flights', 'Hotels', 'Transfers', 'Tours'
        ],
        packagePrice: 1600,
        packageNbrRoom: 1,
        packageNbrPassengers: 1,
        packagedisponiblity: 8,
        packagebestprice: true,
        packagetoprated: true,
        packagepromo: '',
        details: {
          Type: 'Individiual stay',
          Theme: ['Wellness'],
          Place: 'Makkah - Madinah',
          Date: 'Mouled',
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
      },
      {
        _id: 4,
        packagePictures: [
          "assets/package/package-item/Umrah-4.webp"
        ],
        packageTitle: 'Hajj Chronicles: Reflections on the Sacred Pilgrimage',
        packageRating: 4,
        packageType: 'Individiual stay',
        packageTheme: ['Discover', 'Adventure'],
        packagePlace: ['Makkah - Madinah', 'Riyadh'],
        packageDate: 'Ramadan',
        packagePeriod: 10,
        packageServices: [
          'Flights', 'Hotels', 'Transfers', 'Tours', 'Extras', 'Activities'
        ],
        packagePrice: 960,
        packageNbrRoom: 1,
        packageNbrPassengers: 1,
        packagedisponiblity: 2,
        packagebestprice: true,
        packagetoprated: true,
        packagepromo: '',
        details: {
          Type: 'Individiual stay',
          Theme: ['Discover', 'Discover2'],
          Place: 'Makkah - Madinah',
          Date: 'Ramadan',
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
        _id: 5,
        packagePictures: [
          "assets/package/package-item/Umrah-5.webp"
        ],
        packageTitle: 'Makkah Diaries: A Personal Account of the Holy City',
        packageRating: 4.3,
        packageType: 'Group stay',
        packageTheme: ['Adventure', 'Wellness'],
        packagePlace: 'Makkah - Madinah',
        packageDate: 'Chawel',
        packagePeriod: 10,
        packageServices: [
          'Flights', 'Hotels', 'Transfers', 'Activities'
        ],
        packagePrice: 1200,
        packageNbrRoom: 1,
        packageNbrPassengers: 1,
        packagedisponiblity: 5,
        packagebestprice: true,
        packagetoprated: true,
        packagepromo: '',
        details: {
          Type: 'Individiual stay',
          Theme: ['Adventure', 'Wellness'],
          Place: 'Makkah - Madinah',
          Date: 'Chawel',
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
        _id: 6,
        packagePictures: [
          "assets/package/package-item/Umrah-6.webp"
        ],
        packageTitle: 'Beyond the Kaaba: Spiritual Insights from Hajj',
        packageRating: 4.4,
        packageType: 'All inclusive',
        packageTheme: ['Wellness'],
        packagePlace: 'Makkah - Madinah',
        packageDate: 'Mouled',
        packagePeriod: 10,
        packageServices: [
          'Flights', 'Hotels', 'Transfers', 'Tours'
        ],
        packagePrice: 970,
        packageNbrRoom: 1,
        packageNbrPassengers: 1,
        packagedisponiblity: 8,
        packagebestprice: true,
        packagetoprated: true,
        packagepromo: '25% Today',
        details: {
          Type: 'Individiual stay',
          Theme: ['Wellness'],
          Place: 'Makkah - Madinah',
          Date: 'Mouled',
          Period: 10,
          Services: 'Flights and transfers included',
          Price: 900,
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