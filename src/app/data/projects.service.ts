import {Injectable} from '@angular/core';
import {Project} from '../objects/project';
import {Publication} from '../objects/publication';
import {Link} from '../objects/link';
import {UrlType} from '../objects/url-type.enum';

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
    this.getVanillaMinecraftDocker(),
    this.getPaperMcDocker(),
    this.getTickTock()
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
    const googlePlay = new Link();
    googlePlay.url = 'https://play.google.com/store/apps/details?id=com.layoutxml.applistmanager';
    googlePlay.type = UrlType.GOOGLE_PLAY;

    const github = new Link();
    github.url = 'https://github.com/LayoutXML/AppListManager';
    github.type = UrlType.GITHUB;

    const appListManager = new Project();
    appListManager.title = 'AppListManager';
    appListManager.codename = appListManager.title.toLowerCase();
    appListManager.summary = 'AppListManager is an easy to use Android library, which minimizes developing time when working with application or activity lists.';
    appListManager.description = '<p>\n' +
      '              <a href="https://android-arsenal.com/details/1/7143"><img src="https://img.shields.io/badge/Android%20Arsenal-AppListManager-green.svg?style=flat" alt="Android Arsenal" /></a>\n' +
      '              <a href="https://travis-ci.org/LayoutXML/AppListManager"><img src="https://travis-ci.org/LayoutXML/AppListManager.svg?branch=master" alt="Build Status" /></a>\n' +
      '              <a href="https://github.com/LayoutXML/AppListManager/blob/master/LICENSE"><img src="https://img.shields.io/github/license/LayoutXML/AppListManager.svg" alt="GitHub" /></a>\n' +
      '              <a href="https://jitpack.io/#LayoutXML/AppListManager"><img src="https://jitpack.io/v/LayoutXML/AppListManager.svg" alt="Version" /></a>\n' +
      '              <img src="https://img.shields.io/badge/API-14%2B-brightgreen.svg?style=flat" alt="API" />\n' +
      '              <a href="https://github.com/LayoutXML/AppListManager#donate"><img src="https://img.shields.io/badge/%24-Donate-blue.svg" alt="Donate" /></a>\n' +
      '            </p>\n' +
      '            <p>\n' +
      '              AppListManager is easy to use Android library, which minimizes developing time when working on application or activity lists. You no longer have to worry about asynchronous tasks, memory leaks and intent receivers. This library\n' +
      '              provides a simple way to receive application and activity lists as they change.</p>\n' +
      '            <p>\n' +
      '              To receive application and activity lists using this library you must implement listeners and invoke methods. Additionally, to receive these lists automatically you must also register a receiver (in the manifest file and code). All\n' +
      '              listeners must be registered, and all unfinished tasks must be destroyed. Guide below explains exactly how to do all that. You can also inspect the included sample app that uses most of the features.\n' +
      '            </p>\n' +
      '            <p>\n' +
      '              <a href="https://play.google.com/store/apps/details?id=com.layoutxml.applistmanager">Download sample app from the Google Play store</a>.\n' +
      '            </p>\n' +
      '            <p>\n' +
      '              <strong>Step 1: Add the JitPack repository in your root build.gradle at the end of repositories:</strong>\n' +
      '            </p>\n' +
      '            <pre><code>allprojects {\n' +
      '    repositories {\n' +
      '        ...\n' +
      '          maven { url \'https://jitpack.io\' }\n' +
      '    }\n' +
      '}\n' +
      '</code></pre>\n' +
      '            <p>\n' +
      '              <strong>Step 2. Add the dependency:</strong>\n' +
      '            </p>\n' +
      '\n' +
      '            <pre><code>dependencies {\n' +
      '    implementation \'com.github.LayoutXML:AppListManager:2.1.0\'\n' +
      '}\n' +
      '</code></pre>\n' +
      '            <p>\n' +
      '              Follow the steps on the GitHub repository to implement this library in your project.\n' +
      '            </p>';
    appListManager.links = [googlePlay, github];
    appListManager.googlePlayBannerUrl = 'https://play.google.com/store/apps/details?id=com.layoutxml.applistmanager&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
    return appListManager;
  }

  private getTwelveish(): Project {
    const googlePlay = new Link();
    googlePlay.type = UrlType.GOOGLE_PLAY;
    googlePlay.url = 'https://play.google.com/store/apps/details?id=com.layoutxml.twelveish';

    const github = new Link();
    github.type = UrlType.GITHUB;
    github.url = 'https://github.com/LayoutXML/Twelveish';

    const androidAuthority = new Publication();
    androidAuthority.title = 'Android Authority';
    androidAuthority.codename = 'android_authority';
    androidAuthority.url = 'https://www.androidauthority.com/best-android-wear-watch-faces-581582/';
    androidAuthority.archiveUrl = 'https://web.archive.org/web/20190120125903/https://www.androidauthority.com/best-android-wear-watch-faces-581582/';
    androidAuthority.articleName = '10 best Wear OS watch faces';

    const twelveish = new Project();
    twelveish.title = 'Twelveish';
    twelveish.codename = twelveish.title.toLowerCase();
    twelveish.summary = 'Twelveish is a unique Wear OS (Android Wear) Watch Face that displays the approximate time in words in many languages. More than 30,000 downloads on the Google Play store.';
    twelveish.description = '<p>\n' +
      '              Lightweight but feature packed Wear OS Watch Face that displays time in words.\n' +
      '            </p>\n' +
      '            <p>\n' +
      '              "[Twelveish] adds a bit of comedy. Along with the full time, it also gives you estimations in large words in the middle of the display" <strong>--Android Authority, "10 best Wear OS watch faces"</strong>\n' +
      '            </p>\n' +
      '            <p>\n' +
      '              Twelveish is an open-source Wear OS (Android Wear) watch face that displays\n' +
      '            </p>\n' +
      '            <ul>\n' +
      '              <li>exact time and day of the week on the top</li>\n' +
      '              <li>date and battery percentage slightly below</li>\n' +
      '              <li>time in words, as well as two complications in the middle</li>\n' +
      '              <li>complication on the bottom</li>\n' +
      '              <li>(complications are only available on Wear OS and Android Wear 2.0 or higher)</li>\n' +
      '            </ul>\n' +
      '            <p>\n' +
      '              Other features:\n' +
      '            </p>\n' +
      '            <ul>\n' +
      '              <li>Over 30 background colors to choose from</li>\n' +
      '              <li>Over 30 main and secondary colors both for active mode and ambient</li>\n' +
      '              <li>3 complications (2 round, 1 long or round)</li>\n' +
      '              <li>Option to disable tapping on complications - useful if you constantly open them by accident</li>\n' +
      '              <li>16 different date format combinations</li>\n' +
      '              <li>5 capitalization options</li>\n' +
      '              <li>12 and 24 hour digital and word clock formats</li>\n' +
      '              <li>show/hide almost any info (digital and word clocks, date, battery percentage, complication) with different combinations both for active and ambient modes</li>\n' +
      '              <li>11 languages (Dutch, English, Finnish, German, Greek, Hungarian, Italian, Lithuanian, Norwegian, Russian and Spanish)</li>\n' +
      '              <li>11 fonts that are compatible with all languages</li>\n' +
      '              <li>Wear OS (Android Wear) 1.5 and above support</li>\n' +
      '              <li>Chin (flat tire) support</li>\n' +
      '              <li>Square screen support</li>\n' +
      '            </ul>\n' +
      '            <p>\n' +
      '              Feel free to contribute with translations, bug fixes or additional features. More about it here: <a href="https://github.com/LayoutXML/Twelveish#contributing">https://github.com/LayoutXML/Twelveish#contributing</a>\n' +
      '            </p>';
    twelveish.publications = [androidAuthority];
    twelveish.links = [googlePlay, github];
    twelveish.googlePlayBannerUrl = 'https://play.google.com/store/apps/details?id=com.layoutxml.twelveish&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
    return twelveish;
  }

  private getSabs(): Project {
    const lifehacker = new Publication();
    lifehacker.title = 'Lifehacker';
    lifehacker.codename = lifehacker.title.toLowerCase();
    lifehacker.url = 'https://lifehacker.com/this-free-ad-blocker-for-samsung-phones-also-kills-bloa-1823927074/';
    lifehacker.archiveUrl = 'https://web.archive.org/web/20190120125748/https://lifehacker.com/this-free-ad-blocker-for-samsung-phones-also-kills-bloa-1823927074';
    lifehacker.articleName = 'This Free Ad Blocker for Samsung Phones Also Kills Bloatware and Manages App Permissions';

    const xda = new Publication();
    xda.title = 'xda-developers';
    xda.codename = xda.title;
    xda.url = 'https://www.xda-developers.com/sabs-ad-blocker-samsung-galaxy-phones/';
    xda.archiveUrl = 'https://web.archive.org/web/20190120125753/https://www.xda-developers.com/sabs-ad-blocker-samsung-galaxy-phones/';
    xda.articleName = '\'Simple Ad-blocker for Samsung\' blocks ads, manages permissions, and disables packages on Galaxy phones';

    const gizmodo = new Publication();
    gizmodo.title = 'Gizmodo';
    gizmodo.codename = gizmodo.title.toLowerCase();
    gizmodo.url = 'https://www.gizmodo.com.au/2018/04/this-free-ad-blocker-for-samsung-phones-also-kills-bloatware-and-manages-app-permissions/';
    gizmodo.archiveUrl = 'https://web.archive.org/web/20190120125759/https://www.gizmodo.com.au/2018/04/this-free-ad-blocker-for-samsung-phones-also-kills-bloatware-and-manages-app-permissions/';
    gizmodo.articleName = 'This Free Ad Blocker For Samsung Phones Also Kills Bloatware And Manages App Permissions';

    const sabs = new Project();
    sabs.title = 'SABS';
    sabs.codename = sabs.title.toLowerCase();
    sabs.summary = 'SABS was a minimalistic system-wide rootless adblocker, package disabler and permission manager with more than 100,000 downloads.';
    sabs.description = 'SABS was a system-wide, rootless AdBlocker, package disabler, permission manager and more. It worked by using Samsung\'s KNOX SDK, therefore only worked on Samsung devices. What made SABS stand out from other adblockers is that it could make reversable system level changes because of the Samsung\'s KNOX tools, and didn\'t run in the background. With it, you could easily block url domains, disable system apps that you can\'t in settings, remove permissions from apps that you can\'t usually control.<br><br>' +
      'During a few months of its existence, SABS had been downloaded more than 100,000 times from GitHub repository alone (this number does not include downloads from other sources).';
    sabs.publications = [lifehacker, xda, gizmodo];
    return sabs;
  }

  private getTickTock(): Project {
    const googlePlay = new Link();
    googlePlay.type = UrlType.GOOGLE_PLAY;
    googlePlay.url = 'https://play.google.com/store/apps/details?id=com.rokasjankunas.ticktock';

    const github = new Link();
    github.type = UrlType.GITHUB;
    github.url = 'https://github.com/LayoutXML/TickTock-Wear';

    const ticktock = new Project();
    ticktock.title = 'TickTock Wear';
    ticktock.codename = 'ticktock';
    ticktock.summary = 'TickTock Wear adds a ticking sound to your Wear OS (Android Wear) smart watch.';
    ticktock.description = '<p>\n' +
      '              TickTock Wear is a Wear OS (Android Wear) application that adds a ticking sound to your smart watch.\n' +
      '            </p>\n' +
      '            <p>\n' +
      '              Other features:\n' +
      '            </p>\n' +
      '            <ul>\n' +
      '              <li>Restrictions: time, battery percentage and charging status</li>\n' +
      '              <li>Integrations - other apps and watch faces can integrate with TickTock Wear to add more features</li>\n' +
      '              <li>Additional sounds</li>\n' +
      '              <li>Hourly chime with volume and duration settings</li>\n' +
      '            </ul>';
    ticktock.links = [googlePlay, github];
    ticktock.googlePlayBannerUrl = 'https://play.google.com/store/apps/details?id=com.rokasjankunas.ticktock&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
    return ticktock;
  }

  private getVanillaMinecraftDocker(): Project {
    const github = new Link();
    github.type = UrlType.GITHUB;
    github.url = 'https://github.com/LayoutXML/vanilla-minecraft-docker';

    const dockerHub = new Link();
    dockerHub.type = UrlType.DOCKER_HUB;
    dockerHub.url = 'https://hub.docker.com/r/layoutxml/vanilla-minecraft-docker';

    const vanillaMinecraftDocker = new Project();
    vanillaMinecraftDocker.title = 'vanilla-minecraft-docker';
    vanillaMinecraftDocker.codename = 'vanilla-minecraft-docker';
    vanillaMinecraftDocker.summary = 'A hassle free docker image that allows running a vanilla Minecraft server in no time.';
    vanillaMinecraftDocker.description = 'A hassle free docker image that allows running a vanilla Minecraft server in no time. For Linux.';
    vanillaMinecraftDocker.links = [github, dockerHub];
    return vanillaMinecraftDocker;
  }

  private getPaperMcDocker(): Project {
    const github = new Link();
    github.type = UrlType.GITHUB;
    github.url = 'https://github.com/LayoutXML/papermc-docker';

    const dockerHub = new Link();
    dockerHub.type = UrlType.DOCKER_HUB;
    dockerHub.url = 'https://hub.docker.com/r/layoutxml/papermc-docker';

    const papermcDocker = new Project();
    papermcDocker.title = 'papermc-docker';
    papermcDocker.codename = 'papermc-docker';
    papermcDocker.summary = 'A hassle free docker image that allows running a PaperMc Minecraft server in no time.';
    papermcDocker.description = 'A hassle free docker image that allows running a PaperMc Minecraft server in no time. For Linux.';
    papermcDocker.links = [github, dockerHub];
    return papermcDocker;
  }
}
