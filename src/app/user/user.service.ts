import {User} from '../user';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  Get(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/Users');
  }

  AddItem(user:  User) {
    // this.users.push(user);
  }


}
