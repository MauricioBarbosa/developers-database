import { Component, Input } from "@angular/core";
import { CompanyDto } from "../../dto/company.dto";

@Component({
  selector: "app-companies-table",
  templateUrl: "./companies-table.component.html",
  styleUrl: "./companies-table.component.css",
})
export class CompaniesTableComponent {
  @Input()
  companies: CompanyDto[];
  @Input()
  pageActive: number;
  @Input()
  numberOfPages: number;

  pages: number[];

  ngOnInit() {
    this.pages = Array.from({ length: this.numberOfPages }, (_, index) => index + 1);
  }
}
