import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../../services/users.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [
    CommonModule,
    UserComponent,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [UsersService],
})
export class ListComponent {
  usersService = inject(UsersService);
  fb = inject(FormBuilder);

  users$ = this.usersService.users$;
  faTrash = faTrash;
  faPen = faPen;

  usersForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
  });
}
