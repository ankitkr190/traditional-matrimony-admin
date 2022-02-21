import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/superadmin.service';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot,ActivatedRoute, } from '@angular/router';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  userid:any;
  user:any
  imageurls:any;
  constructor( private admin:SuperadminService,private activeroute:ActivatedRoute) {
    this.activeroute.paramMap.subscribe(
      (res)=>{
        this.userid=res.get('id')

      }

    )
    this.imageurls=admin.image_urls
  }

  ngOnInit(): void {
    console.log(this.userid)
    this.singleProfiledetails();
  }

  singleProfiledetails(){
    this.admin.singleprofilefulldetails(this.userid).subscribe(
      (res)=>{
        console.log(res);
        this.user=res[0];
      }
    )

  }
}
