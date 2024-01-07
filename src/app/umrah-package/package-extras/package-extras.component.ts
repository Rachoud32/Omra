import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { packageService } from 'src/app/services/package.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-package-extras',
  templateUrl: './package-extras.component.html',
  styleUrls: ['./package-extras.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PackageExtrasComponent implements OnInit {
  selectedGroundServices: any = {firstDest:[], secondDest:[]}
  package: any;
  isShowMore: boolean = false;
  hotelFirstDest: any; 
  hotelSecondDest: any; 
  step = 'step1'

  constructor(private router: Router, private packageService: packageService, private pageService: PageService, private route: ActivatedRoute) { };

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    let data = this.packageService.dataPackages();
    this.package = data.find((el) => id == el._id);
    this.hotelFirstDest = JSON.parse(localStorage.getItem('selectedroomFirstDestData') || '')
    this.hotelSecondDest = JSON.parse(localStorage.getItem('selectedroomSecondDestData') || '')
  }

  checkGroundService(value: string, step: string) {
    if (step == 'step1') {
      if (!this.selectedGroundServices.firstDest.includes(value)) {
        this.selectedGroundServices.firstDest.push(value);
      }
      else {
        const index = this.selectedGroundServices.firstDest.indexOf(value)
        this.selectedGroundServices.firstDest.splice(index, 1);
      }
    }

    if (step == 'step2') {
      if (!this.selectedGroundServices.secondDest.includes(value)) {
        this.selectedGroundServices.secondDest.push(value);
      }
      else {
        const index = this.selectedGroundServices.secondDest.indexOf(value)
        this.selectedGroundServices.secondDest.splice(index, 1);
      }
    }
  }

  goToNextStep = () => {
    // if (this.selectedGroundServices.firstDest.length > 0) {
      this.step = 'step2'
    // }
  }

  showMore() {
    this.isShowMore = !this.isShowMore;
  }

  displayMore(text: string) {
    if (this.isShowMore) {
      return text 
    } else { 
      return text.slice(0, 180) + '...'
    }
  }
}
