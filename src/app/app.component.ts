import { Component } from '@angular/core';
import { TransitComponent } from './transit/transit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Commuter rail schedule';
}
