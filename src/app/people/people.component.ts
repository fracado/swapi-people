import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: any = {};
  currentPage: number = 1;

  constructor(private peopleService: PeopleService) { }

  getPeople() {
    this.peopleService.getPeople(this.currentPage).subscribe((data: {}) => {
      console.log(data);
      this.people = data;
    });
  }

  ngOnInit() {
    this.getPeople();
  }
}
