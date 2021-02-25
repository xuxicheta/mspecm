import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    class: 'flex flex-col',
    style: 'background: url("/assets/bg_header.png"); height: 140px;'
  }
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
