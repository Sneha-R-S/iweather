import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 
  userid: string;
  password: string;
  error: string;
    constructor(public router: Router){ }
 
    ngOnInit() {
    }
    login(){
      console.log('userid',this.userid);
      console.log('password',this.password);
      if(this.userid === 'R.S.Sneha')
      {
       if(this.password !== '1811049')
       {
        console.log('userid',this.password);
        this.error = 'Invalid Password';
       }
       else
       {
        //this.router.navigate(['home', '']);
        this.router.navigate(['country-list']);
       }
      }
      if(this.userid === 'R.Carlin Renita')
      {
       if(this.password !== '1811007')
       {
        console.log('userid',this.password);
        this.error = 'Invalid Password';
       }
       else
       {
        //this.router.navigate(['home', '']);
        this.router.navigate(['country-list']);
       }
      }
      if(this.userid === 'S.Tirumalai Nanthini')
      {
       if(this.password !== '1811010')
       {
        console.log('userid',this.password);
        this.error = 'Invalid Password';
       }
       else
       {
        //this.router.navigate(['home', '']);
        this.router.navigate(['country-list']);
       }
      }
      if(this.userid === 'Padma Parvathi')
      {
       if(this.password !== '1811031')
       {
        console.log('userid',this.password);
        this.error = 'Invalid Password';
       }
       else
       {
        //this.router.navigate(['home', '']);
         this.router.navigate(['country-list']);
       }
      }
 
    }
}

