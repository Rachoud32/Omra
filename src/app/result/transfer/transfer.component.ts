import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  dataVehicle: any[] = []
  filteredDataVehicle: any[] = []
  collapsed = true;
  selectedTransfer: string = '';
  selectedDetailTransfer: string = '';


  constructor(private toastr: ToastrService, private router: Router, private transferService: TransferService) { }
  ngOnInit(): void {
    this.dataVehicle = this.transferService.vehiclesData()
    this.filteredDataVehicle = this.dataVehicle
  }

  goToNextStep = () => {
    if (this.selectedTransfer != '') {
      const data = {
        flight: true,
        firstDestination: true,
        secondDestination: true,
        transfer: true,
        summary: true,
      };
      localStorage.setItem('steps', JSON.stringify(data));
      window.location.href = 'umrah-custom/result/summary';
    } else {
      this.toastr.info('Please select a vehicle before proceeding.');
    }
  };

  checkTransfer(value: string) {
    this.selectedTransfer = value;
  }
  collapsedDetailTransfer(value: string) {
    this.selectedDetailTransfer = value;
  }

  filterFN(value: any) {
    this.filteredDataVehicle = this.dataVehicle.filter((data: any) => data.departure === value.departure && data.destination === value.destination)
  }
}
