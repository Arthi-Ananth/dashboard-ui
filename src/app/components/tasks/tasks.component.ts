import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = [
    { title: 'iOS App home page', date: 'Due on 23 Aug, 2019', completed: true },
    { title: 'Write a release note for Shreyu', date: 'Due on 22 Aug, 2019', completed: false },
    { title: 'Invite Greeva to a project shreyu admin', date: 'Due on 21 Aug, 2019', completed: false },
    { title: 'Enable analytics tracking for main website', date: 'Due on 20 Aug, 2019', completed: false },
    { title: 'Invite user to a project', date: 'Due on 18 Aug, 2019', completed: false },
    { title: 'Write a release note', date: 'Due on 18 Aug, 2019', completed: false }
  ];
}
