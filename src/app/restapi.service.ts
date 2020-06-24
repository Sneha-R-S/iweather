import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  
  //weather_details
  washingtonurl:string =  'https://api.weather.gov/gridpoints/LWX/95,70/forecast';
  atlantaurl:string = 'https://api.weather.gov/gridpoints/FFC/50,85/forecast';
  colombusurl:string = 'https://api.weather.gov/gridpoints/ILN/85,80/forecast';
  denverurl:string= 'https://api.weather.gov/gridpoints/BOU/60,62/forecast';
  houstonurl:string='https://api.weather.gov/gridpoints/HGX/61,98/forecast';
  losangelesurl:string='https://api.weather.gov/gridpoints/LOX/153,38/forecast';
  louisvilleurl:string='https://api.weather.gov/gridpoints/LMK/49,74/forecast';
  bostonurl:string='https://api.weather.gov/gridpoints/BOX/56,71/forecast';
  miamiurl:string='https://api.weather.gov/gridpoints/MFL/109,50/forecast';
  portlandurl:string='https://api.weather.gov/gridpoints/PQR/117,101/forecast';
  rayleighurl:string='https://api.weather.gov/gridpoints/RAH/72,56/forecast';
  tucsonurl:string='https://api.weather.gov/gridpoints/TWC/91,48/forecast';

  //icons
  atlantaiconurl:string='https://api.weather.gov/icons/land/night/few?size=medium';
  bostoniconurl:string='https://api.weather.gov/icons/land/night/sct?size=medium';
  colombusiconurl:string='https://api.weather.gov/icons/land/night/bkn?size=medium';
  denvericonurl:string='https://api.weather.gov/icons/land/night/tsra_sct,30/tsra_sct,20?size=medium';
  houstoniconurl:string='https://api.weather.gov/icons/land/night/few?size=medium';
  losangelesiconurl:string='https://api.weather.gov/icons/land/night/fog?size=medium';
  louisvilleiconurl:string='https://api.weather.gov/icons/land/night/sct?size=medium';
  miamiiconurl:string='https://api.weather.gov/icons/land/night/tsra,50?size=medium';
  washingtoniconurl:string='https://api.weather.gov/icons/land/day/rain_showers,70/tsra,80?size=medium';
  portlandiconurl:string='https://api.weather.gov/icons/land/night/rain_showers,30?size=medium';
  rayleighiconurl:string='https://api.weather.gov/icons/land/night/few?size=medium';
  tucsoniconurl:string='https://api.weather.gov/icons/land/night/skc?size=medium';
  
  
  constructor(public httpclient : HttpClient) { 
    
  }
 
  public getwashington(){
    return this.httpclient.get(this.washingtonurl);
  
  }
  public getatlanta(){
    return this.httpclient.get(this.atlantaurl);
  
  }
  public getcolombus(){
    return this.httpclient.get(this.colombusurl);
  
  }
  public getdenver(){
    return this.httpclient.get(this.denverurl);
  
  }
  public gethouston(){
    return this.httpclient.get(this.houstonurl);
  
    
  }
  public getlosangeles(){
    return this.httpclient.get(this.losangelesurl);
  
  }
  public getlouisville(){
    return this.httpclient.get(this.louisvilleurl);
  
  }
  
  public getmiami(){
    return this.httpclient.get(this.miamiurl);
  
  }
  public getportland(){
    return this.httpclient.get(this.portlandurl);
  
  }
  public getrayleigh(){
    return this.httpclient.get(this.rayleighurl);
  
  }
  public gettucson(){
    return this.httpclient.get(this.tucsonurl);
  
  }
  public getboston(){
    return this.httpclient.get(this.bostonurl);
  
  }
  public getatlantaicon(){
    return this.httpclient.get(this.atlantaiconurl);
  
  }
  public getbostonicon(){
    return this.httpclient.get(this.bostoniconurl);
  
  }
  public getcolombusicon(){
    return this.httpclient.get(this.colombusiconurl);
  
  }
  public getdenvericon(){
    return this.httpclient.get(this.denvericonurl);
  
  }
  public gethoustonicon(){
    return this.httpclient.get(this.houstoniconurl);
  
  }
  public getlosangelesicon(){
    return this.httpclient.get(this.losangelesiconurl);
  
  }
  public getlouisvilleicon(){
    return this.httpclient.get(this.louisvilleiconurl);
  
  }
  public getmiamiicon(){
    return this.httpclient.get(this.miamiiconurl);
  
  }
  public getwashingtonicon(){
    return this.httpclient.get(this.washingtoniconurl);
  
  }
  public getportlandcon(){
    return this.httpclient.get(this.portlandiconurl);
  
  }
  public getrayleighicon(){
    return this.httpclient.get(this.rayleighiconurl);
  
  }
  public gettucsonicon(){
    return this.httpclient.get(this.tucsoniconurl);
  
  }
 
}
