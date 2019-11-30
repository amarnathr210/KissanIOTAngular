import { Component } from "@angular/core";
import { AuthenticationService } from "../../_services";
import { User } from "../../_models";
@Component({
  selector: "app-header-inner",
  templateUrl: "./header-inner.component.html"
})
export class HeaderInnerComponent {
  public user: User;
  constructor(public authenticationService: AuthenticationService) {}
  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
  }
}
