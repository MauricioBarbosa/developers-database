import { NgModule } from "@angular/core";
import { NgxBootstrapIconsModule, pencilSquare, plusCircle, trash3Fill } from "ngx-bootstrap-icons";
import { SharedModule } from "../shared/shared.module";
import { CompaniesTableComponent } from "./components/companies-table/companies-table.component";
import { SearchComponent } from "./components/search/search.component";
import { ManageCompaniesRoutingModule } from "./manage-companies-routing.module";
import { CompaniesListComponent } from "./pages/companies-list/companies-list.component";

@NgModule({
  imports: [
    SharedModule,
    ManageCompaniesRoutingModule,
    NgxBootstrapIconsModule.pick({
      plusCircle,
      trash3Fill,
      pencilSquare,
    }),
  ],
  declarations: [CompaniesListComponent, SearchComponent, CompaniesTableComponent],
})
export class ManageCompaniesModule {}
