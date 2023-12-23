import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrowed',
  templateUrl: './borrowed.component.html',
  styleUrls: ['./borrowed.component.css']
})
export class BorrowedComponent implements OnInit{
  borrow:boolean = false
  ngOnInit(): void {
    this.borrow = true
  }
}
