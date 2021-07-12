import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Urls} from 'src/app/objects/urls.enum';
import {RoutingService} from '../../services/routing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  Urls = Urls;

  isMenuCollapsed = true;

  constructor(public routingService: RoutingService) {
  }

  routeTo(url: string) {
    this.isMenuCollapsed = true;
    this.routingService.routeTo(url);
  }
}
