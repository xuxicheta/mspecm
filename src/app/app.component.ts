import { Component } from '@angular/core';
import { fadeAnimation } from './layout/animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeAnimation,
  ]
})
export class AppComponent {
}
