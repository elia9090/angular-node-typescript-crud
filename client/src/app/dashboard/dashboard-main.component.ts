import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
   styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  searchBy: string;
  
  constructor() { }

  ngOnInit() {
  }

}