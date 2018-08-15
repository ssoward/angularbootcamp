import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { HttpClient, HttpParams } from '@angular/common/http';

const API_URL = '/api';

// Or connect to the hosted demo API (works from StackBlitz):
// const API_URL = 'https://api.angularbootcamp.com';

export interface Employee {
  first_name: string;
  last_name: string;
  hours_worked: number;
  hourly_wage: number;
}

export interface TableOptions {
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  filter: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Observable<Employee[]>;
  tableOptions: Observable<TableOptions>;

  constructor(route: ActivatedRoute, http: HttpClient) {

    this.tableOptions = route.queryParams.pipe(
      map(params => {
        return {
          sortBy: params['sortBy'],
          sortDirection: params['sortDirection'] || 'asc',
          filter: params['filter']
        };
      })
    );

    this.employees = this.tableOptions
      .pipe(
        switchMap(options => {

          let params = new HttpParams()
            .set('_sort', options.sortBy)
            .set('_order', options.sortDirection);

          if (options.filter) {
            params = params.set('q', options.filter);
          }

          return http
            .get<Employee[]>(API_URL + '/employees', { params });
        }),
        shareReplay(1)
      );
  }
}
