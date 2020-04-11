import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../data/projects.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../objects/project';

@Component({
  selector: 'app-project',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.less']
})
export class ProjectViewComponent implements OnInit {
  data: Project;

  constructor(public projectsService: ProjectsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.data = this.projectsService.getProjectByCodename(params.codename);
      if (!this.data) {
        this.router.navigateByUrl('404');
      }
    });
  }

}
