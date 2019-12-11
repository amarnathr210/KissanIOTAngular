import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LocationComponent } from "./location/location.component";
import { DeviceComponent } from "./device/device.component";
import { AuthGuard } from "./_guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      title: ""
    }
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule",
    data: {
      customLayout: true
    }
  },
  { path: "device", component: DeviceComponent, canActivate: [AuthGuard] },
  { path: "location", component: LocationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule {}
