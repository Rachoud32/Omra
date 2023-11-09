import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  SearchBar: boolean = true;
  category: string = '';
  dataBsTargetValue = ''
  ariaControls = ''

  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate | null;
  toDate!: NgbDate | null;
  todayDate!: NgbDate;
  today: any

  formattedFromDate: string = ''
  formattedToDate: string = ''
  constructor(private router: Router, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private config: NgSelectConfig, private toastr: ToastrService) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if ((val.url == '/' || val.url == '/result/payment') || (val.url == '/' || val.url == '/result/motamar-informations') || (val.url == '/' || val.url == '/result/summary')) {
          this.SearchBar = false;
        } else {
          this.SearchBar = true;
        }
        if (val.url === "/result/flight") {
          this.dataBsTargetValue = '#flightfilter';
          this.ariaControls = 'flightfilter';
          this.category = 'flight(s)'
        }
        if (val.url === '/result/first-destination' || val.url === '/result/second-destination') {
          this.dataBsTargetValue = '#destinationfilter';
          this.ariaControls = 'destinationfilter';
          this.category = 'room(s)'
        }
        if (val.url === "/result/first-transfer") {
          this.dataBsTargetValue = '#transferfilter';
          this.ariaControls = 'transferfilter';
          this.category = 'vehicle(s)'
        }
      }
    });

  }
  ngOnInit(): void {
    const dates = JSON.parse(localStorage.getItem('dates') || '')
    this.fromDate = dates.fromDate;
    this.toDate = dates.toDate;
    this.formattedFromDate = this.formatter.format(this.fromDate).substring(5)
    this.formattedToDate = this.formatter.format(this.toDate).substring(5)
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);

    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  checkDates() {
    if (this.fromDate == null || this.toDate == null) {
      this.toastr.info("Please select both arrival and departure date.")
      return false
    } else {
      let data = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      }
      localStorage.setItem('dates', JSON.stringify(data))
      return true
    }
  }



}
