import {Injectable} from '@angular/core';
import {Project} from '../objects/project';
import {Publication} from '../objects/publication';

// Class simulates data which would otherwise be retrieved from the backend
// It is not representative of my code, as it is written for quick and efficient usage of data available on the frontend
// Data is stored on the frontend as there is no backend - whole website is made to be hosted on GitHub Pages
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [];

  constructor() {
    // AppListManager
    const appListManager = new Project();
    appListManager.title = 'AppListManager';
    appListManager.codename = appListManager.title.toLowerCase();
    appListManager.summary = 'AppListManager is an easy to use Android library, which minimizes developing time when working on application or activity lists.';
    this.projects.push(appListManager);

    // Twelveish
    const androidAuthority = new Publication();
    androidAuthority.title = 'Android Authority';
    androidAuthority.codename = 'android_authority';

    const twelveish = new Project();
    twelveish.title = 'Twelveish';
    twelveish.codename = twelveish.title.toLowerCase();
    twelveish.summary = 'Twelveish is a unique Wear OS (Android Wear) Watch Face that displays the approximate time in words (in multiple languages).';
    twelveish.publications = [androidAuthority];
    this.projects.push(twelveish);

    // SABS
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
    this.projects.push(sabs);

    // TickTock Wear
    const ticktock = new Project();
    ticktock.title = 'TickTock Wear';
    ticktock.codename = 'ticktock';
    ticktock.summary = 'TickTock Wear adds a ticking sound to your Wear OS smart watch.';
    this.projects.push(ticktock);

    // List-Launcher
    const listlauncher = new Project();
    listlauncher.title = 'List-Launcher';
    listlauncher.codename = 'listlauncher';
    listlauncher.summary = 'List-Launcher is an amoled Android launcher that displays applications in a list. Currently in alpha stage.';
    this.projects.push(listlauncher);
  }
}
