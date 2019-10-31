import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { AuthenticationService } from "../_services";
import { User } from "../_models";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  // @Input() user: User;
  @Input() isUserLoggedIn: boolean;

  public user: User;
  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {
    if (this.isUserLoggedIn)
      this.user = this.authenticationService.currentUserValue;
  }

  logout() {
    this.authenticationService.logout();
    if (this.isUserLoggedIn) {
      window.location.reload();
    }
  }
  showdiv(event) {
    event.srcElement.childNodes[1].style = "display:visible";
    console.log(event);
  }
  hidediv(event) {
    event.srcElement.childNodes[1].style = "display:none";
    console.log(event);
  }
}
