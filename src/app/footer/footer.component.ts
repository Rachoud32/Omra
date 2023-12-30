import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isSpecificComponentPresent: boolean = false;

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.pageService.isSpecificComponentPresent$.subscribe((isPresent: boolean) => {
      this.isSpecificComponentPresent = isPresent;
    });
  }
}
