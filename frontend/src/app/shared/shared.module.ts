import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    imports: [],
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent]
})

export class SharedModule {}