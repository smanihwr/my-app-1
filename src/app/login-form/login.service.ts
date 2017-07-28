import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  
  http_url: string = "http://localhost:8080/crm/services/login";
  loginResponse: LoginResponse;

  constructor(private http: Http) { 
  }

  login(loginRequest: LoginRequest){
    console.log("LoginService.login - userName " + loginRequest.username);

    let headers = new Headers({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Origin' : '*' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.http_url, loginRequest, options).map( res => res.json());

  }

}