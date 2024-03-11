import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { authGuard } from "./auth.guard";

describe("authGuardGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("Should return router.redirect once user is not logged", () => {});

  it("Should return true once user is logged", () => {});
});
