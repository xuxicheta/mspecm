import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  link = this.getLink();

  constructor(
    private domSanitizer: DomSanitizer,
  ) {
  }


  getLink(): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.8481565289726!2d37.5372029159222!3d55.53501408049565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aac15919cec81%3A0x5df0cd14016d58d5!2z0L_RgC4g0KfQtdGH0LXRgNGB0LrQuNC5LCA1LCDQnNC-0YHQutCy0LAsINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sIDExNzA0Mg!5e0!3m2!1sru!2sru!4v1491741138177'
    );
  }
}


