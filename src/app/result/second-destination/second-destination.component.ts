import { Component, OnInit, VERSION, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-destination',
  templateUrl: './second-destination.component.html',
  styleUrls: ['./second-destination.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SecondDestinationComponent implements OnInit {

  roomSelectionStep = "step1"
  selectedRoom: string = ''
  selectedGroundServices: string[] = []
  localStorageSteps: any
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  dataHotels: any[] = []

  constructor(private toastr: ToastrService, private router: Router) { };
  ngOnInit(): void {
    this.localStorageSteps = JSON.parse(localStorage.getItem('steps') || '')

    this.dataHotels = [
      {
        _id: 1,
        hotelName: 'SOFITEL SHAHD AL MADINAH',
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
          title: 'SOFITEL SHAHD AL MADINAH',
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
        hotelName: 'PULLMAN ZAMZAM MADINAH',
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
          title: 'PULLMAN ZAMZAM MADINAH',
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

  goToNextStep = () => {
    if (this.selectedRoom != '' && this.roomSelectionStep == "step1") {
      this.roomSelectionStep = "step2"
    } else if (this.roomSelectionStep == "step2") {
      const data = {
        flight: true,
        firstDestination: true,
        secondDestination: true,
        transfer: true,
        summary: false,
      }
      localStorage.setItem('steps', JSON.stringify(data))
      window.location.href = '/result/transfer';
    } else {
      this.toastr.info("Please select a room for your 2nd destination before proceeding.")
    }
  }

  checkRoom(value: string) {
    this.selectedRoom = value;
  }

  checkGroundService(value: string) {
    if (!this.selectedGroundServices.includes(value)) {
      this.selectedGroundServices.push(value);
    }
    else {
      const index = this.selectedGroundServices.indexOf(value)
      this.selectedGroundServices.splice(index, 1);
    }
    console.log(this.selectedGroundServices);

  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}

