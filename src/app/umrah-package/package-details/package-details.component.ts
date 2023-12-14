import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { packageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {
  @ViewChild('overviewsection') public overviewsection? : ElementRef;
  @ViewChild('flightsection') public flightsection? : ElementRef;
  @ViewChild('hotelsection') public hotelsection? : ElementRef;
  @ViewChild('transfersection') public transfersection? : ElementRef;
  @ViewChild('activitiessection') public activitiessection? : ElementRef;
  @ViewChild('programsection') public programsection? : ElementRef;
  @ViewChild('policiessection') public policiessection? : ElementRef;
  package: any
  
  constructor(private packageService: packageService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    let data = this.packageService.dataPackages()
    this.package = data.find((el) => id == el._id)
  }

  moveToOverviewSection() {
    this.overviewsection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
  }

  moveToFlightSection() {
    this.flightsection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }

  moveToHotelsSection() {
    this.hotelsection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }

  moveToTransferSection() {
    this.transfersection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }

  moveToActivitiesSection() {
    this.activitiessection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }

  moveToProgramSection() {
    this.programsection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }

  moveToPoliciesSection() {
    this.policiessection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }
}
