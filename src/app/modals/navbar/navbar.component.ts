import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RoutingService} from '../../services/routing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  isMenuCollapsed = true;

  constructor(public routingService: RoutingService) {
  }
}
