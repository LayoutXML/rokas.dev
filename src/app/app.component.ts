import {AfterViewInit, Component, HostListener, ViewChild} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {NavbarComponent} from './modals/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  static extraHeight = 64;
  isFirstEvent = true;
  activeUrl: string;
  scrollTimer;

  @ViewChild(NavbarComponent, {static: false}) navbar: NavbarComponent;

  constructor(private router: Router) {
  }

  static compareHeights(scrollPosition, elementTop, elementHeight) {
    return scrollPosition + AppComponent.extraHeight < elementTop + elementHeight && scrollPosition > elementTop;
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.activeUrl = event.url;
        this.doScroll();
      }
    });

    this.navbar.url.subscribe(url => {
      if (url && this.activeUrl !== url) {
        this.activeUrl = url;
        this.doScroll();
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onElementScroll(event) {
    clearTimeout(this.scrollTimer);
    this.scrollTimer = setTimeout(() => {
      this.handleScroll();
    }, 300);
  }

  doScroll() {
    switch (this.activeUrl) {
      case '/projects':
        setTimeout(() => {
          const projectsElement = document.getElementById('projects');
          if (projectsElement) {
            window.scrollTo({top: projectsElement.offsetTop - AppComponent.extraHeight, behavior: 'smooth'});
            this.isFirstEvent = false;
          }
        }, this.isFirstEvent ? 1000 : 1);
        break;
      case '/about':
        setTimeout(() => {
          const aboutElement = document.getElementById('about');
          if (aboutElement) {
            window.scrollTo({top: aboutElement.offsetTop - AppComponent.extraHeight, behavior: 'smooth'});
            this.isFirstEvent = false;
          }
        }, this.isFirstEvent ? 1000 : 1);
        break;
      case '/contacts':
        setTimeout(() => {
          const contactsElement = document.getElementById('contacts');
          if (contactsElement) {
            window.scrollTo({top: contactsElement.offsetTop - AppComponent.extraHeight, behavior: 'smooth'});
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

  handleScroll() {
    this.scrollTimer = null;
    const scrollPosition = document.documentElement.scrollTop;
    const screenHeight = window.innerHeight;
    const scrollHeight = document.body.offsetHeight;
    const homeElement = document.getElementById('home');
    const projectsElement = document.getElementById('projects');
    const aboutElement = document.getElementById('about');
    const contactsElement = document.getElementById('contacts');
    if (scrollPosition === 0 || AppComponent.compareHeights(scrollPosition, 0, homeElement.offsetTop + homeElement.offsetHeight)) {
      window.history.replaceState(null, null, '');
      this.activeUrl = '/';
    } else if (AppComponent.compareHeights(scrollPosition, projectsElement.offsetTop, projectsElement.offsetHeight)) {
      window.history.replaceState(null, null, 'projects');
      this.activeUrl = '/projects';
    } else if (scrollPosition + screenHeight < scrollHeight - AppComponent.extraHeight && AppComponent.compareHeights(scrollPosition, aboutElement.offsetTop, aboutElement.offsetHeight)) {
      window.history.replaceState(null, null, 'about');
      this.activeUrl = '/about';
    } else if (scrollPosition + screenHeight >= scrollHeight - AppComponent.extraHeight || AppComponent.compareHeights(scrollPosition, contactsElement.offsetTop, contactsElement.offsetHeight)) {
      window.history.replaceState(null, null, 'contacts');
      this.activeUrl = '/contacts';
    }
  }
}
