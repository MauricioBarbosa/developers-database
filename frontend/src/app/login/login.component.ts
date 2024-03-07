import {
  Component,
  Injectable,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/application/components/alert/alert.component';
import { AlertTypes } from '../shared/application/components/alert/enum/alert-types';
import { AuthService } from '../shared/application/service/auth/auth.service';
import { LoginRequestDto } from './model/login-request.dto';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
@Injectable()
export class LoginComponent {
  @ViewChild(AlertComponent) alertComponent: AlertComponent;
  public model: LoginRequestDto;
  public submitting: boolean;
  public usernameInformed: boolean;
  public passwordInformed: boolean;

  constructor(
    private readonly authenticationService: AuthService,
    private readonly router: Router
  ) {
    this.model = new LoginRequestDto('', '', true);
    this.submitting = false;
    this.usernameInformed = true;
    this.passwordInformed = true;
  }

  ngOnInit() {
    this.model = new LoginRequestDto('', '', true);
  }

  onSubmit(model: LoginRequestDto) {
    if (!model.username || !model.password) {
      if (!model.username) {
        this.usernameInformed = false;
      }

      if (!model.password) {
        this.passwordInformed = false;
      }

      return;
    }

    this.passwordInformed = true;
    this.usernameInformed = true;
    this.submitting = true;

    this.authenticationService
      .authenticate(this.model)
      .subscribe((result) => {
        if (result.isErr) {
          this.alertComponent.show(
            8,
            AlertTypes.DANGER,
            'An error has occured on authentication'
          );
        } else {
          this.alertComponent.show(
            8,
            AlertTypes.SUCCESS,
            'Successfully logged'
          );

          this.router.navigate(['/home']);
        }
        this.submitting = false;
      });
  }
}
