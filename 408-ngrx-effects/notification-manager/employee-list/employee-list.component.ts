import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AckEmployeeAction, getCurrentEmployees, getNewEmployees } from '../../employees.state';
import { AppState } from '../../state';

/*
  Components now pass and receive information between itself
  and the store
*/
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  curEmployees: Observable<string[]>;
  newEmployees: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.curEmployees = store.select(getCurrentEmployees);
    this.newEmployees = store.select(getNewEmployees);
  }

  ackEmp(employee: string) {
    this.store.dispatch(new AckEmployeeAction(employee));
  }
}
