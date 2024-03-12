import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CompaniesListComponent } from "./companies-list/companies-list.component";
import { ManageCompaniesRoutingModule } from "./manage-companies-routing.module";

@NgModule({
  imports: [SharedModule, ManageCompaniesRoutingModule],
  declarations: [CompaniesListComponent],
})
export class ManageCompaniesModule {}
