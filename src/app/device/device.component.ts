import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../_services";
import { User } from "../_models";

@Component({
  selector: "app-device",
  templateUrl: "./device.component.html",
  styleUrls: ["./device.component.css"]
})
export class DeviceComponent {
  public user: User;
  public isUserLoggedIn: boolean;
  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    if (this.user) {
      this.isUserLoggedIn = true;
    }
  }
}
