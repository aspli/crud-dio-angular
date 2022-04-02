import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://sheet.best/api/sheets/f811653b-3804-4929-b8fd-447fd7c8fd1c";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - Create, Read, Update, Delete

  //Retorn a nossa lista de Usuarios READ
  getUser():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  // Salva usuario no banco CREATE
  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  //Exclui o usuario do banco DELETE
  deleteUser(id: number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }

  //Edita usuario UPDATE
  updateUser(id: string, user: User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user)
  }

  //Lista usuario unico 
  getUnicUser(id: string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }

} 
