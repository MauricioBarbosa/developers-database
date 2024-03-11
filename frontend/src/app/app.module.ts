import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet, provideRouter } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { HomeModule } from "./home/home.module";
import { LoginModule } from "./login/login.module";
import { ManageCompaniesModule } from "./manage-companies/manage-companies.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    LoginModule,
    ManageCompaniesModule,
    HomeModule,
    CommonModule,
    RouterOutlet,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)],
})
export class AppModule {}
