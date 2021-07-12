import {Component} from '@angular/core';
import {RoutingService} from '../../services/routing.service';
import {Urls} from '../../objects/urls.enum';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.less']
})
export class IntroComponent {
  Urls = Urls;

  constructor(public routingService: RoutingService) {
  }
}
