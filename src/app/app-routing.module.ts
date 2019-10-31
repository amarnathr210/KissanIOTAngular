import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LocationComponent } from "./location/location.component";
import { DeviceComponent } from "./device/device.component";
import { AuthGuard } from "./_guards/auth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "location", component: LocationComponent, canActivate: [AuthGuard] },
  { path: "device", component: DeviceComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule {}
