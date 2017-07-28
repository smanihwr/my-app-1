import { Component, OnInit } from '@angular/core';
import { LoginRequest} from './login-request';
import { LoginResponse} from './login-response';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();
  loginResponse: LoginResponse;
  loginResponseStr = [];

  constructor(private loginSvc : LoginService, private router: Router) { 
  }

  ngOnInit() {
  }

  onSubmit() {
     this.loginSvc.login(this.loginRequest).subscribe(
       data => {
          this.loginResponse = new LoginResponse();
          this.loginResponse.fillFromJSON(JSON.stringify(data));
          console.log(this.loginResponse.status);
          console.log(this.loginResponse.statusDesc);

          if(this.loginResponse.status == "SUCCESS"){
          this.router.navigate(['/home-page']);
          } else {
            this.loginRequest.username="";
            this.loginRequest.password="";
          }
       },
       error => alert(error),
       () => console.log('Request completed')
     );
    }
 }

