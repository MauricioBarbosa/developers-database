import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService extends InMemoryDbService {
  constructor() {
    super();
  }

  override createDb(
    reqInfo?: RequestInfo | undefined,
  ): {} | Observable<{}> | Promise<{}> {
    const users = [
      { id: 1, username: "some.user", password: "some.user.password" },
    ];

    return { users };
  }
}
