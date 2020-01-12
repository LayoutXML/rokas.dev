import {AfterViewInit, Component, HostListener} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  isFirstEvent = true;
  extraHeight = 64;
  extraHeightAdjusted = 8;
  lastScroll: string;
  lastTime = Date.now();

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/projects':
            setTimeout(() => {
              const projectsElement = document.getElementById('projects');
              if (projectsElement) {
                window.scrollTo({top: projectsElement.offsetTop - this.extraHeight, behavior: 'smooth'});
                this.isFirstEvent = false;
              }
            }, this.isFirstEvent ? 1000 : 1);
            break;
          case '/about':
            setTimeout(() => {
              const aboutElement = document.getElementById('about');
              if (aboutElement) {
                window.scrollTo({top: aboutElement.offsetTop - this.extraHeightAdjusted, behavior: 'smooth'});
                this.isFirstEvent = false;
              }
            }, this.isFirstEvent ? 1000 : 1);
            break;
          case '/contacts':
            setTimeout(() => {
              const contactsElement = document.getElementById('contacts');
              if (contactsElement) {
                window.scrollTo({top: contactsElement.offsetTop - this.extraHeightAdjusted, behavior: 'smooth'});
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
    });
  }

  onScroll(location) {
    const now = Date.now();
    if (now - this.lastTime > 100) {
      if (location !== this.lastScroll) {
        window.history.pushState(null, null, location);
      }
      this.lastTime = now;
    }
  }

  @HostListener('scroll', ['$event'])
  onElementScroll(event) {
    console.log(event);
  }
}
