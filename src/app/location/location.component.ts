import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
 
  constructor() {
   
  }

  ngOnInit(): void {
<<<<<<< HEAD
    this.admin.profile().subscribe(res=>{this.profiles=res,console.log(res.length)})
=======
    
>>>>>>> 3ccbc9212e21360f8dc8989fd6aefdbeb48516d5
  }

}
