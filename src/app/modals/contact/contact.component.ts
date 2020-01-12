import {Component} from '@angular/core';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {
  faMapMarker = faMapMarkerAlt;
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedinIn;

  constructor() {
  }

}
