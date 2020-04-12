import {Component, HostListener, OnInit} from '@angular/core';
import {faChevronDown, faChevronLeft, faChevronRight, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {ProjectsService} from '../../data/projects.service';
import {Project} from '../../objects/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  leftIcon = faChevronLeft;
  rightIcon = faChevronRight;

  data: Project[];

  screenWidth = 640;
  isExpanded = false;
  numberOfCardsShown = 1;
  minCardIndex = 0;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.data = this.projectsService.getAllProjects();
    this.recalculateNumberOfCards();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.recalculateNumberOfCards();
  }

  getSubsetData(): Project[] {
    if (this.minCardIndex >= 0 && this.minCardIndex + this.numberOfCardsShown <= this.data.length) {
      return this.data.slice(this.minCardIndex, this.minCardIndex + this.numberOfCardsShown);
    }
    let projectList = [];
    projectList = projectList.concat(this.data.slice(this.minCardIndex, this.data.length));
    projectList = projectList.concat(this.data.slice(0, this.numberOfCardsShown - projectList.length));
    return projectList;
  }

  recalculateNumberOfCards() {
    if (this.screenWidth >= 992) {
      this.numberOfCardsShown = 4;
    } else if (this.screenWidth >= 768) {
      this.numberOfCardsShown = 3;
    } else if (this.screenWidth >= 576) {
      this.numberOfCardsShown = 2;
    } else {
      this.numberOfCardsShown = 1;
    }
  }

  scrollLeft() {
    this.minCardIndex--;
    if (this.minCardIndex <= -this.data.length) {
      this.minCardIndex = this.data.length - 1;
    }
  }

  scrollRight() {
    this.minCardIndex++;
    if (this.minCardIndex >= this.data.length) {
      this.minCardIndex = 0;
    }
  }
}
