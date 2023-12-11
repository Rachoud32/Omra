import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { packageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {
  package: any
  constructor(private packageService: packageService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    let data = this.packageService.dataPackages()
    console.log('====================================');
    console.log();
    console.log('====================================');
    this.package = data.find((el) => id == el._id)
    console.log('====================================');
    console.log(this.package);
    console.log('====================================');
  }
}
