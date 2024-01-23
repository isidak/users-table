import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './features/components/list/list.component';
import { UserComponent } from './features/components/user/user.component';
import { MainPageComponent } from './core/components/main-page/main-page.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgOptimizedImage,
    MainPageComponent,
    ListComponent,
    UserComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'users-table';
}
