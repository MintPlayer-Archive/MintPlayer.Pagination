import { Component } from '@angular/core';
import { PaginationRequest, PaginationResponse } from '@mintplayer/pagination';
import { Person } from './interfaces/person';

@Component({
  selector: 'mintplayer-ng-pagination-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-pagination-demo';
  request: PaginationRequest = {
    perPage: 20,
    page: 5,
    sortProperty: 'Name',
    sortDirection: 'ascending'
  };
  response: PaginationResponse<Person> = {
    perPage: 20,
    page: 5,
    totalPages: 8,
    totalRecords: 150,
    data: [{
      firstName: 'John',
      lastName: 'Doe',
      birthDate: new Date(1950, 0, 1)
    }]
  };
}
