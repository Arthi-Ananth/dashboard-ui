import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { section: 'Favorites', items: [
      { name: 'Overview', icon: 'bi bi-grid-fill', active: true },
      { name: 'Projects', icon: 'bi bi-folder-fill', active: false }
    ]},
    { section: 'Dashboards', items: [
      { name: 'Overview', icon: 'bi bi-pie-chart-fill', active: false },
      { name: 'eCommerce', icon: 'bi bi-cart-fill', active: false },
      { name: 'Projects', icon: 'bi bi-folder2-open', active: false },
      { name: 'Online Courses', icon: 'bi bi-book-fill', active: false }
    ]},
    { section: 'Pages', items: [
      { name: 'User Profile', icon: 'bi bi-person-badge', active: false },
      { name: 'Account', icon: 'bi bi-person-circle', active: false },
      { name: 'Corporate', icon: 'bi bi-building', active: false },
      { name: 'Blog', icon: 'bi bi-newspaper', active: false },
      { name: 'Social', icon: 'bi bi-people-fill', active: false }
    ]}
  ];
}
