import { Component } from "@angular/core";
import { BreadCumbDto } from "../../shared/application/components/breadcumb/dto/breadcumb.dto";

@Component({
  selector: "app-companies-list",
  templateUrl: "./companies-list.component.html",
  styleUrl: "./companies-list.component.css",
})
export class CompaniesListComponent {
  breadcumbs: Array<BreadCumbDto>;

  ngOnInit() {
    this.breadcumbs = [
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
