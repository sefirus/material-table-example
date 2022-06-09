import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';                    //Specially for sorting
import { ViewChild } from '@angular/core';                           //Specially for sorting
import { MatTableDataSource } from '@angular/material/table';

export interface Procedure {
  id: number;
  name: string;
  description: string;
  duration: number;
  cost: number;
}

const DATA_SOURCE: Procedure[] = [
  {
    "id": 1,
    "name": "first procedure",
    "cost": 10,
    "description": "first procedure desription",
    "duration": 30
  },
  {
    "id": 2,
    "name": "second procedure",
    "cost": 25,
    "description": "sknd procedure desription",
    "duration": 25
  },
  {
    "id": 3,
    "name": "third procedure",
    "cost": 30,
    "description": "thrd procedure desription",
    "duration": 10
  },
  {
    "id": 4,
    "name": "fourth procedure",
    "cost": 45,
    "description": "frth procedure desription",
    "duration": 40
  },
  {
    "id": 5,
    "name": "fifth procedure",
    "cost": 50,
    "description": "fifth procedure desription",
    "duration": 35
  },
  {
    "id": 6,
    "name": "six procedure",
    "cost": 65,
    "description": "six procedure desription",
    "duration": 15
  },
  {
    "id": 7,
    "name": "sevens procedure",
    "cost": 70,
    "description": "sevens procedure desription",
    "duration": 10
  }
]

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {
  dataSource: MatTableDataSource<Procedure> = new MatTableDataSource(DATA_SOURCE);       //Special data class to handle a table
  displayedColumns: string[] = ['name', 'cost', 'description', 'duration', 'button'];    //List of column names to be displayed
  @ViewChild(MatSort) sort?: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort!;
  }

  onButtonclick(element : Procedure){
    console.log(element);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
