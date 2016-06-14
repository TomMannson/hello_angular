import {HTTP_PROVIDERS, Http} from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, Injectable, provide } from '@angular/core';
import { NowaAppComponent, environment } from './app/';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

if (environment.production) {
  enableProdMode();
}

// bootstrap(NowaAppComponent, [HTTP_PROVIDERS, HTTP_PROVIDERS]);
bootstrap(NowaAppComponent, [
  HTTP_PROVIDERS,
  provide(TranslateLoader, {
    useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
    deps: [Http]
  }),
  // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
  TranslateService
]);

