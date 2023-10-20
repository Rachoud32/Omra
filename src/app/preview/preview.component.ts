import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  ngOnInit(): void {
    if (window.location.href.split('/').pop() === 'result') {
      window.location.replace('result/flight')
    }
  }
} 
