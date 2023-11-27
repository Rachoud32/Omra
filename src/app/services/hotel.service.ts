import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }
  hotelData() {
    return [
      {
        _id: 1,
        hotelName: 'SWISSÔTEL AL MAQAM MAKKAH',
        type: 'Luxury Hotel',
        rating: 4.5,
        images: [
          "assets/package/hotel-2/1.jpg",
          "assets/package/hotel-2/2.jpg",
          "assets/package/hotel-2/3.jpg",
          "assets/package/hotel-2/4.jpg"
        ],
        details: {
          title: 'MOVENPICK MAKKAH HAJAR TOWER',
          location: 'Abraj Al Bait - Near King Abdul Aziz Gate, 21955 Makkah, Saudi Arabia',
          description: `
          Located in one of the tallest buildings 
          in the world and overlooking the holy 
          Grand Mosque, Hajar Tower combines 
          traditions with modern comforts. 
          `,
          googleMaps: "",
          advantages: [
            {
              title: 'Good breakfast',
              icon: 'coffee'
            },
            {
              title: 'Cable Tv',
              icon: 'tv'
            },
            {
              title: 'Phone',
              icon: 'phone'
            },
            {
              title: 'Air conditioner',
              icon: 'wind'
            },
            {
              title: 'Locker',
              icon: 'lock'
            },
          ]
        },
        rooms: [
          {
            _id: 1,
            images: [
              "assets/package/hotel-2/room-1.jpg",
              "assets/package/hotel-2/room-2.jpg",

            ],
            title: 'Two Bedroom Suite City View',
            policy: '$25 Cancellation',
            price: 350,
            tva: true,
            advantages: {
              wifi: 'Free Wifi',
              breakfast: 'Free breakfast',
              sleeps: 5
            }
          },
          {
            _id: 2,
            images: [
              "assets/package/hotel-2/room-1.jpg",
              "assets/package/hotel-2/room-2.jpg",

            ],
            title: 'Two Bedroom Suite City View',
            policy: '$25 Cancellation',
            price: 320,
            tva: true,
            advantages: {
              wifi: 'Free Wifi',
              breakfast: 'Free breakfast',
              sleeps: 2
            }
          },
          {
            _id: 3,
            images: [
              "assets/package/hotel-2/room-1.jpg",
              "assets/package/hotel-2/room-2.jpg",
            ],
            title: 'Two Bedroom Suite City View',
            policy: '$25 Cancellation',
            price: 250,
            tva: true,
            advantages: {
              wifi: 'Free Wifi',
              breakfast: 'Free breakfast',
              sleeps: 3
            }
          },
          {
            _id: 4,
            images: [
              "assets/package/hotel-2/room-2.jpg",

            ],
            title: 'Two Bedroom Suite City View',
            policy: '$25 Cancellation',
            price: 295,
            tva: true,
            advantages: {
              wifi: 'Free Wifi',
              breakfast: 'Free breakfast',
              sleeps: 5
            }
          },
          {
            _id: 5,
            images: [
              "assets/package/hotel-2/room-1.jpg",

            ],
            title: 'Two Bedroom Suite City View',
            policy: '$25 Cancellation',
            price: 300,
            tva: true,
            advantages: {
              wifi: 'Free Wifi',
              breakfast: 'Free breakfast',
              sleeps: 5
            }
          },

        ]
      },
      {
        _id: 2,
        hotelName: 'PULLMAN ZAMZAM MAKKAH',
        type: 'Resort Hotel',
        rating: 4,
        images: [
          "assets/package/hotel-3/1.jpg",
          "assets/package/hotel-3/2.jpg",
          "assets/package/hotel-3/3.jpg",
          "assets/package/hotel-3/4.jpg"
        ],
        details: {
          title: 'PULLMAN ZAMZAM MAKKAH',
          location: 'Abraj Al Bait - Near King Abdul Aziz Gate, 21955 Makkah, Saudi Arabia',
          description: `
          Located in one of the tallest buildings 
          in the world and overlooking the holy 
          Grand Mosque, Hajar Tower combines 
          traditions with modern comforts. 
          `,
          googleMaps: '',
          advantages: ['Good breakfast',
            'Cable Tv',
            'Phone',
            'Air conditioner',
            'Locker',
            'Shower'
          ]
        },
        rooms: [
          {
            _id: 6,
            images: [
              "assets/package/hotel-2/room-1.jpg",
              "assets/package/hotel-2/room-2.jpg",
            ],
            title: 'Two Bedroom Suite City View',
            policy: '$25 Cancellation',
            price: 250,
            tva: true,
            advantages: {
              wifi: 'Free Wifi',
              breakfast: 'Free breakfast',
              sleeps: 3
            }
          },
          {
            _id: 7,
            images: [
              "assets/package/hotel-2/room-2.jpg",

            ],
            title: 'Two Bedroom Suite City View',
            policy: '$25 Cancellation',
            price: 295,
            tva: true,
            advantages: {
              wifi: 'Free Wifi',
              breakfast: 'Free breakfast',
              sleeps: 5
            }
          },
          {
            _id: 8,
            images: [
              "assets/package/hotel-2/room-1.jpg",

            ],
            title: 'Two Bedroom Suite City View',
            policy: '$25 Cancellation',
            price: 300,
            tva: true,
            advantages: {
              wifi: 'Free Wifi',
              breakfast: 'Free breakfast',
              sleeps: 5
            }
          },

        ]
      }
    ]
  }
}
