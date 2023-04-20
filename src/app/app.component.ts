import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Batches = ["ppa", "lb", "python", "angular", "lsp"]

  public fess = [12, 23, 45, 56, 5859]
}