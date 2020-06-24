import { Component, OnInit } from '@angular/core';
import {RestapiService  } from '../restapi.service';
@Component({
  selector: 'app-boston',
  templateUrl: './boston.page.html',
  styleUrls: ['./boston.page.scss'],
})
export class BostonPage implements OnInit {
  private forecast;

  constructor(public restapi:RestapiService ) { 
  }

  ngOnInit() {
    this.restapi.getboston().subscribe( (response ) => {
      console.log( response );
      const data = JSON.stringify(response);
      const jsdt  = JSON.parse(data);
      const jsdt1 = jsdt['properties'];
      this.forecast = jsdt1['periods'];
      console.log(this.forecast);
    });
    
  }

}
