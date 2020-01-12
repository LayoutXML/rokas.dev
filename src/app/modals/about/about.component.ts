import {Component} from '@angular/core';
import {faGithub, faGooglePlay, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  faGithub = faGithub;
  faGooglePlay = faGooglePlay;
  faLinkedin = faLinkedinIn;

  constructor() {
  }

}
