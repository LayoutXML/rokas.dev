import {Component} from '@angular/core';
import {RoutingService} from '../../services/routing.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.less']
})
export class IntroComponent {

  constructor(private routingService: RoutingService) {
  }
}
