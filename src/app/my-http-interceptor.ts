import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("intercepted request ... ");
        let loadingContainer: HTMLElement = document.getElementsByClassName('loading').item(0) as HTMLElement;
        loadingContainer.style.display = 'block';
        // Clone the request to add the new header.
        // const authReq = req.clone({ headers: req.headers.set("headerName", "headerValue") });

        console.log("Sending request with new header now ...");

        //send the newly created request
        return next.handle(req).pipe(
            tap(event => {
              if (event instanceof HttpResponse) {
                    loadingContainer.style.display = 'none';       
              }
            }, error => {
              loadingContainer.style.display = 'none';                       
              console.error('NICE ERROR', error)
            })
          )
        }   
}