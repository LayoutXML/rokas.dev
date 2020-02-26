import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main/main.component';

const routes: Routes = [
  {path: '', runGuardsAndResolvers: 'always', component: MainComponent},
  {path: 'home', runGuardsAndResolvers: 'always', redirectTo: '/'},
  {path: 'projects', runGuardsAndResolvers: 'always', component: MainComponent},
  {path: 'about', runGuardsAndResolvers: 'always', component: MainComponent},
  {path: 'contacts', runGuardsAndResolvers: 'always', component: MainComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
