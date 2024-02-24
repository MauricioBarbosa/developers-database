import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Result } from '@badrap/result';
import { ResponseHasNoBodyException } from '../../../application/service/http/error/http.exception';
import { AngularHttpService } from './angular-http.http.service';

describe('Testing AngularHttpService.get method', () => {
  let angularHttpService: AngularHttpService;
  let httpMock: HttpTestingController;

  const url = 'https://example.com/api/data';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AngularHttpService, HttpClient],
    });

    httpMock = TestBed.inject(HttpTestingController);
    angularHttpService = TestBed.inject(AngularHttpService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Should return an error', (done: DoneFn) => {
    const error = new ProgressEvent('');

    angularHttpService
      .get(url, {})
      .subscribe((result: Result<any>) => {
        expect(result.isErr).toBe(true);
        done();
      });

    const req = httpMock.expectOne(url);
    req.error(error);
  });

  it('Should return ResponseHasNoBodyException', (done: DoneFn) => {
    angularHttpService
      .get(url, {})
      .subscribe((result: Result<any>) => {
        expect(result.isErr).toBe(true);
        expect(
          (result as Result.Err<any, Error>).error
        ).toBeInstanceOf(ResponseHasNoBodyException);
        done();
      });

    const req = httpMock.expectOne(url);
    req.flush(null);
  });

  it('Should return a ok result', (done: DoneFn) => {
    const response = {
      message: 'it is a success',
    };

    angularHttpService
      .get<{ message: string }>(url, {})
      .subscribe((result: Result<any>) => {
        expect(result.isErr).toBe(false);
        expect(result.unwrap()).toBe(response);
        done();
      });

    const req = httpMock.expectOne(url);
    req.flush(response);
  });
});

describe('Testing AngularHttpService.post method', () => {
  let angularHttpService: AngularHttpService;
  let httpMock: HttpTestingController;

  const url = 'https://example.com/api/data';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AngularHttpService, HttpClient],
    });

    httpMock = TestBed.inject(HttpTestingController);
    angularHttpService = TestBed.inject(AngularHttpService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Should return an error', (done: DoneFn) => {
    const error = new ProgressEvent('');

    angularHttpService
      .post(url, {}, {})
      .subscribe((result: Result<any>) => {
        expect(result.isErr).toBe(true);
        done();
      });

    const req = httpMock.expectOne(url);
    req.error(error);
  });

  it('Should return a ok result', () => {
    angularHttpService
      .post(url, {}, {})
      .subscribe((result: Result<null>) => {
        expect(result.isErr).toBe(false);
      });

    const req = httpMock.expectOne(url);
    req.flush(
      {},
      {
        status: 201,
        statusText: 'OK',
      }
    );
  });
});
