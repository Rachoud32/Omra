import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }
  dataFirstDestination() {
    return [
      {
        _id: 1,
        hotelName: 'Swissôtel Al Maqam Makkah',
        type: 'Luxury Hotel',
        rating: 4.5,
        images: [
          "assets/package/hotel-2/1.jpg",
          "assets/package/hotel-2/2.jpg",
          "assets/package/hotel-2/3.jpg",
          "assets/package/hotel-2/4.jpg"
        ],
        details: {
          title: 'Swissôtel Al Maqam Makkah',
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
        hotelName: 'Pullman ZamZam Makkah',
        type: 'Resort Hotel',
        rating: 4,
        images: [
          "assets/package/hotel-3/1.jpg",
          "assets/package/hotel-3/2.jpg",
          "assets/package/hotel-3/3.jpg",
          "assets/package/hotel-3/4.jpg"
        ],
        details: {
          title: 'Pullman ZamZam Makkah',
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
  dataSecondDestination() {
    return [
      {
        _id: 1,
        hotelName: 'Sofitel Shahd al Madinah',
        type: 'Business Hotel',
        rating: 4.3,
        images: [
          "assets/package/hotel-4/1.jpg",
          "assets/package/hotel-4/2.jpg",
          "assets/package/hotel-4/3.jpg",
          "assets/package/hotel-4/4.jpg",
          "assets/package/hotel-4/5.jpg",
          "assets/package/hotel-4/6.jpg"
        ],
        details: {
          title: 'Sofitel Shahd al Madinah',
          location: 'King Fahd Road Building 2943, 0 Al Madinah, Saudi Arabia',
          description: `
          Experience profound spiritual luxury at Sofitel Shahd Al Madinah, a few 
          steps away from Al Masjid Al Nabawi. Our 5-star retreat, near one of 
          Saudi Arabia's most sacred sites, seamlessly connects local traditions 
          with elegant French hospitality. As you step into the pedestrian area 
          of Al Madinah, let us welcome you to opulent rooms and suites, some 
          with breathtaking views of the Mosque and Haram Plaza.
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
              "assets/package/hotel-4/room-1.jpg",
              "assets/package/hotel-4/room-2.jpg",

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
              "assets/package/hotel-4/room-1.jpg",
              "assets/package/hotel-4/room-2.jpg",

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
              "assets/package/hotel-4/room-1.jpg",
              "assets/package/hotel-4/room-2.jpg",
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
              "assets/package/hotel-4/room-2.jpg",

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
              "assets/package/hotel-4/room-2.jpg",
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
        hotelName: 'Pullman Zamzam Madinah',
        type: 'Business Hotel',
        rating: 4,
        images: [
          "assets/package/hotel-5/1.jpg",
          "assets/package/hotel-5/2.jpg",
          "assets/package/hotel-5/3.jpg",
          "assets/package/hotel-5/4.jpg",
          "assets/package/hotel-5/5.jpg"
        ],
        details: {
          title: 'Pullman Zamzam Madinah',
          location: 'Amr Bin Al Gmoh Street Madina, 41499 Madina, Saudi Arabia',
          description: `
          For the journey of a lifetime to one of the purest places on earth… 
          Pullman understands the unique path that many faithful followers take 
          before or after Hajj and Umrah. Pullman Zamzam Madina recently opened 
          its doors to offer unparalleled peace and a warm Arabic welcome for 
          pilgrims to this holy sanctuary.
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
              "assets/package/hotel-5/room-1.jpg",
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
              "assets/package/hotel-5/room-1.jpg",

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
              "assets/package/hotel-5/room-1.jpg",

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
