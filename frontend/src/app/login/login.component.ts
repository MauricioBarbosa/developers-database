import { Component } from '@angular/core';
import { LoginRequestDto } from './dto/login-request.dto';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  model = new LoginRequestDto('', '', true)
  submitted = false;  

  constructor(){}

  onSubmit() { this.submitted = true; }
}
