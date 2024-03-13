import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { SearchComponent } from "./components/search/search.component";
import { ManageCompaniesRoutingModule } from "./manage-companies-routing.module";
import { CompaniesListComponent } from "./pages/companies-list/companies-list.component";

@NgModule({
  imports: [SharedModule, ManageCompaniesRoutingModule],
  declarations: [CompaniesListComponent, SearchComponent],
})
export class ManageCompaniesModule {}
