import { Component, OnInit } from '@angular/core';
import { faPlane, faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-first-transfer',
  templateUrl: './first-transfer.component.html',
  styleUrls: ['./first-transfer.component.css']
})
export class FirstTransferComponent implements OnInit {
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
  ngOnInit(): void {
   
  }
}
