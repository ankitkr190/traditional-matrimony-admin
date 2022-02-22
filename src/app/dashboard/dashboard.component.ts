import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { SuperadminService } from '../superadmin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  male:any;
  female:any;
  constructor(private admin:SuperadminService) { }

  ngOnInit(): void {
    this.maleUsercount();
    this.femaleUsercount();
  }

maleUsercount(){
  this.admin.profile().pipe(
    map(res=>res.filter((m:any)=>m.gender=="Male")),
  )
  .subscribe(
    (res)=>{
      this.male=res.length;

    },

  )
}

femaleUsercount(){
  this.admin.profile().pipe(
    map(res=>res.filter((f:any)=>f.gender=="Female"))
  )
      .subscribe(
    (res)=>{
      this.female=res.length;

    }
  )
}
}
