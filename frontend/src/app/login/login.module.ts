import { NgModule } from "@angular/core";
import { NgxBootstrapIconsModule, filePersonFill } from "ngx-bootstrap-icons";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [SharedModule, NgxBootstrapIconsModule.pick({
        filePersonFill
    })],
    declarations: [LoginComponent]
})

export class LoginModule {}