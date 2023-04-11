import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'service', component: ServicesComponent},
      {path: 'about', component: AboutUsComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'register', component: RegisterComponent},
    ]),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
