import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http : HttpClient
  ) { }
  post(url:string, data:any){
    return this.http.post(environment.url+'/'+url, data)
  }
  get(url:string){
    return this.http.get(environment.url+'/'+url)
  }
  patch(url:string,data:any){
    return this.http.patch(environment.url+'/'+url,data)
  }
  delete(url:string){
    return this.http.delete(environment.url+'/'+url)
  }
}
