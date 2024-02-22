import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
  ],
})
export class SharedModule {}
