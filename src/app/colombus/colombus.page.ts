import { Component, OnInit } from '@angular/core';
import {RestapiService  } from '../restapi.service';
@Component({
  selector: 'app-colombus',
  templateUrl: './colombus.page.html',
  styleUrls: ['./colombus.page.scss'],
})
export class ColombusPage implements OnInit {
  private forecast;

  constructor(public restapi:RestapiService ) { 
  }

  ngOnInit() {
    this.restapi.getcolombus().subscribe( (response ) => {
      console.log( response );
      const data = JSON.stringify(response);
      const jsdt  = JSON.parse(data);
      const jsdt1 = jsdt['properties'];
      this.forecast = jsdt1['periods'];
      console.log(this.forecast);
    });
    
  }

}
