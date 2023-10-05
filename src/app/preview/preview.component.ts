import { Component } from '@angular/core';
import { faLocationDot, faCar, faBellConcierge, faUserLarge, faCaretRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  faLocationDot= faLocationDot
  faCar= faCar
  faBellConcierge= faBellConcierge
  faUserLarge= faUserLarge
  faCaretRight= faCaretRight
}
