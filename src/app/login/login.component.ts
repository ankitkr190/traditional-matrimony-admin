import { Component, OnInit } from '@angular/core';
import { SuperadminService } from '../superadmin.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  constructor(private admin:SuperadminService,
            private fb:FormBuilder,
            private router:Router) {
      this.loginForm= fb.group({
        username:[""],
        password:[""]
      })
   }

  ngOnInit(): void {
  }

  onsubmit(){
    const data={
      "username":this.loginForm.value.username,
      "password":this.loginForm.value.password
    }
    console.log(data)
    this.admin.adminlogin(data).subscribe(
      (res)=>{

        if (res.status){
          sessionStorage.setItem("username",res.username)
          sessionStorage.setItem("token",res.token)
          sessionStorage.setItem("emial",res.email)
          sessionStorage.setItem("superuser",res.superuser)
          this.router.navigate(['/'])
          window.location.reload();
          alert(res.username)



        }
        else{
          alert(res.message)
        }
      },
      (e)=>{
        console.log(e)
        this.loginForm.reset()
        alert(e.error.message)
      }
    )
  }



}
