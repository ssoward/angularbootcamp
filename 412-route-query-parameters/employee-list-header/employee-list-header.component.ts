import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TableOptions } from '../employees.service';

@Component({
  selector: 'app-employee-list-header',
  templateUrl: './employee-list-header.component.html',
  styleUrls: ['./employee-list-header.component.css']
})
export class EmployeeListHeaderComponent {
  @Input() propertyName: string;
  @Input() display: string;
  @Input() options: TableOptions;
  @Output() clicked = new EventEmitter<string>();
}
