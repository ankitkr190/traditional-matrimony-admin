import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/superadmin.service';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {
  malelist:any[]=[]
  constructor(private admin:SuperadminService) { }

  ngOnInit(): void {
    this.list();

  }
list(){
  this.admin.lits_of_profile("Male").subscribe(
    (res)=>{
      this.malelist=res;
      console.log(res)

    }
  )
}

}
