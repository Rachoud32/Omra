import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { packageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PackageItemComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router, private packageService: packageService, private sanitizer: DomSanitizer,) { };
  
  dataPackages: any[] = []

  ngOnInit(): void {
    this.dataPackages = this.packageService.dataPackages()
    console.log(this.getMaxRating());
    console.log(this.getMinPrice());
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getMaxRating(): number {
    const values = this.dataPackages.map((item:any) => item.packageRating);
    return Math.max(...values);
  }

  getMinPrice(): number {
    const values = this.dataPackages.map((item:any) => item.packagePrice);
    return Math.min(...values);
  }
  
}
