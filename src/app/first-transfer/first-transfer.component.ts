import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlane, faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-first-transfer',
  templateUrl: './first-transfer.component.html',
  styleUrls: ['./first-transfer.component.css']
})
export class FirstTransferComponent implements OnInit {
  faPlane = faPlane
  faArrowRightLong = faArrowRightLong
  faCaretRight = faCaretRight

  selectedTransfer: string = '';

  ngOnInit(): void {
   
  }

  constructor(private toastr: ToastrService, private router: Router) { };

  goToNextStep = () => {
    if (this.selectedTransfer != '') {
      this.router.navigate(['/result/first-destination']);
    } else {
      this.toastr.info("Please select a flight before proceeding.")
    }
  }

  checkTransfer(value: string) {
    this.selectedTransfer = value;
  }
}
