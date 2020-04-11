import {Component, HostListener, OnInit} from '@angular/core';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {ProjectsService} from '../../data/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  upIcon = faChevronUp;
  downIcon = faChevronDown;
  screenWidth = 640;
  isExpanded = false;

  constructor(public projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }

  isProjectDisplayed(index: number) {
    if (this.isExpanded || index < 3) {
      return true;
    }

    if (index === 3) {
      return (this.screenWidth >= 992);
    }

    return false;
  }
}
