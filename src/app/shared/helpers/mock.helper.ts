import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

/**
 * this simulates the behaviour of Angular's http module:
 * if the status code is not a 2XX, it will return a failing Observable
 */
export function response(status: number): Observable<Response> {
  return responseBody(null, status);
}

/**
 * this simulates the behaviour of Angular's http module:
 * if the status code is not a 2XX, it will return a failing Observable
 */
export function responseBody(
  body: string | Object | ArrayBuffer,
  status = 200
): Observable<Response> {
  const res = new Response(new ResponseOptions({ status, body }));

  if (status >= 200 && status < 300) {
    return Observable.of(res).delay(environment.httpDelay);
  } else {
    return Observable.throw(res)
      .materialize()
      .delay(environment.httpDelay)
      .dematerialize();
  }
}
