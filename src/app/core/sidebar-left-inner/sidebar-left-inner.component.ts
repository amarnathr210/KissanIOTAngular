import { Component } from "@angular/core";
import { AuthenticationService } from "../../_services";
import { User } from "../../_models";

@Component({
  selector: "app-sidebar-left-inner",
  templateUrl: "./sidebar-left-inner.component.html"
})
export class SidebarLeftInnerComponent {
  public user: User;
  constructor(public authenticationService: AuthenticationService) {}
  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
  }
}
