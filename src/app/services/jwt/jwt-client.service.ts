import { UserSignIn } from './../../components/models/user-sign-in';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: "text" as "json",
    withCredentials: true, 
    observe: 'response' as 'response'
  };

  constructor(private http:HttpClient) { }

  public generateToken(request) {
    return this.http.post<any>("http://localhost:8080/authenticate", request, this.httpOptions);
  }

  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get("http://localhost:8080/", {headers, responseType: 'text' as 'json'});
  }

  public register(user: any) {
    
    return this.http.post<UserSignIn>("http://localhost:8080/register", user);
  }
}
