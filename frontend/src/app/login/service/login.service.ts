import { Observable } from 'rxjs';
import { AuthService } from '../../shared/application/service/auth/auth.service';
import { HttpService } from '../../shared/application/service/http/http.service';
import { LoginRequestDto } from '../model/login-request.dto';
import { TokenDto } from '../model/token.dto';

export class LoginService {
  private loginPath: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly authService: AuthService
  ) {
    this.loginPath = 'api/login';
  }

  async login(
    loginRequest: LoginRequestDto
  ): Promise<Observable<TokenDto>> {
    /**
     * In my opinion, I don't like the idea of the component be subscribed to the observable.
     * Maybe it should just know if they have the token or not. I think the service should return
     * a Result of the observable to the component so the component reacts to the result instead
     * of subscribing in an observable.
     */
    return await this.http.get<TokenDto>(this.loginPath);
  }
}
