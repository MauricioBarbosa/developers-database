import { Injectable } from '@angular/core';
import { Result } from '@badrap/result';
import { Observable, map } from 'rxjs';
import { TokenDto } from '../../../../login/model/token.dto';
import { HttpService } from '../http/http.service';
import { AuthenticationDto } from './dto/authentication.dto';

@Injectable()
export class AuthService {
  private accessToken: string;

  constructor(private readonly httpService: HttpService) {
    this.accessToken = '';
  }

  public authenticate(
    authenticationDto: AuthenticationDto
  ): Observable<Result<null>> {
    return this.httpService
      .post<TokenDto>(
        '/login',
        {},
        { ...authenticationDto }
      )
      .pipe(
        map((result) => {
          if (result.isErr) {
            return Result.err(result.error);
          }

          this.setToken(result.unwrap().accessToken);

          return Result.ok(null);
        })
      );
  }

  private setToken(token: string) {
    this.accessToken = token;
  }
}
