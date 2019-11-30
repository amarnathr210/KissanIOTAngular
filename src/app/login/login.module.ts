import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConstantsService } from "./../_services/constants.service";

@NgModule({
  imports: [CommonModule, FormsModule, LoginRoutingModule],
  providers: [ConstantsService],
  declarations: [LoginComponent]
})
export class LoginModule {}
