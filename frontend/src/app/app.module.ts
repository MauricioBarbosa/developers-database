import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  NgModule,
  importProvidersFrom,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  RouterOutlet,
  provideRouter,
} from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginModule } from './login/login.module';
import { InMemoryDataService } from './mock/in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {
        dataEncapsulation: false,
      }
    ),
    LoginModule,
    CommonModule,
    RouterOutlet,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
  ],
})
export class AppModule {}
