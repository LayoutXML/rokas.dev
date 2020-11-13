import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../data/projects.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../objects/project';
import {UrlType} from '../../objects/url-type.enum';
import {faDocker, faGithub, faGooglePlay, faInternetExplorer} from '@fortawesome/free-brands-svg-icons';

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

  getIconByUrlType(type: UrlType) {
    switch (type) {
      case UrlType.GITHUB:
        return faGithub;
      case UrlType.GOOGLE_PLAY:
        return faGooglePlay;
      case UrlType.DOCKER_HUB:
        return faDocker;
      default:
        return faInternetExplorer;
    }
  }

  getNameByUrlType(type: UrlType) {
    switch (type) {
      case UrlType.GITHUB:
        return 'Source Code (GitHub)';
      case UrlType.GOOGLE_PLAY:
        return 'Google Play';
      case UrlType.DOCKER_HUB:
        return 'Docker Hub';
      default:
        return 'External Website';
    }
  }

}
