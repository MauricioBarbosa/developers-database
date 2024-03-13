import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompaniesListComponent } from "./pages/companies-list/companies-list.component";

const manageCompaniesRoutes: Routes = [{ path: "", component: CompaniesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(manageCompaniesRoutes)],
  exports: [RouterModule],
})
export class ManageCompaniesRoutingModule {}
