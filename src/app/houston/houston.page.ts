import { Component, OnInit } from '@angular/core';
import {RestapiService  } from '../restapi.service';
@Component({
  selector: 'app-houston',
  templateUrl: './houston.page.html',
  styleUrls: ['./houston.page.scss'],
})
export class HoustonPage implements OnInit {
  private forecast;

  constructor(public restapi:RestapiService ) { 
  }

  ngOnInit() {
    this.restapi.gethouston().subscribe( (response ) => {
      console.log( response );
      const data = JSON.stringify(response);
      const jsdt  = JSON.parse(data);
      const jsdt1 = jsdt['properties'];
      this.forecast = jsdt1['periods'];
      console.log(this.forecast);
    });
    
  }

}