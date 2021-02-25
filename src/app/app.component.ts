import { Component } from '@angular/core';
import { fadeAnimation } from './layout/animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: { class: 'block ' },
  animations: [
    fadeAnimation,
  ]
})
export class AppComponent {
}
