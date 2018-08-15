import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = '/api';

@Injectable({
  providedIn: 'root'
})
export class SwService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<any[]>(API_URL + '/employees');
  }
}
