import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  isMenuCollapsed = true;
  isLocked = false;
  url: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  @Input()
  set activeUrl(url: string) {
    if (!this.isLocked) {
      this.url.next(url);
    }
  }

  constructor() {
  }

  onClick(url: string) {
    this.isLocked = true;
    this.url.next(url);
    window.history.replaceState(null, null, url);
    setTimeout(() => {
      this.isLocked = false;
    }, 1000);
  }

}
