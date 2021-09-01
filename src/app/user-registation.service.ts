import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  ROOT_URL:String="http://jtechie.us-east-1.elasticbeanstalk.com";

  constructor(private http:HttpClient) { }


  public doRegistration(user){
    //return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
    return this.http.post(this.ROOT_URL+"/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    //return this.http.get("http://localhost:9090/getAllUsers");
    return this.http.get(this.ROOT_URL+"/getAllUsers");
  }

  public getUserByEmail(email){
    //return this.http.get("http://localhost:9090//findUser/"+email);
    return this.http.get(this.ROOT_URL+"/findUser/"+email);
  }

  public deleteUser(id){
    //return this.http.delete("http://localhost:9090/cancel/"+id);
    return this.http.delete(this.ROOT_URL+"/cancel/"+id);
  }
}
