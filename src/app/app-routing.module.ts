import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', runGuardsAndResolvers: 'always', component: AppComponent},
  {path: 'home', runGuardsAndResolvers: 'always', redirectTo: '/'},
  {path: 'projects', runGuardsAndResolvers: 'always', component: AppComponent},
  {path: 'about', runGuardsAndResolvers: 'always', component: AppComponent},
  {path: 'contacts', runGuardsAndResolvers: 'always', component: AppComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
