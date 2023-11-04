import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  ngOnInit(): void {
    if (window.location.href.split('/').pop() === 'result') {
      window.location.replace('result/flight')
    }
  }
}
