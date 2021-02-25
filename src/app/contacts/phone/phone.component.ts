import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  host: { class: 'p-1 inline-block' },
})
export class PhoneComponent {
  @Input() link: string;

}
