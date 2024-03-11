import { Result } from '@badrap/result';
import { Observable } from 'rxjs';
import { HttpBodyDto } from './dto/http-body.dto';
import { HttpHeadersDto } from './dto/http-headers.dto';

export abstract class HttpService {
  public abstract get<T>(
    url: string,
    headers: HttpHeadersDto
  ): Observable<Result<T>>;

  public abstract post<T>(
    url: string,
    headers: HttpHeadersDto,
    body: HttpBodyDto
  ): Observable<Result<T>>;
}
