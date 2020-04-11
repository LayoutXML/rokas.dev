import {Component} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent {
  faTimes = faTimes;

  constructor() {
  }

}
