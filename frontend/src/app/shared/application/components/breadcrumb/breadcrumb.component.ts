import { Component, Input } from "@angular/core";
import { BreadCrumbDto } from "./dto/breadcrumb.dto";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrl: "./breadcrumb.component.css",
})
export class BreadcrumbComponent {
  @Input({
    required: true,
  })
  breadcrumbs: Array<BreadCrumbDto>;

  constructor() {}
}
