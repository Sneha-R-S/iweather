import { Component, OnInit } from '@angular/core';
import {RestapiService  } from '../restapi.service';
@Component({
  selector: 'app-louisville',
  templateUrl: './louisville.page.html',
  styleUrls: ['./louisville.page.scss'],
})
export class LouisvillePage implements OnInit {
  private forecast;

  constructor(public restapi:RestapiService ) { 
  }

  ngOnInit() {
    this.restapi.getlouisville().subscribe( (response ) => {
      console.log( response );
      const data = JSON.stringify(response);
      const jsdt  = JSON.parse(data);
      const jsdt1 = jsdt['properties'];
      this.forecast = jsdt1['periods'];
      console.log(this.forecast);
    });
    
  }

}