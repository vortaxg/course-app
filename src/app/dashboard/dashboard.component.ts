import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<app-recipes></app-recipes>
            <app-shopping-list></app-shopping-list>`,

  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
