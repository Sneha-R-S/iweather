import { Component, OnInit } from '@angular/core';
import {RestapiService  } from '../restapi.service';
@Component({
  selector: 'app-atlanta',
  templateUrl: './atlanta.page.html',
  styleUrls: ['./atlanta.page.scss'],
})
export class AtlantaPage implements OnInit {
  private forecast;
  
  constructor(public restapi:RestapiService ) { 
  }


  ngOnInit() {
    this.restapi.getatlanta().subscribe( (response ) => {
      console.log( response );
      const data = JSON.stringify(response);
      const jsdt  = JSON.parse(data);
      const jsdt1 = jsdt['properties'];
      this.forecast = jsdt1['periods'];
      console.log(this.forecast);

     
    });
    
  }

}
