import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  constructor() {}

  ngOnInit() {}
  OnRegistration() {
    debugger;
    console.log(this.model.firstname);
  }
}
