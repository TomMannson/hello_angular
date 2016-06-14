import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Planets, PlanetsService } from '../shared';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  planetsList: Planets[] = [];
  elementRef: ElementRef;

  constructor(
    private _planetservice: PlanetsService,
    private _router: Router,elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
    this._planetservice.getPlanets().then(planets => this.planetsList = planets);
    jQuery(this.elementRef.nativeElement).find('button').on('click',function(){
      console.log('qwerty 34534345');
    });
  }

  loginError = null;
  passwordError = null;

  addNumbers() {
    this.loginError = "test login error";
    this.passwordError = "test password error";
    console.log('test 12345');
  }

}
