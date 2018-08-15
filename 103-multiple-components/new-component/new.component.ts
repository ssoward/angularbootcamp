import { Component } from '@angular/core';

@Component({
  selector: 'new-component',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Some New component</span>
        <div>Search all components</div>
        <search-box></search-box>
      </div>
    </div>
  `
})
export class NewComponent { }
