import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TransitComponent } from './transit/transit.component';
import { HttpClientModule } from '@angular/common/http';
import { TransitService } from './transit/transit.service';


@NgModule({
  declarations: [
    AppComponent,
    TransitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
