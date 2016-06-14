"use strict";
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
if (_1.environment.production) {
    core_1.enableProdMode();
}
// bootstrap(NowaAppComponent, [HTTP_PROVIDERS, HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(_1.NowaAppComponent, [
    http_1.HTTP_PROVIDERS,
    core_1.provide(ng2_translate_1.TranslateLoader, {
        useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'assets/i18n', '.json'); },
        deps: [http_1.Http]
    }),
    // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
    ng2_translate_1.TranslateService
]);
//# sourceMappingURL=main.js.map