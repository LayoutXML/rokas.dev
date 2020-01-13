import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  isMenuCollapsed = true;

  @Input() activeUrl: string;

  constructor() {
  }

}
