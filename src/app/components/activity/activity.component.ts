import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {
  notifications = [
    { title: 'You fixed a bug.', time: 'Just now', icon: 'bi bi-bug' },
    { title: 'New user registered.', time: '59 minutes ago', icon: 'bi bi-person-plus' },
    { title: 'You fixed a bug.', time: '12 hours ago', icon: 'bi bi-bug' },
    { title: 'Andi Lane subscribed to you.', time: 'Today, 11:59 AM', icon: 'bi bi-broadcast' }
  ];

  activities = [
    { title: 'Changed the style.', time: 'Just now', user: 'CB' },
    { title: 'Released a new version.', time: '59 minutes ago', user: 'RV' },
    { title: 'Submitted a bug.', time: '12 hours ago', user: 'SB' },
    { title: 'Modified A data in Page X.', time: 'Today, 11:59 AM', user: 'MX' },
    { title: 'Deleted a page in Project X.', time: 'Feb 2, 2024', user: 'DP' }
  ];

  contacts = [
    { name: 'Natali Craig', status: 'Online' },
    { name: 'Drew Cano', status: 'Online' },
    { name: 'Andi Lane', status: 'Offline' },
    { name: 'Koray Okumus', status: 'Online' },
    { name: 'Kate Morrison', status: 'Online' },
    { name: 'Melody Macy', status: 'Online' }
  ];
}
