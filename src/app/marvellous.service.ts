import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarvellousService {
  getbatchlist() {
    throw new Error('Method not implemented.');
  }
  public getbatchdetails() {
    return [
      { name: 'PPA', fess: '10000', Duration: '6 months' },
      { name: 'LB', fess: '14000', Duration: '5 months' },
      { name: 'Angular', fess: '12000', Duration: '4.5 months' },
      { name: 'LSP', fess: '10000', Duration: '7 months' },
    ];
  }

  constructor() {}
}
