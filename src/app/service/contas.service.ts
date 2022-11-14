import { IContas } from 'src/app/interfaces/contas.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ContasService {
  apiUrl = 'contas'
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient,private _snack: MatSnackBar) {

   }

   findAll():Observable<IContas[]>{
      return this.http.get<IContas[]>(this.apiUrl,this.httpOptions);
   }

   findById(id:String): Observable<IContas>{
    return this.http.get<IContas>(`${this.apiUrl}/${id}`,this.httpOptions);
   }

   findByMes(mes:String):Observable<IContas[]>{
    return this.http.get<IContas[]>(`${this.apiUrl}/mes/${mes}`);
   }

   create(contas: IContas) : Observable<IContas>{
    return this.http.post<IContas>(this.apiUrl,contas);
   }

   update(contas: IContas): Observable<void>{
    const url= `${this.apiUrl}/${contas.id}`;
    return this.http.put<void>(url,contas);
   }

   somaValores(id:String): Observable<Number>{
    const url = `${this.apiUrl}/valorTotal/${id}`;
    return this.http.get<Number>(url)
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
