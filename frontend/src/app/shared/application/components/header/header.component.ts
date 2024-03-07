import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isAuthenticated: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated =
      this.authService.isAuthenticated();
  }
}
