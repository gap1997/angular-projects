import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-event',
  templateUrl: './marvellous-event.component.html',
  styleUrls: ['./marvellous-event.component.css'],
})
export class MarvellousEventComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  public data = " ";
  // It is condiderd as our event handler
  public myaction() {
   
    console.log('submit Button clicked...');
  }
  public myactionevent() {
    this.data = "button clicked";
  }
  public myactionnew(value: any)
  {
    console.log(value)
  }
  
}