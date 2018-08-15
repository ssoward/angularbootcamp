import { Component } from '@angular/core';

@Component({
  selector: 'scotts-module-component',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Scott's Module</span>
        <div>Component shared via module</div>
      </div>
    </div>
  `
})
export class ScottsModuleComponent { }
