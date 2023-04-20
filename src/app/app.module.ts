import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { BatchdetilsComponent } from './batchdetils/batchdetils.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchlistComponent,
    BatchdetilsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
