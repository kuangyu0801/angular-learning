import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  
  // create an array of sales person
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "some1@gmail.com", 5000),
    new SalesPerson("John", "Doe", "some2@gmail.com", 7000),
    new SalesPerson("Clair", "Murphy", "some3@gmail.com", 9000),
    new SalesPerson("Mai", "Troung", "some4@gmail.com", 6000),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
