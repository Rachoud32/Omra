import { Component, OnInit } from '@angular/core';
import { faLocationDot, faCar, faBellConcierge, faUserLarge, faCaretRight, faPlane, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  linkValue: string = ''
  faLocationDot = faLocationDot
  faCar = faCar
  faBellConcierge = faBellConcierge
  faUserLarge = faUserLarge
  faCaretRight = faCaretRight
  faPlane = faPlane
  faCaretDown = faCaretDown
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.updateLinkValue(); // Initialize the linkValue property
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateLinkValue();
      }
    });
  }

  private updateLinkValue(): void {
    this.linkValue = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || '';
  }
}
