import { Component } from '@angular/core';
import { LoginRequestDto } from './dto/login-request.dto';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public model: LoginRequestDto;
  public submitting: boolean;
  public usernameInformed: boolean;
  public passwordInformed: boolean;

  constructor() {
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
  }
}
