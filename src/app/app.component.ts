import {Component, HostListener} from '@angular/core';
import {RoutingService} from './services/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  scrollTimer;

  constructor(private routingService: RoutingService) {
  }

  @HostListener('window:scroll', ['$event'])
  onElementScroll(event) {
    clearTimeout(this.scrollTimer);
    this.scrollTimer = setTimeout(() => {
      this.handleScroll();
    }, 300);
  }

  handleScroll() {
    this.scrollTimer = null;
    const scrollPosition = document.documentElement.scrollTop;
    const screenHeight = window.innerHeight;
    const scrollHeight = document.body.offsetHeight;
    const homeElement = document.getElementById('home');
    const projectsElement = document.getElementById('projects');
    const aboutElement = document.getElementById('about');
    const contactsElement = document.getElementById('contacts');
    if (scrollPosition === 0 || RoutingService.compareHeights(scrollPosition, 0, homeElement.offsetTop + homeElement.offsetHeight)) {
      window.history.replaceState(null, null, '');
      this.routingService.activeUrl.next('/');
    } else if (RoutingService.compareHeights(scrollPosition, projectsElement.offsetTop, projectsElement.offsetHeight)) {
      window.history.replaceState(null, null, 'projects');
      this.routingService.activeUrl.next('/projects');
    } else if (scrollPosition + screenHeight < scrollHeight - RoutingService.extraHeight && RoutingService.compareHeights(scrollPosition, aboutElement.offsetTop, aboutElement.offsetHeight)) {
      window.history.replaceState(null, null, 'about');
      this.routingService.activeUrl.next('/about');
    } else if (scrollPosition + screenHeight >= scrollHeight - RoutingService.extraHeight || RoutingService.compareHeights(scrollPosition, contactsElement.offsetTop, contactsElement.offsetHeight)) {
      window.history.replaceState(null, null, 'contacts');
      this.routingService.activeUrl.next('/contacts');
    }
  }
}
