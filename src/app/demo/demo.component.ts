import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent  {

  @Output() public MyEvent = new EventEmitter();
  public onmessage():void{
  
    this.MyEvent.emit('hello child compoent')
  }
}

 