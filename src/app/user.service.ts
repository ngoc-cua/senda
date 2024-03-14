import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  protected userList: User[] = []
  AutoId() {
    var max = 1
    this.userList.forEach(item => {
      if (item.id > max) {
        max = item.id
      }
    })
    return max + 1
  }

  private URL = `http://localhost:3000/User`
  
  getAllUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}`)
  }
  getUsertId(id: number) {
    return this.http.get<User>(`${this.URL}/${id}`)
  }
  searchId(id: number) {
    return this.userList.find(item => item.id == id)
  }
  AddUser(formUser: any): Observable<User[]> {
    return this.http.post<User[]>(`${this.URL}`, formUser)
  }
  EditUser(index: number) {
    return this.userList[index]
  }
  UpdateUser(id: number, formUser: any): Observable<User[]> {
    return this.http.put<User[]>(`${this.URL}/${id}`, formUser)
  }
  DeleteUser(id: number): Observable<User[]> {
    return this.http.delete<User[]>(`${this.URL}/${id}`)
  }
}
