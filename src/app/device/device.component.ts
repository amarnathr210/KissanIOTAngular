import { Component, OnInit } from "@angular/core";
import { AuthenticationService, DeviceService } from "../_services";
import { User, Deviceinfo } from "../_models";

@Component({
  selector: "app-device",
  templateUrl: "./device.component.html",
  styleUrls: ["./device.component.css"]
})
export class DeviceComponent {
  public user: User;
  public isUserLoggedIn: boolean;
  public devicetoken: Deviceinfo[];
  constructor(
    public authenticationService: AuthenticationService,
    public deviceService: DeviceService
  ) {}

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    if (this.user) {
      this.isUserLoggedIn = true;
    }
    this.deviceService.getDeviceInfobyUserID(this.user).subscribe(data => {
      this.devicetoken = data;
    });
  }
}
