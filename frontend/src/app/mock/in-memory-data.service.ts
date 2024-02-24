import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { TokenDto } from '../login/model/token.dto';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService extends InMemoryDbService {
  constructor() {
    super();
  }

  override createDb(
    reqInfo?: RequestInfo | undefined
  ): {} | Observable<{}> | Promise<{}> {
    const users = [
      {
        id: 1,
        username: 'some.user',
        password: 'some.user.password',
      },
    ];

    const login: TokenDto = {
      accessToken: 'some.access.token',
    };

    return { users, login };
  }
}
