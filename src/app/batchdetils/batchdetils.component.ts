import { Component } from '@angular/core';

@Component({
  selector: 'app-batchdetils',
  templateUrl: './batchdetils.component.html',
  styleUrls: ['./batchdetils.component.css'],
})
export class BatchdetilsComponent {
  public batches = [
  
    { name: 'PPA', fess: 35000, Duration: '4.5 months'},
    { name: 'LB', fess: 55000, Duration: '5 months'},
    { name: 'Angular', fess: 3000, Duration: '4 months'},
    { name: 'python', fess: 6000, Duration: '2 months' }
    
  ];
}
