"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var shared_1 = require('../shared');
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var DashboardComponent = (function () {
    function DashboardComponent(_planetservice, _router, elementRef) {
        this._planetservice = _planetservice;
        this._router = _router;
        // planetsList: Planets[] = [];
        this.model = new shared_1.UserLogin('', 'asd');
        this.submitted = false;
        this.loginError = null;
        this.passwordError = null;
        this.elementRef = elementRef;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this._planetservice.getPlanets().then(planets => this.planetsList = planets);
        // jQuery(this.elementRef.nativeElement).find('button').on('click',function(){
        //   console.log('qwerty 34534345');
        // });
    };
    DashboardComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('onSubmit 34534345');
    };
    DashboardComponent.prototype.addNumbers = function () {
        this.loginError = "test login error";
        this.passwordError = "test password error";
        console.log('test 12345');
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
            pipes: [ng2_translate_1.TranslatePipe]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map