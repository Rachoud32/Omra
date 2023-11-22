import { Component, OnInit, VERSION, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import PhotoSwipeLightbox from 'photoswipe';

@Component({
  selector: 'app-first-destination',
  templateUrl: './first-destination.component.html',
  styleUrls: ['./first-destination.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FirstDestinationComponent implements OnInit {
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

  lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    // pswpModule: () => import('photoswipe/dist/photoswipe.esm.js'),
  });

  goToNextStep = () => {
    if (this.selectedRoom != '' && this.roomSelectionStep == "step1") {
      this.roomSelectionStep = "step2"
    } else if (this.roomSelectionStep == "step2") {
      const data = {
        flight: true,
        firstDestination: true,
        secondDestination: true,
        transfer: false,
        summary: false,
      }
      localStorage.setItem('steps', JSON.stringify(data))
      window.location.href = '/result/second-destination';
    } else {
      this.toastr.info("Please select a room for your 1st destination before proceeding.")
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
  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}

