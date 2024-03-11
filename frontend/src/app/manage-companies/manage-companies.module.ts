import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ManageCompaniesComponent } from "./manage-companies.component";

@NgModule({
  imports: [SharedModule],
  declarations: [ManageCompaniesComponent],
})
export class ManageCompaniesModule {}
