import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';
import { Batch } from 'mongodb';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css'],
})
export class BatchdetailsComponent implements OnInit
{
  public batches: any = [];  //empty arrray 
  constructor(public mobj: MarvellousService)// dependency injection
  { 

  }
  ngOnInit()  //angular on intailzation
  {
    this.batches =this.mobj.getbatchdetails();
  }
}
 