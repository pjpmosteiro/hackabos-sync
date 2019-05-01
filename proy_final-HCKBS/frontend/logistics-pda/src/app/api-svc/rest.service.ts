import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
    const endpoint = `${environment.apiBaseUrl}/lgs01/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      //Todos los trackings
      getTracks(): Observable<any> {
        return this.http.get(endpoint + '').pipe(
          map(this.extractData));
      },
      //solo el tracking especificado en la url
      getTrack(id): Observable<any> {
        return this.http.get(endpoint + '/' + id).pipe(
          map(this.extractData));
      }

    };
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
