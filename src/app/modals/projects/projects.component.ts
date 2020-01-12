import {Component} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {

  isExpanded = false;

  constructor() {
  }

  expand(element: HTMLElement): void {
    this.isExpanded = !this.isExpanded;
    setTimeout(() => { // on the next tick
      element.scrollIntoView({behavior: 'smooth'});
    });
  }

}
