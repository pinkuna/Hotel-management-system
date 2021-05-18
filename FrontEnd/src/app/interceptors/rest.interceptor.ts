import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, finalize, delay } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ComponentFixture } from '@angular/core/testing';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class RestInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar,
    private loadingService: LoadingService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const url = `${environment.baseURL}api/${request.url}`
    const urlReq = request.clone({ url })

    this.loadingService.indeterminate.next(true)
    return next.handle(urlReq).pipe(
      tap(event => {
        if (event instanceof HttpRequest) {

        }
      }),
      delay(1000),
      finalize(() => {
        this.loadingService.indeterminate.next(false);
      })
    )
  }
}


