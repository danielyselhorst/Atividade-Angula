import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  listarUsuarios(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.api);
  }

  buscarUsuarioPorId(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.api}/${id}`);
  }
}
