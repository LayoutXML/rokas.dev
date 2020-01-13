import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  isMenuCollapsed = true;
  isLocked = false;
  url: string;

  @Input()
  set activeUrl(url: string) {
    if (!this.isLocked) {
      this.url = url;
    }
  }

  constructor() {
  }

  onClick(url: string) {
    this.isLocked = true;
    this.url = '/' + url;
    window.history.pushState(null, null, url);
    setTimeout(() => {
      this.isLocked = false;
    }, 1000);
  }

}
