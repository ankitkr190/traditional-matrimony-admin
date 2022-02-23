import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'matri-admin';
  adminusername:any;
  constructor(private router:Router){
    this.adminusername=sessionStorage.getItem("username")
  }

  adminlogout(){
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("email")
    sessionStorage.removeItem("superuser")

    this.router.navigate(['/'])
    window.location.reload();


  }
}
