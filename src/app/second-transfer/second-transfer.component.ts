import { Component } from '@angular/core';
import { faPlane, faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-second-transfer',
  templateUrl: './second-transfer.component.html',
  styleUrls: ['./second-transfer.component.css']
})
export class SecondTransferComponent {
  faPlane = faPlane
  faArrowRightLong = faArrowRightLong
  faCaretRight = faCaretRight

  selectedTransfer: string = 'transfer1';
  transfer1 = 'transfer1';
  transfer2 = 'transfer2';
  checkOption() {
    this.selectedTransfer = this.transfer1;
  }
  checkOption2() {
    this.selectedTransfer = this.transfer2;
  }
}
