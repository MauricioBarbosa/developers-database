import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertTypes } from "../shared/application/components/alert/enum/alert-types";
import { AlertService } from "../shared/application/components/alert/service/alert.service";
import { AuthService } from "../shared/application/service/auth/auth.service";
import { LoginRequestDto } from "./model/login-request.dto";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
@Injectable()
export class LoginComponent {
  public model: LoginRequestDto;
  public submitting: boolean;
  public usernameInformed: boolean;
  public passwordInformed: boolean;

  constructor(
    private readonly authenticationService: AuthService,
    private readonly alertService: AlertService,
    private readonly router: Router,
  ) {
    this.model = new LoginRequestDto("", "", true);
    this.submitting = false;
    this.usernameInformed = true;
    this.passwordInformed = true;
  }

  ngOnInit() {
    this.model = new LoginRequestDto("", "", true);
  }

  onSubmit(model: LoginRequestDto) {
    if (!model.username || !model.password) {
      if (!model.username) {
        this.usernameInformed = false;
      }

      if (!model.password) {
        this.passwordInformed = false;
      }

      return;
    }

    this.passwordInformed = true;
    this.usernameInformed = true;
    this.submitting = true;

    this.authenticationService.authenticate(this.model).subscribe((result) => {
      if (result.isErr) {
        this.alertService.push({
          alertType: AlertTypes.DANGER,
          message: "An error has occurred on authentication",
          seconds: 8,
        });
      } else {
        this.alertService.push({
          alertType: AlertTypes.SUCCESS,
          message: "Successfully logged",
          seconds: 8,
        });

        this.router.navigate(["/home"]);
      }
      this.submitting = false;
    });
  }
}
