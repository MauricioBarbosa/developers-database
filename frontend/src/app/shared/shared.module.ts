import { NgModule } from '@angular/core';
import { FooterComponent } from './application/components/footer/footer.component';
import { HeaderComponent } from './application/components/header/header.component';
import { LoadingComponent } from './application/components/loading/loading.component';
import { AuthService } from './application/service/auth/auth.service';
import { HttpService } from './application/service/http/http.service';
import { AngularHttpService } from './infrastructure/services/http/angular-http.http.service';

@NgModule({
  imports: [],
  providers: [
    { provide: HttpService, useValue: AngularHttpService },
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    AuthService,
    AngularHttpService,
  ],
  exports: [
    AuthService,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    AngularHttpService,
  ],
})
export class SharedModule {}
