import { Component, OnInit } from '@angular/core';
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
  this.admin.lits_of_profile("Male").subscribe(
    (res)=>{
      this.male=res.length;

    }
  )
}

femaleUsercount(){
  this.admin.lits_of_profile("Female").subscribe(
    (res)=>{
      this.female=res.length;

    }
  )
}
}
