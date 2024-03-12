import { Component, Input } from "@angular/core";
import { BreadCumbDto } from "./dto/breadcumb.dto";

@Component({
  selector: "app-breadcumb",
  templateUrl: "./breadcumb.component.html",
  styleUrl: "./breadcumb.component.css",
})
export class BreadcumbComponent {
  @Input({
    required: true,
  })
  breadcumbs: Array<BreadCumbDto>;

  constructor() {}
}
