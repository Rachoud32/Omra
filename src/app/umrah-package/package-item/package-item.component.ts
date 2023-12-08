import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  // constructor(private toastr: ToastrService, private router: Router, private packageService: packageService) { };
  ngOnInit(): void {
    
  }
}
