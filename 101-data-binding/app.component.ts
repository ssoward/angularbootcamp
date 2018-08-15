import { Component } from '@angular/core';

@Component({
  selector: 'aapp-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employee = 'John Doe';
  // Implicit public, equivalent to
  // public employee: string;
  // (public is the default in TypeScript.)
  // Angular.io style guide recommends implicit public.

  // If the value is known at initialization, it is ok to do so here.
  // Later we will see the constructor used to set these properties
  daysWorked = 81;
  company = { name: 'Acme, Inc.' };
  friends = [
    {name:"Scott", age:40},
    {name:"Jerod", age:44},
    {name:"Mike", age:39}
  ];

  employeeOfTheWeek = {
    name: 'Jane Smith',
    picture: 'assets/avatar.png'
  };
}
