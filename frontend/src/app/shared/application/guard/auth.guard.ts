import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AlertTypes } from "../components/alert/enum/alert-types";
import { AlertService } from "../components/alert/service/alert.service";
import { AuthService } from "../service/auth/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const alertService = inject(AlertService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    console.log(alertService);

    alertService.push({
      alertType: AlertTypes.DANGER,
      message: `You must login first to acess this route`,
      seconds: 10,
    });

    return router.parseUrl("/login");
  }

  return true;
};
