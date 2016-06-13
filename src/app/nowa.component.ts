import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { PlanetsService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'nowa-app',
  templateUrl: 'nowa.component.html',
  styleUrls: ['nowa.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, PlanetsService]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent}
])
export class NowaAppComponent {
  title = 'nowa works!';
}
