import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  isMenuCollapsed = true;

  @Input() activeUrl: string;

  constructor() {
  }

}
