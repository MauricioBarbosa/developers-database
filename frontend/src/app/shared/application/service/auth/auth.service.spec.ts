import { TestBed } from '@angular/core/testing';
import { Result } from '@badrap/result';
import { of } from 'rxjs';
import { HttpService } from '../http/http.service';
import { AuthService } from './auth.service';
import { AuthenticationDto } from './dto/authentication.dto';

describe('Testing AuthService.authenticate method', () => {
  let httpServiceMock: jasmine.SpyObj<HttpService>;
  let authServiceMock: AuthService;

  const authenticationDto: AuthenticationDto = {
    keepMeConnected: false,
    password: '',
    username: '',
  };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpService', [
      'post',
    ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpService, useValue: spy },
        AuthService,
      ],
    });

    httpServiceMock = TestBed.inject(
      HttpService
    ) as jasmine.SpyObj<HttpService>;

    authServiceMock = TestBed.inject(AuthService);
  });

  it('should return a failed result when httpService retrieves an error', (done: DoneFn) => {
    const error = new Error('someError');

    httpServiceMock.post.and.returnValue(
      of(Result.err(error))
    );

    authServiceMock
      .authenticate(authenticationDto)
      .subscribe((result: Result<any>) => {
        expect(result.isErr).toBe(true);
        done();
      });
  });
  it('should return a failed result when saving token on cache retrieves an error', () => {});
});
