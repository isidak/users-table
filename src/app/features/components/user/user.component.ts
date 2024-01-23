import { Component, Input } from '@angular/core';
import { User } from '../../../shared/models/user';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../../services/users.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-user-item]',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    FontAwesomeModule,
    NgbDropdownModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user!: User;
  showButtons = false;
  faTrash = faTrash;
  faPen = faPen;
}
