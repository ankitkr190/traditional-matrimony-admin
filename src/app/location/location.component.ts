import { Component, OnInit } from '@angular/core';
import { SuperadminService } from '../superadmin.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  profiles:any[]=[];
  imageurls:any;
  constructor(private admin:SuperadminService) {
    this.imageurls=this.admin.image_urls
  }

  ngOnInit(): void {
    this.admin.profile().subscribe(res=>this.profiles=res)
  }

}
