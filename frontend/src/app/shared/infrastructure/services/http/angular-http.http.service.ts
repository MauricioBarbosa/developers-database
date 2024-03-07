import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '@badrap/result';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpBodyDto } from '../../../application/service/http/dto/http-body.dto';
import { HttpHeadersDto } from '../../../application/service/http/dto/http-headers.dto';
import { ResponseHasNoBodyException } from '../../../application/service/http/error/http.exception';
import { HttpService } from '../../../application/service/http/http.service';

@Injectable()
export class AngularHttpService extends HttpService {
  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  public override get<T>(
    url: string,
    headers: HttpHeadersDto
  ): Observable<Result<T>> {
    return this.httpClient.get<T>(url, { headers }).pipe(
      map((response) => {
        if (!response) {
          return Result.err(
            new ResponseHasNoBodyException()
          );
        }
        return Result.ok(response);
      }),
      catchError((error) => {
        return of(Result.err(error));
      })
    );
  }

  public override post<T>(
    url: string,
    headers: HttpHeadersDto,
    body: HttpBodyDto
  ): Observable<Result<T>> {
    return this.httpClient
      .post(url, body, { headers })
      .pipe(
        map((response: T) => {
          return Result.ok(response);
        }),
        catchError((error) => {
          return of(Result.err(error));
        })
      );
  }
}
