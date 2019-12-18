import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { environment } from "../environments/environment";
import { AuthenticationService, DeviceService } from "./_services";
import { Deviceinfo, DeviceBaseLine, User } from "./_models";
import { ConstantsService } from "./_services/constants.service";
// import { LayoutService } from "angular-admin-lte";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public user: User;
  public isUserLoggedIn: boolean;
  public customLayout: boolean;

  constructor(
    public authenticationService: AuthenticationService,
    public constantsService: ConstantsService // private layoutService: LayoutService
  ) {}

  ngOnInit() {
    // this.layoutService.isCustomLayout.subscribe((value: boolean) => {
    //   this.customLayout = value;
    // });

    this.user = this.authenticationService.currentUserValue;
    if (this.user) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }
  ngDoCheck() {
    this.user = this.authenticationService.currentUserValue;
    if (this.user) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }

  events: string[] = [];
  opened: boolean;
  shouldRun = true;
}
