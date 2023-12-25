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
        packageTheme: ['Discover', 'Adventure', 'Linguistics'],
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
        packageDeparturecities: 2,
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
              id: 1,
              title: 'A Pilgrimage to Makkah',
              price: '1000',
              nbrdays: '4',
              nbrnights: '3',
              departuretype: 'guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 2,
              title: 'A Pilgrimage to Madinah',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'Belgium'
            },
            {
              id: 3,
              title: 'A Pilgrimage to Makkah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 4,
              title: 'A Pilgrimage to Madinah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'UK'
            },
            {
              id: 5,
              title: 'A Pilgrimage to Makkah 3',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
          ],
          flights: [
            {
              flightcompany: 'Turkish Airlines',
              class: "Economic",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01/12/2023",
              dateOfArrival: "01/12/2023",
              stops: [],
              flightNumber: "TUR0606",
              luggage: 1,
              flightReturn: {
                flightcompany: 'Saudia Airlines',
                class: "Economic",
                timeOfDeparture: "14:10",
                timeOfArrival: "17:10",
                duration: "02:00",
                departure: "Jeddah (JED)",
                destination: "Istanbul (IST)",
                dateOfDeparture: "10/12/2023",
                dateOfArrival: "10/12/2023",
                stops: ['Egypt', 'Jordan'],
                flightNumber: "TUR0606",
                luggage: 2
              }
            }
          ],
          hotels: [
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
              },
              rooms: [
                {
                  id: 1,
                  tva: true,
                  minguests: 1,
                  maxguests: 2,
                  view: 'Desert',
                  types: [
                    {
                      pension: 'LPD',
                      price: 350,
                      title: 'Standard Room',
                      wifi: 'Free Wifi',
                      breakfast: 'Free breakfast',
                      sleeps: 2
                    },
                    {
                      price: 320,
                      pension: 'LPD',
                      title: 'Double Room',
                      wifi: 'Free Wifi',
                      breakfast: 'Free breakfast',
                      sleeps: 2
                    }
                  ]
                },
                {
                  id: 2,
                  tva: true,
                  minguests: 2,
                  maxguests: 4,
                  view: 'City',
                  types: [
                    {
                      price: 400,
                      pension: 'LPD',
                      title: 'Standard Room',
                      wifi: 'Free Wifi',
                      breakfast: 'Free breakfast',
                      sleeps: 2
                    },
                    {
                      price: 380,
                      pension: 'LPD',
                      title: 'Double Room',
                      wifi: 'Free Wifi',
                      breakfast: 'Free breakfast',
                      sleeps: 2
                    }
                  ]
                }
              ],
              secondDestination: {
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
                  with elegant French hospitality.
                  `,
                },
                rooms: [
                  {
                    id: 1,
                    title: 'Two Bedroom Suite City View',
                    policy: '$25 Cancellation',
                    price: 350,
                    tva: true,
                    minguests: 2,
                    maxguests: 4,
                    advantages: {
                      wifi: 'Free Wifi',
                      breakfast: 'Free breakfast',
                      sleeps: 5
                    }
                  },
                  {
                    id: 2,
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
                ]
              }
            }
          ],
          transfers: [
            {
              model: 'Toyota Camry',
              class: 'Economy',
              type: 'Sedan',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 3,
              stops: []
            },
            {
              model: 'Train',
              class: 'Economy',
              type: 'Train',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            },
            {
              model: 'Bus',
              class: 'Economy',
              type: 'Bus',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: true,
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            }
          ],
          activities: [
            {
              id: 1,
              title: 'Al Baqi Cemetery',
              picture: 'assets/activities/1.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Jannat al-Baqīʿ is the oldest and the first Islamic cemetery of Medina in the Hejazi region of present-day Saudi Arabia. It is also known as Baqīʿ al-Gharqad.`,
              date: '01/11/2024',
              time: '09:30'
            },
            {
              id: 2,
              title: 'Mount Uhud',
              picture: 'assets/activities/2.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Mount Uhud is a mountain north of Medina, in the Hejazi region of Saudi Arabia. It is 1,077 m high and 7.5 km long. It was the site of the second battle between the Islamic prophet Muhammad and the polytheists of his tribe of Quraysh.`,
              date: '08/11/2024',
              time: '08:00'
            },
            {
              id: 3,
              title: 'The Mosque of the Two Qiblahs',
              picture: 'assets/activities/3.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `It is one of the earliest mosques in Islam. It was established during the Prophet’s time for an outlying neighborhood of Madinah. Its significance lies in the fact that after the Prophet received a commandment to change the qiblah or prayer direction from al-Masjid al-Aqsa in Jerusalem to al-Masjid al-Haram (Ka’bah) in Makkah, the entire congregation led by a companion in this mosque changed direction in prayer.`,
              date: '10/11/2024',
              time: '10:30'
            },
          ],
          visits: [
            {
              id: 1,
              title: 'Al Madinah Province',
              picture: 'assets/visits/1.jpg',
              description: `Madinah Munawwarah or Medina al-Munawwarah is the second most holy city for Muslims because there is Masjid-e- Nabawi where Muhammad's tomb 
              is located. Medina is 210 miles (340 km) north of Mecca and about 120 miles (190 km) from the Red Sea coast.`,
              date: '01/12/2024',
              duration: '02:00',
              placeVisit: 'Madinah',
              startTime: '09:00'
            },
            {
              id: 2,
              title: 'Jeddah Old Town Tour Al-Balad',
              picture: 'assets/visits/2.jpg',
              description: `This is half day experience to tour Al Balad as local call it which means “ the town” as reference to the base of Jeddah. 
              Al-Balad was founded in the 7th century and historically served as the centre of Jeddah. Al-Balad's defensive walls were torn down in the 1940s.`,
              date: '05/12/2024',
              duration: '03:00',
              placeVisit: 'Jeddah',
              startTime: '10:00'
            },
          ]
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
        packageDeparturecities: 1,
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
          condimentum pharetra lacus mauris ac urna.`,
          offers: [
            {
              id: 1,
              title: 'A Pilgrimage to Makkah',
              price: '1000',
              nbrdays: '4',
              nbrnights: '3',
              departuretype: 'guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 2,
              title: 'A Pilgrimage to Madinah',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'Belgium'
            },
            {
              id: 3,
              title: 'A Pilgrimage to Makkah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 4,
              title: 'A Pilgrimage to Madinah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'UK'
            },
            {
              id: 5,
              title: 'A Pilgrimage to Makkah 3',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
          ],
          flights: [
            {
              flightcompany: 'Turkish Airlines',
              class: "Economic",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01/12/2023",
              dateOfArrival: "01/12/2023",
              stops: [],
              flightNumber: "TUR0606",
              luggage: 1,
              flightReturn: {
                flightcompany: 'Saudia Airlines',
                class: "Economic",
                timeOfDeparture: "14:10",
                timeOfArrival: "17:10",
                duration: "02:00",
                departure: "Jeddah (JED)",
                destination: "Istanbul (IST)",
                dateOfDeparture: "10/12/2023",
                dateOfArrival: "10/12/2023",
                stops: ['Egypt', 'Jordan'],
                flightNumber: "TUR0606",
                luggage: 2
              }
            }
          ],
          hotels: [
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
              },
              rooms: [
                {
                  id: 1,
                  title: 'Standard Room',
                  pension: 'LPD',
                  price: 350,
                  tva: true,
                  minguests: 1,
                  maxguests: 2,
                  view: 'Desert',
                  advantages: {
                    wifi: 'Free Wifi',
                    breakfast: 'Free breakfast',
                    sleeps: 2
                  }
                },
                {
                  id: 2,
                  title: 'Double Room',
                  pension: 'LPD',
                  price: 320,
                  tva: true,
                  minguests: 2,
                  maxguests: 4,
                  view: 'City',
                  advantages: {
                    wifi: 'Free Wifi',
                    breakfast: 'Free breakfast',
                    sleeps: 4
                  }
                }
              ],
              secondDestination: {
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
                  with elegant French hospitality.
                  `,
                },
                rooms: [
                  {
                    id: 1,
                    title: 'Two Bedroom Suite City View',
                    policy: '$25 Cancellation',
                    price: 350,
                    tva: true,
                    minguests: 2,
                    maxguests: 4,
                    advantages: {
                      wifi: 'Free Wifi',
                      breakfast: 'Free breakfast',
                      sleeps: 5
                    }
                  },
                  {
                    id: 2,
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
                ]
              }
            }
          ],
          transfers: [
            {
              model: 'Toyota Camry',
              class: 'Economy',
              type: 'Sedan',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 3,
              stops: []
            },
            {
              model: 'Train',
              class: 'Economy',
              type: 'Train',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            },
            {
              model: 'Bus',
              class: 'Economy',
              type: 'Bus',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: true,
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            }
          ],
          activities: [
            {
              id: 1,
              title: 'Al Baqi Cemetery',
              picture: 'assets/activities/1.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Jannat al-Baqīʿ is the oldest and the first Islamic cemetery of Medina in the Hejazi region of present-day Saudi Arabia. It is also known as Baqīʿ al-Gharqad.`,
              date: '01/11/2024',
              time: '09:30'
            },
            {
              id: 2,
              title: 'Mount Uhud',
              picture: 'assets/activities/2.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Mount Uhud is a mountain north of Medina, in the Hejazi region of Saudi Arabia. It is 1,077 m high and 7.5 km long. It was the site of the second battle between the Islamic prophet Muhammad and the polytheists of his tribe of Quraysh.`,
              date: '08/11/2024',
              time: '08:00'
            },
            {
              id: 3,
              title: 'The Mosque of the Two Qiblahs',
              picture: 'assets/activities/3.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `It is one of the earliest mosques in Islam. It was established during the Prophet’s time for an outlying neighborhood of Madinah. Its significance lies in the fact that after the Prophet received a commandment to change the qiblah or prayer direction from al-Masjid al-Aqsa in Jerusalem to al-Masjid al-Haram (Ka’bah) in Makkah, the entire congregation led by a companion in this mosque changed direction in prayer.`,
              date: '10/11/2024',
              time: '10:30'
            },
          ],
          visits: [
            {
              id: 1,
              title: 'Al Madinah Province',
              picture: 'assets/visits/1.jpg',
              description: `Madinah Munawwarah or Medina al-Munawwarah is the second most holy city for Muslims because there is Masjid-e- Nabawi where Muhammad's tomb 
              is located. Medina is 210 miles (340 km) north of Mecca and about 120 miles (190 km) from the Red Sea coast.`,
              date: '01/12/2024',
              duration: '02:00',
              placeVisit: 'Madinah',
              startTime: '09:00'
            },
            {
              id: 2,
              title: 'Jeddah Old Town Tour Al-Balad',
              picture: 'assets/visits/2.jpg',
              description: `This is half day experience to tour Al Balad as local call it which means “ the town” as reference to the base of Jeddah. 
              Al-Balad was founded in the 7th century and historically served as the centre of Jeddah. Al-Balad's defensive walls were torn down in the 1940s.`,
              date: '05/12/2024',
              duration: '03:00',
              placeVisit: 'Jeddah',
              startTime: '10:00'
            },
          ]
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
        packageDeparturecities: 3,
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
          condimentum pharetra lacus mauris ac urna.`,
          offers: [
            {
              id: 1,
              title: 'A Pilgrimage to Makkah',
              price: '1000',
              nbrdays: '4',
              nbrnights: '3',
              departuretype: 'guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 2,
              title: 'A Pilgrimage to Madinah',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'Belgium'
            },
            {
              id: 3,
              title: 'A Pilgrimage to Makkah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 4,
              title: 'A Pilgrimage to Madinah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'UK'
            },
            {
              id: 5,
              title: 'A Pilgrimage to Makkah 3',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
          ],
          flights: [
            {
              flightcompany: 'Turkish Airlines',
              class: "Economic",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01/12/2023",
              dateOfArrival: "01/12/2023",
              stops: [],
              flightNumber: "TUR0606",
              luggage: 1,
              flightReturn: {
                flightcompany: 'Saudia Airlines',
                class: "Economic",
                timeOfDeparture: "14:10",
                timeOfArrival: "17:10",
                duration: "02:00",
                departure: "Jeddah (JED)",
                destination: "Istanbul (IST)",
                dateOfDeparture: "10/12/2023",
                dateOfArrival: "10/12/2023",
                stops: ['Egypt', 'Jordan'],
                flightNumber: "TUR0606",
                luggage: 2
              }
            }
          ],
          hotels: [
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
              },
              rooms: [
                {
                  id: 1,
                  title: 'Standard Room',
                  pension: 'LPD',
                  price: 350,
                  tva: true,
                  minguests: 1,
                  maxguests: 2,
                  view: 'Desert',
                  advantages: {
                    wifi: 'Free Wifi',
                    breakfast: 'Free breakfast',
                    sleeps: 2
                  }
                },
                {
                  id: 2,
                  title: 'Double Room',
                  pension: 'LPD',
                  price: 320,
                  tva: true,
                  minguests: 2,
                  maxguests: 4,
                  view: 'City',
                  advantages: {
                    wifi: 'Free Wifi',
                    breakfast: 'Free breakfast',
                    sleeps: 4
                  }
                }
              ],
              secondDestination: {
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
                  with elegant French hospitality.
                  `,
                },
                rooms: [
                  {
                    id: 1,
                    title: 'Two Bedroom Suite City View',
                    policy: '$25 Cancellation',
                    price: 350,
                    tva: true,
                    minguests: 2,
                    maxguests: 4,
                    advantages: {
                      wifi: 'Free Wifi',
                      breakfast: 'Free breakfast',
                      sleeps: 5
                    }
                  },
                  {
                    id: 2,
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
                ]
              }
            }
          ],
          transfers: [
            {
              model: 'Toyota Camry',
              class: 'Economy',
              type: 'Sedan',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 3,
              stops: []
            },
            {
              model: 'Train',
              class: 'Economy',
              type: 'Train',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            },
            {
              model: 'Bus',
              class: 'Economy',
              type: 'Bus',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: true,
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            }
          ],
          activities: [
            {
              id: 1,
              title: 'Al Baqi Cemetery',
              picture: 'assets/activities/1.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Jannat al-Baqīʿ is the oldest and the first Islamic cemetery of Medina in the Hejazi region of present-day Saudi Arabia. It is also known as Baqīʿ al-Gharqad.`,
              date: '01/11/2024',
              time: '09:30'
            },
            {
              id: 2,
              title: 'Mount Uhud',
              picture: 'assets/activities/2.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Mount Uhud is a mountain north of Medina, in the Hejazi region of Saudi Arabia. It is 1,077 m high and 7.5 km long. It was the site of the second battle between the Islamic prophet Muhammad and the polytheists of his tribe of Quraysh.`,
              date: '08/11/2024',
              time: '08:00'
            },
            {
              id: 3,
              title: 'The Mosque of the Two Qiblahs',
              picture: 'assets/activities/3.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `It is one of the earliest mosques in Islam. It was established during the Prophet’s time for an outlying neighborhood of Madinah. Its significance lies in the fact that after the Prophet received a commandment to change the qiblah or prayer direction from al-Masjid al-Aqsa in Jerusalem to al-Masjid al-Haram (Ka’bah) in Makkah, the entire congregation led by a companion in this mosque changed direction in prayer.`,
              date: '10/11/2024',
              time: '10:30'
            },
          ],
          visits: [
            {
              id: 1,
              title: 'Al Madinah Province',
              picture: 'assets/visits/1.jpg',
              description: `Madinah Munawwarah or Medina al-Munawwarah is the second most holy city for Muslims because there is Masjid-e- Nabawi where Muhammad's tomb 
              is located. Medina is 210 miles (340 km) north of Mecca and about 120 miles (190 km) from the Red Sea coast.`,
              date: '01/12/2024',
              duration: '02:00',
              placeVisit: 'Madinah',
              startTime: '09:00'
            },
            {
              id: 2,
              title: 'Jeddah Old Town Tour Al-Balad',
              picture: 'assets/visits/2.jpg',
              description: `This is half day experience to tour Al Balad as local call it which means “ the town” as reference to the base of Jeddah. 
              Al-Balad was founded in the 7th century and historically served as the centre of Jeddah. Al-Balad's defensive walls were torn down in the 1940s.`,
              date: '05/12/2024',
              duration: '03:00',
              placeVisit: 'Jeddah',
              startTime: '10:00'
            },
          ]
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
        packageDeparturecities: 1,
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
          condimentum pharetra lacus mauris ac urna.`,
          offers: [
            {
              id: 1,
              title: 'A Pilgrimage to Makkah',
              price: '1000',
              nbrdays: '4',
              nbrnights: '3',
              departuretype: 'guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 2,
              title: 'A Pilgrimage to Madinah',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'Belgium'
            },
            {
              id: 3,
              title: 'A Pilgrimage to Makkah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 4,
              title: 'A Pilgrimage to Madinah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'UK'
            },
            {
              id: 5,
              title: 'A Pilgrimage to Makkah 3',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
          ],
          flights: [
            {
              flightcompany: 'Turkish Airlines',
              class: "Economic",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01/12/2023",
              dateOfArrival: "01/12/2023",
              stops: [],
              flightNumber: "TUR0606",
              luggage: 1,
              flightReturn: {
                flightcompany: 'Saudia Airlines',
                class: "Economic",
                timeOfDeparture: "14:10",
                timeOfArrival: "17:10",
                duration: "02:00",
                departure: "Jeddah (JED)",
                destination: "Istanbul (IST)",
                dateOfDeparture: "10/12/2023",
                dateOfArrival: "10/12/2023",
                stops: ['Egypt', 'Jordan'],
                flightNumber: "TUR0606",
                luggage: 2
              }
            }
          ],
          hotels: [
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
              },
              rooms: [
                {
                  id: 1,
                  title: 'Standard Room',
                  pension: 'LPD',
                  price: 350,
                  tva: true,
                  minguests: 1,
                  maxguests: 2,
                  view: 'Desert',
                  advantages: {
                    wifi: 'Free Wifi',
                    breakfast: 'Free breakfast',
                    sleeps: 2
                  }
                },
                {
                  id: 2,
                  title: 'Double Room',
                  pension: 'LPD',
                  price: 320,
                  tva: true,
                  minguests: 2,
                  maxguests: 4,
                  view: 'City',
                  advantages: {
                    wifi: 'Free Wifi',
                    breakfast: 'Free breakfast',
                    sleeps: 4
                  }
                }
              ],
              secondDestination: {
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
                  with elegant French hospitality.
                  `,
                },
                rooms: [
                  {
                    id: 1,
                    title: 'Two Bedroom Suite City View',
                    policy: '$25 Cancellation',
                    price: 350,
                    tva: true,
                    minguests: 2,
                    maxguests: 4,
                    advantages: {
                      wifi: 'Free Wifi',
                      breakfast: 'Free breakfast',
                      sleeps: 5
                    }
                  },
                  {
                    id: 2,
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
                ]
              }
            }
          ],
          transfers: [
            {
              model: 'Toyota Camry',
              class: 'Economy',
              type: 'Sedan',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 3,
              stops: []
            },
            {
              model: 'Train',
              class: 'Economy',
              type: 'Train',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            },
            {
              model: 'Bus',
              class: 'Economy',
              type: 'Bus',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: true,
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            }
          ],
          activities: [
            {
              id: 1,
              title: 'Al Baqi Cemetery',
              picture: 'assets/activities/1.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Jannat al-Baqīʿ is the oldest and the first Islamic cemetery of Medina in the Hejazi region of present-day Saudi Arabia. It is also known as Baqīʿ al-Gharqad.`,
              date: '01/11/2024',
              time: '09:30'
            },
            {
              id: 2,
              title: 'Mount Uhud',
              picture: 'assets/activities/2.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Mount Uhud is a mountain north of Medina, in the Hejazi region of Saudi Arabia. It is 1,077 m high and 7.5 km long. It was the site of the second battle between the Islamic prophet Muhammad and the polytheists of his tribe of Quraysh.`,
              date: '08/11/2024',
              time: '08:00'
            },
            {
              id: 3,
              title: 'The Mosque of the Two Qiblahs',
              picture: 'assets/activities/3.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `It is one of the earliest mosques in Islam. It was established during the Prophet’s time for an outlying neighborhood of Madinah. Its significance lies in the fact that after the Prophet received a commandment to change the qiblah or prayer direction from al-Masjid al-Aqsa in Jerusalem to al-Masjid al-Haram (Ka’bah) in Makkah, the entire congregation led by a companion in this mosque changed direction in prayer.`,
              date: '10/11/2024',
              time: '10:30'
            },
          ],
          visits: [
            {
              id: 1,
              title: 'Al Madinah Province',
              picture: 'assets/visits/1.jpg',
              description: `Madinah Munawwarah or Medina al-Munawwarah is the second most holy city for Muslims because there is Masjid-e- Nabawi where Muhammad's tomb 
              is located. Medina is 210 miles (340 km) north of Mecca and about 120 miles (190 km) from the Red Sea coast.`,
              date: '01/12/2024',
              duration: '02:00',
              placeVisit: 'Madinah',
              startTime: '09:00'
            },
            {
              id: 2,
              title: 'Jeddah Old Town Tour Al-Balad',
              picture: 'assets/visits/2.jpg',
              description: `This is half day experience to tour Al Balad as local call it which means “ the town” as reference to the base of Jeddah. 
              Al-Balad was founded in the 7th century and historically served as the centre of Jeddah. Al-Balad's defensive walls were torn down in the 1940s.`,
              date: '05/12/2024',
              duration: '03:00',
              placeVisit: 'Jeddah',
              startTime: '10:00'
            },
          ]
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
        packageDeparturecities: 2,
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
          condimentum pharetra lacus mauris ac urna.`,
          offers: [
            {
              id: 1,
              title: 'A Pilgrimage to Makkah',
              price: '1000',
              nbrdays: '4',
              nbrnights: '3',
              departuretype: 'guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 2,
              title: 'A Pilgrimage to Madinah',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'Belgium'
            },
            {
              id: 3,
              title: 'A Pilgrimage to Makkah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 4,
              title: 'A Pilgrimage to Madinah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'UK'
            },
            {
              id: 5,
              title: 'A Pilgrimage to Makkah 3',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
          ],
          flights: [
            {
              flightcompany: 'Turkish Airlines',
              class: "Economic",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01/12/2023",
              dateOfArrival: "01/12/2023",
              stops: [],
              flightNumber: "TUR0606",
              luggage: 1,
              flightReturn: {
                flightcompany: 'Saudia Airlines',
                class: "Economic",
                timeOfDeparture: "14:10",
                timeOfArrival: "17:10",
                duration: "02:00",
                departure: "Jeddah (JED)",
                destination: "Istanbul (IST)",
                dateOfDeparture: "10/12/2023",
                dateOfArrival: "10/12/2023",
                stops: ['Egypt', 'Jordan'],
                flightNumber: "TUR0606",
                luggage: 2
              }
            }
          ],
          hotels: [
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
              },
              rooms: [
                {
                  id: 1,
                  title: 'Standard Room',
                  pension: 'LPD',
                  price: 350,
                  tva: true,
                  minguests: 1,
                  maxguests: 2,
                  view: 'Desert',
                  advantages: {
                    wifi: 'Free Wifi',
                    breakfast: 'Free breakfast',
                    sleeps: 2
                  }
                },
                {
                  id: 2,
                  title: 'Double Room',
                  pension: 'LPD',
                  price: 320,
                  tva: true,
                  minguests: 2,
                  maxguests: 4,
                  view: 'City',
                  advantages: {
                    wifi: 'Free Wifi',
                    breakfast: 'Free breakfast',
                    sleeps: 4
                  }
                }
              ],
              secondDestination: {
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
                  with elegant French hospitality.
                  `,
                },
                rooms: [
                  {
                    id: 1,
                    title: 'Two Bedroom Suite City View',
                    policy: '$25 Cancellation',
                    price: 350,
                    tva: true,
                    minguests: 2,
                    maxguests: 4,
                    advantages: {
                      wifi: 'Free Wifi',
                      breakfast: 'Free breakfast',
                      sleeps: 5
                    }
                  },
                  {
                    id: 2,
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
                ]
              }
            }
          ],
          transfers: [
            {
              model: 'Toyota Camry',
              class: 'Economy',
              type: 'Sedan',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 3,
              stops: []
            },
            {
              model: 'Train',
              class: 'Economy',
              type: 'Train',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            },
            {
              model: 'Bus',
              class: 'Economy',
              type: 'Bus',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: true,
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            }
          ],
          activities: [
            {
              id: 1,
              title: 'Al Baqi Cemetery',
              picture: 'assets/activities/1.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Jannat al-Baqīʿ is the oldest and the first Islamic cemetery of Medina in the Hejazi region of present-day Saudi Arabia. It is also known as Baqīʿ al-Gharqad.`,
              date: '01/11/2024',
              time: '09:30'
            },
            {
              id: 2,
              title: 'Mount Uhud',
              picture: 'assets/activities/2.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Mount Uhud is a mountain north of Medina, in the Hejazi region of Saudi Arabia. It is 1,077 m high and 7.5 km long. It was the site of the second battle between the Islamic prophet Muhammad and the polytheists of his tribe of Quraysh.`,
              date: '08/11/2024',
              time: '08:00'
            },
            {
              id: 3,
              title: 'The Mosque of the Two Qiblahs',
              picture: 'assets/activities/3.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `It is one of the earliest mosques in Islam. It was established during the Prophet’s time for an outlying neighborhood of Madinah. Its significance lies in the fact that after the Prophet received a commandment to change the qiblah or prayer direction from al-Masjid al-Aqsa in Jerusalem to al-Masjid al-Haram (Ka’bah) in Makkah, the entire congregation led by a companion in this mosque changed direction in prayer.`,
              date: '10/11/2024',
              time: '10:30'
            },
          ],
          visits: [
            {
              id: 1,
              title: 'Al Madinah Province',
              picture: 'assets/visits/1.jpg',
              description: `Madinah Munawwarah or Medina al-Munawwarah is the second most holy city for Muslims because there is Masjid-e- Nabawi where Muhammad's tomb 
              is located. Medina is 210 miles (340 km) north of Mecca and about 120 miles (190 km) from the Red Sea coast.`,
              date: '01/12/2024',
              duration: '02:00',
              placeVisit: 'Madinah',
              startTime: '09:00'
            },
            {
              id: 2,
              title: 'Jeddah Old Town Tour Al-Balad',
              picture: 'assets/visits/2.jpg',
              description: `This is half day experience to tour Al Balad as local call it which means “ the town” as reference to the base of Jeddah. 
              Al-Balad was founded in the 7th century and historically served as the centre of Jeddah. Al-Balad's defensive walls were torn down in the 1940s.`,
              date: '05/12/2024',
              duration: '03:00',
              placeVisit: 'Jeddah',
              startTime: '10:00'
            },
          ]
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
        packageDeparturecities: 2,
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
          condimentum pharetra lacus mauris ac urna.`,
          offers: [
            {
              id: 1,
              title: 'A Pilgrimage to Makkah',
              price: '1000',
              nbrdays: '4',
              nbrnights: '3',
              departuretype: 'guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 2,
              title: 'A Pilgrimage to Madinah',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'Belgium'
            },
            {
              id: 3,
              title: 'A Pilgrimage to Makkah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
            {
              id: 4,
              title: 'A Pilgrimage to Madinah 2',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'UK'
            },
            {
              id: 5,
              title: 'A Pilgrimage to Makkah 3',
              price: '960',
              nbrdays: '5',
              nbrnights: '4',
              departuretype: 'not guaranteed',
              arrangementtype: 'LPD',
              departurecity: 'France'
            },
          ],
          flights: [
            {
              flightcompany: 'Turkish Airlines',
              class: "Economic",
              timeOfDeparture: "14:10",
              timeOfArrival: "17:10",
              duration: "02:00",
              departure: "Istanbul (IST)",
              destination: "Jeddah (JED)",
              dateOfDeparture: "01/12/2023",
              dateOfArrival: "01/12/2023",
              stops: [],
              flightNumber: "TUR0606",
              luggage: 1,
              flightReturn: {
                flightcompany: 'Saudia Airlines',
                class: "Economic",
                timeOfDeparture: "14:10",
                timeOfArrival: "17:10",
                duration: "02:00",
                departure: "Jeddah (JED)",
                destination: "Istanbul (IST)",
                dateOfDeparture: "10/12/2023",
                dateOfArrival: "10/12/2023",
                stops: ['Egypt', 'Jordan'],
                flightNumber: "TUR0606",
                luggage: 2
              }
            }
          ],
          hotels: [
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
              },
              rooms: [
                {
                  id: 1,
                  title: 'Standard Room',
                  pension: 'LPD',
                  price: 350,
                  tva: true,
                  minguests: 1,
                  maxguests: 2,
                  view: 'Desert',
                  advantages: {
                    wifi: 'Free Wifi',
                    breakfast: 'Free breakfast',
                    sleeps: 2
                  }
                },
                {
                  id: 2,
                  title: 'Double Room',
                  pension: 'LPD',
                  price: 320,
                  tva: true,
                  minguests: 2,
                  maxguests: 4,
                  view: 'City',
                  advantages: {
                    wifi: 'Free Wifi',
                    breakfast: 'Free breakfast',
                    sleeps: 4
                  }
                }
              ],
              secondDestination: {
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
                  with elegant French hospitality.
                  `,
                },
                rooms: [
                  {
                    id: 1,
                    title: 'Two Bedroom Suite City View',
                    policy: '$25 Cancellation',
                    price: 350,
                    tva: true,
                    minguests: 2,
                    maxguests: 4,
                    advantages: {
                      wifi: 'Free Wifi',
                      breakfast: 'Free breakfast',
                      sleeps: 5
                    }
                  },
                  {
                    id: 2,
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
                ]
              }
            }
          ],
          transfers: [
            {
              model: 'Toyota Camry',
              class: 'Economy',
              type: 'Sedan',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 3,
              stops: []
            },
            {
              model: 'Train',
              class: 'Economy',
              type: 'Train',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: [
                {
                  type: 'Infant carrier',
                  weight: 'Up to 10 kg, 6 months'
                },
                {
                  type: 'Convertible seat',
                  weight: '9 – 25 kg, 0 – 7 years'
                },
                {
                  type: 'Booster seat',
                  weight: '22 – 36 kg, 6 – 12 years'
                }
              ],
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            },
            {
              model: 'Bus',
              class: 'Economy',
              type: 'Bus',
              price: '60',
              timeOfDeparture: '14:10',
              timeOfArrival: '17:10',
              duration: '02:00',
              departure: 'Jeddah Airport',
              destination: 'Swissôtel Al Maqam Makkah',
              dateOfDeparture: '01/12/2024',
              dateOfArrival: '01/12/2024',
              childseats: true,
              nbrpassengers: 5,
              luggage: 2,
              stops: ['Jeddah', 'Taif']
            }
          ],
          activities: [
            {
              id: 1,
              title: 'Al Baqi Cemetery',
              picture: 'assets/activities/1.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Jannat al-Baqīʿ is the oldest and the first Islamic cemetery of Medina in the Hejazi region of present-day Saudi Arabia. It is also known as Baqīʿ al-Gharqad.`,
              date: '01/11/2024',
              time: '09:30'
            },
            {
              id: 2,
              title: 'Mount Uhud',
              picture: 'assets/activities/2.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `Mount Uhud is a mountain north of Medina, in the Hejazi region of Saudi Arabia. It is 1,077 m high and 7.5 km long. It was the site of the second battle between the Islamic prophet Muhammad and the polytheists of his tribe of Quraysh.`,
              date: '08/11/2024',
              time: '08:00'
            },
            {
              id: 3,
              title: 'The Mosque of the Two Qiblahs',
              picture: 'assets/activities/3.jpg',
              location: 'Madinah, Saudi Arabia',
              description: `It is one of the earliest mosques in Islam. It was established during the Prophet’s time for an outlying neighborhood of Madinah. Its significance lies in the fact that after the Prophet received a commandment to change the qiblah or prayer direction from al-Masjid al-Aqsa in Jerusalem to al-Masjid al-Haram (Ka’bah) in Makkah, the entire congregation led by a companion in this mosque changed direction in prayer.`,
              date: '10/11/2024',
              time: '10:30'
            },
          ],
          visits: [
            {
              id: 1,
              title: 'Al Madinah Province',
              picture: 'assets/visits/1.jpg',
              description: `Madinah Munawwarah or Medina al-Munawwarah is the second most holy city for Muslims because there is Masjid-e- Nabawi where Muhammad's tomb 
              is located. Medina is 210 miles (340 km) north of Mecca and about 120 miles (190 km) from the Red Sea coast.`,
              date: '01/12/2024',
              duration: '02:00',
              placeVisit: 'Madinah',
              startTime: '09:00'
            },
            {
              id: 2,
              title: 'Jeddah Old Town Tour Al-Balad',
              picture: 'assets/visits/2.jpg',
              description: `This is half day experience to tour Al Balad as local call it which means “ the town” as reference to the base of Jeddah. 
              Al-Balad was founded in the 7th century and historically served as the centre of Jeddah. Al-Balad's defensive walls were torn down in the 1940s.`,
              date: '05/12/2024',
              duration: '03:00',
              placeVisit: 'Jeddah',
              startTime: '10:00'
            },
          ]
        }
      }
    ]
  }
}