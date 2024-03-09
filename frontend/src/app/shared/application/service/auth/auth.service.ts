import { Injectable } from "@angular/core";
import { Result } from "@badrap/result";
import { Observable, map } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { TokenDto } from "../../../../login/model/token.dto";
import { HttpService } from "../http/http.service";
import { AuthenticationDto } from "./dto/authentication.dto";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private accessToken: string;
  private apiUrl: string;

  constructor(private readonly httpService: HttpService) {
    this.accessToken = "";
    this.apiUrl = environment.apiUrl;
  }

  public authenticate(authenticationDto: AuthenticationDto): Observable<Result<null>> {
    return this.httpService
      .post<TokenDto>(`${this.apiUrl + "/login"}`, {}, { ...authenticationDto })
      .pipe(
        map((result) => {
          if (result.isErr) {
            return Result.err(result.error);
          }

          this.setToken(result.unwrap().accessToken);

          return Result.ok(null);
        }),
      );
  }

  public isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  private setToken(token: string) {
    this.accessToken = token;
  }
}
