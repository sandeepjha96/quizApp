import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../quiz/Interfaces/quiz';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('tableValue') value: Quiz[]=[];
  tableValue: Quiz[]=[];
  constructor() { }

  ngOnInit(): void {
    this.tableValue = [...this.value];
  }

}
