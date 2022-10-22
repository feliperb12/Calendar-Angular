import { IEvent } from './../interfaces/ievent.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl = 'eventos'
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }

constructor(private http: HttpClient) { }

create(eventos: IEvent): Observable<IEvent>{
  return this.http.post<IEvent>(this.apiUrl,eventos, this.httpOptions);
}

getEvents():Observable<IEvent[]>{
  return this.http.get<IEvent[]>(this.apiUrl);
}

}
