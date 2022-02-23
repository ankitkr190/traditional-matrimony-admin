import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { filter } from 'rxjs';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuperadminService {
  urls='http://18.220.177.210:8000/tradition/';
  image_urls="http://18.220.177.210:8000"
  constructor(private http:HttpClient) { }
  headers=new HttpHeaders()
  .set('Authorization',"Token 2b24c6bda13ae2ead460851bb6d0d4e687d75246");

  profile():Observable<any>{
    return this.http.get<any>(this.urls+"admin/profile",{"headers":this.headers})

  }
  adminlogin(data:any):Observable<any>{
    return this.http.post<any>(this.urls+"admin/auth/login",data)
  }
}
