import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  lat2: number = 36.88426897212234;
  lng2: number = 10.31315332614148;

  lat3: number =36.89639169933899;
  lng3: number = 10.312515385741857;


  lat4: number = 36.8766721187418;
  lng4: number = 10.330414268458103;



  lat : number | undefined;
  lng: number | undefined;

  constructor() {}

  ngOnInit() {

    this.getUserLocation()
      
  }

  private getUserLocation() {

    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition (position => {

        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
     });

    
  }


}



}
