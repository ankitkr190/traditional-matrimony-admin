import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/superadmin.service';
@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {
  femalelist:any[]=[];
  constructor(private admin:SuperadminService) { }

  ngOnInit(): void {
  }

  list(){
    this.admin.lits_of_profile("Female").subscribe(
      (res)=>{
        this.femalelist=res;
        console.log(res)
      }
    )
  }
}
