import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../../shared/models/user';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http = inject(HttpClient);

  users$ = this.getUsers().pipe(
    share()
  );

  getUsers() {
    return this.http.get<User[]>(
      'https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers'
    );
  }
}
