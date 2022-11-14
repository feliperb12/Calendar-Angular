import { IEvent } from './../interfaces/ievent.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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

constructor(private http: HttpClient,private _snack: MatSnackBar) { }

create(eventos: IEvent): Observable<IEvent>{
  return this.http.post<IEvent>(this.apiUrl,eventos, this.httpOptions);
}

getEvents():Observable<IEvent[]>{
  return this.http.get<IEvent[]>(this.apiUrl);
}

findById(id:String) : Observable<IEvent>{
  return this.http.get<IEvent>(`${this.apiUrl}/${id}`);
}

update(eventos:IEvent):Observable<void>{
  const url = `${this.apiUrl}/${eventos.id}`
  return this.http.put<void>(url,eventos);
}
delete(id:String):Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

mensagem(str: String): void {
  this._snack.open(`${str}`, 'OK', {
    horizontalPosition: `end`,
    verticalPosition: `top`,
    duration: 3000
  })
}



}
