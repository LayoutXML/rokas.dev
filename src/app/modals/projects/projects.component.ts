import {Component, HostListener, OnInit} from '@angular/core';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {RoutingService} from '../../services/routing.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  upIcon = faChevronUp;
  downIcon = faChevronDown;
  screenWidth = 1080;
  isExpanded = false;

  constructor(private routingService: RoutingService) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }

}
