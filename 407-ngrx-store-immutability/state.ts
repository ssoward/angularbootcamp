import { EmployeeState } from './employees.state';
import { PositionState } from './positions.state';

export const ACK_ALL = 'ACK_ALL';
export class AckAllAction {
  readonly type = ACK_ALL;
}
export const DATA_RECEIVED = 'DATA_RECEIVED';
export class DataReceivedAction {
  readonly type = DATA_RECEIVED;
  // note: readonly in a constructor acts like public, protected, or private
  // and creates a property on the object (with public visibility)
  constructor(readonly data: AppState) { }
}

export interface AppState {
  employees: EmployeeState;
  positions: PositionState;
}
