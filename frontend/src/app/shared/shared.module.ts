import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxBootstrapIconsModule, filePersonFill } from "ngx-bootstrap-icons";
import { AlertComponent } from "./application/components/alert/alert.component";
import { AlertService } from "./application/components/alert/service/alert.service";
import { BreadcrumbComponent } from "./application/components/breadcrumb/breadcrumb.component";
import { FooterComponent } from "./application/components/footer/footer.component";
import { HeaderComponent } from "./application/components/header/header.component";
import { LoadingComponent } from "./application/components/loading/loading.component";
import { AuthService } from "./application/service/auth/auth.service";
import { HttpService } from "./application/service/http/http.service";
import { AngularHttpService } from "./infrastructure/services/http/angular-http.http.service";

@NgModule({
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick({
      filePersonFill,
    }),
  ],
  providers: [{ provide: HttpService, useClass: AngularHttpService }, AuthService, AlertService],
  declarations: [
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    BreadcrumbComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    AlertComponent,
    BreadcrumbComponent,
  ],
})
export class SharedModule {}
