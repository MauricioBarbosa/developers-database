import { Result } from '@badrap/result';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { AuthenticationDto } from './dto/authentication.dto';

export class AuthService {
  private accessToken: string;

  constructor(private httpService: HttpService) {}

  public authenticate(
    authenticationDto: AuthenticationDto
  ): Observable<Result<null>> {
    /**
     * Consulta API de autenticação
     * Salva o Token
     */
    throw new Error('Some error');
  }

  private setToken(token: string) {
    this.accessToken = token;
  }
}
