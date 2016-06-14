"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var _dashboard_1 = require('./+dashboard');
var router_1 = require('@angular/router');
var shared_1 = require('./shared');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var NowaAppComponent = (function () {
    function NowaAppComponent(translate) {
        this.title = 'nowa works!';
        this.param = "world";
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang);
    }
    NowaAppComponent.prototype.addNumbers = function () {
        console.log('test 12345');
    };
    NowaAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nowa-app',
            templateUrl: 'nowa.component.html',
            styleUrls: ['nowa.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, shared_1.PlanetsService],
            pipes: [ng2_translate_1.TranslatePipe]
        }),
        router_1.Routes([
            { path: '/dashboard', component: _dashboard_1.DashboardComponent }
        ])
    ], NowaAppComponent);
    return NowaAppComponent;
}());
exports.NowaAppComponent = NowaAppComponent;
//# sourceMappingURL=nowa.component.js.map