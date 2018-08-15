import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = '/api';

// Or connect to the hosted demo API (works from StackBlitz):
// const API_URL = 'https://api.angularbootcamp.com';

export interface Employee {
  first_name: string;
  last_name: string;
}

@Injectable({
  // This service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class EmployeeLoaderService {

  constructor(private http: HttpClient) { }

  loadEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/employees');
  }
}
