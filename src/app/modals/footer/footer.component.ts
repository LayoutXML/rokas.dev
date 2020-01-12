import {Component} from '@angular/core';
import {faGithub, faGooglePlay, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  faLinkedin = faLinkedinIn;
  faGooglePlay = faGooglePlay;
  faGithub = faGithub;
  date = new Date();

  constructor() {
  }

}
