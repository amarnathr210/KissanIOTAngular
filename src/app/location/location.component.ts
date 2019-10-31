import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../_services";
import { User } from "../_models";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.css"]
})
export class LocationComponent {
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
