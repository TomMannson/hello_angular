"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PlanetsService = (function () {
    function PlanetsService() {
    }
    PlanetsService.prototype.getPlanets = function () {
        return Promise.resolve(PLANETSDATA);
    };
    PlanetsService = __decorate([
        core_1.Injectable()
    ], PlanetsService);
    return PlanetsService;
}());
exports.PlanetsService = PlanetsService;
var PLANETSDATA = [
    { position: 1, name: 'Mercury', distanceFromSun: 58, description: '88 earth days to orbit the sun' },
    { position: 2, name: 'Venus', distanceFromSun: 108, description: '225 earth days to orbit the sun' },
    { position: 3, name: 'Earth', distanceFromSun: 150, description: '365 earth days to orbit the sun' },
    { position: 4, name: 'Mars', distanceFromSun: 228, description: '686 earth days to orbit the sun' },
    { position: 5, name: 'Jupiter', distanceFromSun: 778, description: '12 earth years to orbit the sun' },
    { position: 6, name: 'Saturn', distanceFromSun: 886, description: '29 earth years to orbit the sun' },
    { position: 7, name: 'Uranus', distanceFromSun: 1800, description: '84 earth years to orbit the sun' },
    { position: 8, name: 'Neptune', distanceFromSun: 2800, description: '165 earth years to orbit the sun' }
];
//# sourceMappingURL=planets.service.js.map