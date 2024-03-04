import { Component, Injectable } from '@angular/core';
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
  public model: LoginRequestDto;
  public submitting: boolean;
  public usernameInformed: boolean;
  public passwordInformed: boolean;

  constructor(
    private readonly authenticationService: AuthService
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
          console.log('Ocorreu um erro');
        } else {
          console.log('Logado com sucesso');
        }
        this.submitting = false;
      });
  }
}
