import {Injectable} from '@angular/core';
import {Project} from '../objects/project';
import {Publication} from '../objects/publication';

// Simulation of a simplified backend server
// Rationale: Data is stored on the frontend as there is no backend. Website is made to be hosted on GitHub Pages which only supports frontend hosting
// Note: I am not using any maps here because typescript does not support maps with objects and for a small dataset like this, a simple search method (getProjectByCodename) is sufficient
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    this.getAppListManager(),
    this.getTwelveish(),
    this.getSabs(),
    this.getTickTock(),
    this.getListLauncher()
  ];

  constructor() {
  }

  public getAllProjects(): Project[] {
    return this.projects;
  }

  public getProjectByCodename(codename: string): Project {
    const projectsByName = this.projects.filter(project => project.codename === codename);
    return projectsByName.length > 0 ? projectsByName[0] : null;
  }

  private getAppListManager(): Project {
    const appListManager = new Project();
    appListManager.title = 'AppListManager';
    appListManager.codename = appListManager.title.toLowerCase();
    appListManager.summary = 'AppListManager is an easy to use Android library, which minimizes developing time when working on application or activity lists.';
    return appListManager;
  }

  private getTwelveish(): Project {
    const androidAuthority = new Publication();
    androidAuthority.title = 'Android Authority';
    androidAuthority.codename = 'android_authority';

    const twelveish = new Project();
    twelveish.title = 'Twelveish';
    twelveish.codename = twelveish.title.toLowerCase();
    twelveish.summary = 'Twelveish is a unique Wear OS (Android Wear) Watch Face that displays the approximate time in words (in multiple languages).';
    twelveish.publications = [androidAuthority];
    return twelveish;
  }

  private getSabs(): Project {
    const lifehacker = new Publication();
    lifehacker.title = 'Lifehacker';
    lifehacker.codename = lifehacker.title.toLowerCase();

    const xda = new Publication();
    xda.title = 'xda-developers';
    xda.codename = xda.title;

    const gizmodo = new Publication();
    gizmodo.title = 'Gizmodo';
    gizmodo.codename = gizmodo.title.toLowerCase();

    const sabs = new Project();
    sabs.title = 'SABS';
    sabs.codename = sabs.title.toLowerCase();
    sabs.summary = 'SABS was a system-wide rootless adblocker, package disabler and a permission manager with more than 100,000 downloads.';
    sabs.publications = [lifehacker, xda, gizmodo];
    return sabs;
  }

  private getTickTock(): Project {
    const ticktock = new Project();
    ticktock.title = 'TickTock Wear';
    ticktock.codename = 'ticktock';
    ticktock.summary = 'TickTock Wear adds a ticking sound to your Wear OS smart watch.';
    return ticktock;
  }

  private getListLauncher(): Project {
    const listlauncher = new Project();
    listlauncher.title = 'List-Launcher';
    listlauncher.codename = 'listlauncher';
    listlauncher.summary = 'List-Launcher is an amoled Android launcher that displays applications in a list. Currently in alpha stage.';
    return listlauncher;
  }
}
