import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavigationStart, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  static extraHeight = 64;
  isFirstEvent = true;
  isHomePage = true;

  activeUrl: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  newUrl: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  static compareHeights(scrollPosition, elementTop, elementHeight) {
    return scrollPosition + RoutingService.extraHeight < elementTop + elementHeight && scrollPosition > elementTop;
  }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        setTimeout(() => {
          // on next tick
          this.activeUrl.next(event.url);
          this.doScroll();
        });
      }
    });
  }

  routeTo(url: string) {
    this.newUrl.next(url);
    if (url && this.activeUrl.getValue() !== url) {
      this.activeUrl.next(url);
      window.history.replaceState(null, null, url);
      this.doScroll();
      if (!this.isHomePage) {
        this.router.navigateByUrl(url);
      }
    }
  }

  private doScroll() {
    if (!this.isHomePage) {
      return;
    }
    switch (this.activeUrl.getValue()) {
      case '/projects':
        setTimeout(() => {
          const projectsElement = document.getElementById('projects');
          if (projectsElement) {
            window.scrollTo({top: projectsElement.offsetTop - RoutingService.extraHeight, behavior: 'smooth'});
            this.isFirstEvent = false;
          }
        }, this.isFirstEvent ? 1000 : 1);
        break;
      case '/about':
        setTimeout(() => {
          const aboutElement = document.getElementById('about');
          if (aboutElement) {
            window.scrollTo({top: aboutElement.offsetTop - RoutingService.extraHeight, behavior: 'smooth'});
            this.isFirstEvent = false;
          }
        }, this.isFirstEvent ? 1000 : 1);
        break;
      case '/contacts':
        setTimeout(() => {
          const contactsElement = document.getElementById('contacts');
          if (contactsElement) {
            window.scrollTo({top: contactsElement.offsetTop - RoutingService.extraHeight, behavior: 'smooth'});
            this.isFirstEvent = false;
          }
        }, this.isFirstEvent ? 1000 : 1);
        break;
      default:
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.isFirstEvent = false;
        break;
    }
  }
}
