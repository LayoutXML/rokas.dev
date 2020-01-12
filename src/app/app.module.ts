import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IntroComponent} from './modals/intro/intro.component';
import {ProjectsComponent} from './modals/projects/projects.component';
import {AboutComponent} from './modals/about/about.component';
import {ContactComponent} from './modals/contact/contact.component';
import {NavbarComponent} from './modals/navbar/navbar.component';
import {FooterComponent} from './modals/footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
