import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/superadmin.service';
import { filter } from 'rxjs';
import { toArray } from 'rxjs';
import { map } from 'rxjs';
@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {
  malelist:any[]=[];
  imageurls:any;
  malegroup:any[]=[];
  currentpage:number=1;
  itemsperpage:number=5;
  constructor(private admin:SuperadminService) {
    this.imageurls=admin.image_urls
  }

  ngOnInit(): void {
    this.list();


  }
list(){
  this.admin.profile().pipe(

              map(res=>res.filter((m:any)=>m.gender=="Male"))


              ).subscribe(
                      (res)=>{
                        this.malelist=res
                        console.log(res)

                      }
  )
}



}
