import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { packageService } from 'src/app/services/package.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-package-extras',
  templateUrl: './package-extras.component.html',
  styleUrls: ['./package-extras.component.css']
})
export class PackageExtrasComponent {
  selectedGroundServices: string[] = []
  selectedRoomAmenities: string = ''

  constructor(private router: Router, private packageService: packageService, private pageService: PageService) { };

  checkGroundService(value: string) {
    if (!this.selectedGroundServices.includes(value)) {
      this.selectedGroundServices.push(value);
    }
    else {
      const index = this.selectedGroundServices.indexOf(value)
      this.selectedGroundServices.splice(index, 1);
    }
  }

  collapsedRoomAmenities(value: any) {
    this.selectedRoomAmenities = value
  }
}
