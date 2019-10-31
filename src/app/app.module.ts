import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { material } from "./_helpers/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./_guards/auth.guard";
import { AuthenticationService, UserService } from "./_services/index";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegistrationComponent } from './registration/registration.component';
import { DeviceComponent } from './device/device.component';
import { LocationComponent } from './location/location.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, RegistrationComponent, DeviceComponent, LocationComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    material
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
