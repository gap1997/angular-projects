import { Component } from '@angular/core';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css'],
})
export class BatchlistComponent {
  public batches = [
    { name: 'PPA', fess: 35000, Duration: '4.5 months' },
    { name: 'LB', fess: 55000, Duration: '5 months' },
    { name: 'Angular', fess: 3000, Duration: '4 months' }
  ];
}
