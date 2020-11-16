import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ProjectViewComponent} from './pages/project/project-view.component';

const routes: Routes = [
  {path: '', runGuardsAndResolvers: 'always', component: MainComponent, },
  {path: 'home', runGuardsAndResolvers: 'always', redirectTo: '/', pathMatch: 'full'},
  {path: 'projects', runGuardsAndResolvers: 'always', component: MainComponent},
  {path: 'about', runGuardsAndResolvers: 'always', component: MainComponent},
  {path: 'contacts', runGuardsAndResolvers: 'always', component: MainComponent},
  {path: 'projects/:codename', runGuardsAndResolvers: 'always', component: ProjectViewComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
