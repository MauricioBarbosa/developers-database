import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequestDto } from '../dto/login-request.dto';
import { TokenDto } from '../dto/token.dto';

export class LoginService {
  private loginUrl: string;

  constructor(private http: HttpClient) {
    this.loginUrl = '/login';
  }

  async login(
    loginRequest: LoginRequestDto
  ): Promise<Observable<TokenDto>> {
    return await this.http.get<TokenDto>(this.loginUrl);
  }
}
