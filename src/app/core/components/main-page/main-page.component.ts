import { Component } from '@angular/core';
import { ListComponent } from '../../../features/components/list/list.component';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../features/services/users.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, ListComponent],
  providers: [UsersService],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
