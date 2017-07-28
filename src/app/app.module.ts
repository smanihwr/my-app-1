import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }  from '@angular/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './login-form/login.service';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
    {
      path: '',
      component: LoginFormComponent
    },
    {
      path: "home-page",
      component: HomePageComponent
    }
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
