import { Component } from "@angular/core";
import { BreadCrumbDto } from "../../../shared/application/components/breadcrumb/dto/breadcrumb.dto";

@Component({
  selector: "app-companies-list",
  templateUrl: "./companies-list.component.html",
  styleUrl: "./companies-list.component.css",
})
export class CompaniesListComponent {
  breadcrumbs: Array<BreadCrumbDto>;

  ngOnInit() {
    this.breadcrumbs = [
      {
        active: false,
        label: "Home",
        url: "/home",
      },
      {
        active: true,
        label: "Manage Companies",
        url: "/manage-companies",
      },
    ];
  }
}
