import { Component, OnInit, Input } from "@angular/core";
import { AuthenticationService, DeviceService } from "../_services";
import { Deviceinfo, DeviceBaseLine, User } from "../_models";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public user: User;
  public devicetoken: Deviceinfo[];
  public app: AppComponent;
  public isUserLoggedIn: boolean;
  constructor(
    public authenticationService: AuthenticationService,
    public deviceService: DeviceService
  ) {}

  ngOnInit() {
    // window.location.reload();
    this.user = this.authenticationService.currentUserValue;
    if (this.user) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
    this.deviceService.getDeviceInfobyUserID(this.user).subscribe(data => {
      this.devicetoken = data;
    });
  }

  onChangeDeviceStatus(deviceinfoinput: Deviceinfo, e) {
    if (e.target != null || e.target != undefined)
      deviceinfoinput.SensorStatus = e.target.checked;
    else {
      deviceinfoinput.SensorStatus = e.checked;
    }

    this.deviceService
      .updateSensorStatus(deviceinfoinput)
      .subscribe(data => (this.devicetoken = data));
  }
}
