import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { environment } from "../environments/environment";
import { AuthenticationService, DeviceService } from "./_services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public isUserLoggedIn: boolean;
  constructor(public authenticationService: AuthenticationService) {}

  events: string[] = [];
  opened: boolean;
  shouldRun = true;
}
