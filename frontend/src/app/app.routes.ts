import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ManageCompaniesComponent } from "./manage-companies/manage-companies.component";
import { authGuard } from "./shared/application/guard/auth.guard";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: "manage-companies",
    component: ManageCompaniesComponent,
    canActivate: [authGuard],
  },
  {
    path: "**",
    component: LoginComponent,
  },
];
