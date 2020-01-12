import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IntroComponent} from './modals/intro/intro.component';
import {ProjectsComponent} from './modals/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
