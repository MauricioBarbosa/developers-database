import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxBootstrapIconsModule, filePersonFill } from "ngx-bootstrap-icons";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [FormsModule,SharedModule, NgxBootstrapIconsModule.pick({
        filePersonFill
    })],
    declarations: [LoginComponent]
})

export class LoginModule {}