import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Planets, PlanetsService, UserLogin } from '../shared';
import {TranslatePipe} from "ng2-translate/ng2-translate";

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  pipes: [TranslatePipe]
})
export class DashboardComponent implements OnInit {

  // planetsList: Planets[] = [];
  model = new UserLogin('', 'asd');
  submitted = false;

  elementRef: ElementRef;

  constructor(
    private _planetservice: PlanetsService,
    private _router: Router,elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
    // this._planetservice.getPlanets().then(planets => this.planetsList = planets);
    // jQuery(this.elementRef.nativeElement).find('button').on('click',function(){
    //   console.log('qwerty 34534345');
    // });
  }

  loginError = null;
  passwordError = null;

  onSubmit() { this.submitted = true;
    console.log('onSubmit 34534345');
  }

  addNumbers() {
    this.loginError = "test login error";
    this.passwordError = "test password error";
    console.log('test 12345');
  }

}
