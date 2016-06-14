import {HTTP_PROVIDERS} from '@angular/http';
import { Component} from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { PlanetsService } from './shared';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

@Component({
  moduleId: module.id,
  selector: 'nowa-app',
  templateUrl: 'nowa.component.html',
  styleUrls: ['nowa.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, PlanetsService],
  pipes: [TranslatePipe]

})
@Routes([
  {path: '/dashboard', component: DashboardComponent}
])
export class NowaAppComponent {
  title = 'nowa works!';
  param: string = "world";

  constructor(translate: TranslateService) {
    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(userLang);
  }
}
