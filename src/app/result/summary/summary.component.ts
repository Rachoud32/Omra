import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private pageService: PageService) { };
  ngOnInit(): void {
    this.pageService.setSpecificComponentPresent(true);
  }

  goToNextStep = () => {
      window.location.href = 'umrah-custom/result/motamar-informations'
  }
}
